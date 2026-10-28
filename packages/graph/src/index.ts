import { labelFor, predicateRegistry, validateCorpus } from "@artsy/core";
import type { Claim, Corpus, Entity, TimeSpan } from "@artsy/core";
import { z } from "zod";
import type {
  ClaimExplanation, GraphIndex, Neighbor, NeighborOptions, PathResult,
  TemporalRelation, WalkDecodeResult, WalkState, WalkStep,
} from "./contract";

export type * from "./contract";

const WALK_STEP_LIMIT = 64;
const WALK_CHARACTER_LIMIT = 8192;
const NEIGHBOR_LIMIT = 200;
const SEARCH_LIMIT = 100;
const PATH_VISIT_LIMIT = 10_000;
const PATH_EDGE_LIMIT = 100_000;

const WalkSchema = z.object({
  v: z.literal(1),
  dataset: z.string().min(1).max(200),
  steps: z.array(z.object({
    nodeId: z.string().min(1).max(200),
    viaClaimId: z.string().min(1).max(200).optional(),
    direction: z.enum(["forward", "reverse"]).optional(),
  }).strict()).min(1).max(WALK_STEP_LIMIT),
}).strict().superRefine((walk, context) => {
  walk.steps.forEach((step, index) => {
    if (index === 0 && (step.viaClaimId !== undefined || step.direction !== undefined)) {
      context.addIssue({ code: "custom", message: "The first step cannot have an incoming claim", path: ["steps", index] });
    }
    if (index > 0 && (!step.viaClaimId || !step.direction)) {
      context.addIssue({ code: "custom", message: "Every continuation needs a claim and direction", path: ["steps", index] });
    }
  });
}).transform((walk): WalkState => ({
  v: walk.v,
  dataset: walk.dataset,
  steps: walk.steps.map((step): WalkStep => {
    const result: WalkStep = { nodeId: step.nodeId };
    if (step.viaClaimId !== undefined) result.viaClaimId = step.viaClaimId;
    if (step.direction !== undefined) result.direction = step.direction;
    return result;
  }),
}));

function lexical(left: string, right: string): number {
  return left < right ? -1 : left > right ? 1 : 0;
}

function normalized(value: string): string {
  return value.normalize("NFKD").replace(/\p{M}/gu, "").toLowerCase().trim();
}

function boundedInteger(value: number | undefined, fallback: number, maximum: number): number {
  return value === undefined || !Number.isFinite(value)
    ? fallback
    : Math.max(0, Math.min(maximum, Math.floor(value)));
}

function discoverable(claim: Claim, includeDisputed = false): boolean {
  return claim.status === "asserted" || (includeDisputed && claim.status === "disputed");
}

/** Build all indexes from the same validated snapshot; audit retains every claim status. */
export function createGraph(corpus: Corpus): GraphIndex {
  const result = validateCorpus(corpus);
  if (!result.ok) {
    const first = result.issues[0];
    throw new Error(`Invalid graph corpus: ${first ? `${first.path}: ${first.message}` : "validation failed"}`);
  }
  const snapshot = result.corpus;
  const entities = new Map(snapshot.entities.map((entity) => [entity.id, entity]));
  const claims = new Map(snapshot.claims.map((claim) => [claim.id, claim]));
  const outgoing = new Map<string, Claim[]>();
  const incoming = new Map<string, Claim[]>();
  for (const claim of [...snapshot.claims].sort((a, b) => lexical(a.id, b.id))) {
    const subjectClaims = outgoing.get(claim.subject) ?? [];
    subjectClaims.push(claim);
    outgoing.set(claim.subject, subjectClaims);
    if (claim.object.type === "entity") {
      const objectClaims = incoming.get(claim.object.id) ?? [];
      objectClaims.push(claim);
      incoming.set(claim.object.id, objectClaims);
    }
  }
  return { corpus: snapshot, entities, claims, outgoing, incoming };
}

/** No derived edges: an inverse is a view of the original claim, with its evidence. */
function* adjacent(graph: GraphIndex, id: string, includeDisputed = false): Generator<Neighbor> {
  for (const claim of graph.outgoing.get(id) ?? []) {
    if (claim.object.type !== "entity" || !discoverable(claim, includeDisputed)) continue;
    const entity = graph.entities.get(claim.object.id);
    if (entity) yield {
      entity, claim, direction: "forward", label: predicateRegistry[claim.predicate].label,
      group: predicateRegistry[claim.predicate].group,
    };
  }
  for (const claim of graph.incoming.get(id) ?? []) {
    if (claim.subject === id || !discoverable(claim, includeDisputed)) continue;
    const entity = graph.entities.get(claim.subject);
    if (entity) yield {
      entity, claim, direction: "reverse", label: predicateRegistry[claim.predicate].inverseLabel,
      group: predicateRegistry[claim.predicate].group,
    };
  }
}

export function neighbors(graph: GraphIndex, id: string, options: NeighborOptions = {}): Neighbor[] {
  if (!graph.entities.has(id)) return [];
  const limit = boundedInteger(options.limit, 50, NEIGHBOR_LIMIT);
  if (limit === 0) return [];
  const allowed = options.predicates ? new Set(options.predicates) : undefined;
  return [...adjacent(graph, id, options.includeDisputed)]
    .filter((neighbor) => allowed === undefined || allowed.has(neighbor.claim.predicate))
    .sort((left, right) =>
      lexical(left.group, right.group)
      || lexical(normalized(labelFor(left.entity)), normalized(labelFor(right.entity)))
      || lexical(left.entity.id, right.entity.id)
      || lexical(left.claim.id, right.claim.id)
      || lexical(left.direction, right.direction))
    .slice(0, limit);
}

/** Explanation is available even for a superseded claim, for provenance inspection. */
export function explain(graph: GraphIndex, claimId: string): ClaimExplanation | undefined {
  const claim = graph.claims.get(claimId);
  if (!claim) return undefined;
  const evidenceIds = new Set(claim.evidenceIds);
  const evidence = graph.corpus.evidence.filter((entry) => evidenceIds.has(entry.id))
    .sort((a, b) => lexical(a.id, b.id));
  const sourceIds = new Set(evidence.map((entry) => entry.sourceId));
  const sources = graph.corpus.sources.filter((source) => sourceIds.has(source.id))
    .sort((a, b) => lexical(a.id, b.id));
  return { claim, evidence, sources };
}

type ParentStep = { from: string; claimId: string; direction: "forward" | "reverse" };

function reconstruct(from: string, to: string, parents: ReadonlyMap<string, ParentStep>): WalkStep[] | undefined {
  const result: WalkStep[] = [];
  let current = to;
  while (current !== from) {
    const parent = parents.get(current);
    if (!parent || result.length >= WALK_STEP_LIMIT - 1) return undefined;
    result.push({ nodeId: current, viaClaimId: parent.claimId, direction: parent.direction });
    current = parent.from;
  }
  result.push({ nodeId: from });
  return result.reverse();
}

/** Bounded BFS over asserted claims; a truncated search never reports proven absence. */
export function findPath(
  graph: GraphIndex,
  from: string,
  to: string,
  options: { maxDepth?: number; maxVisited?: number } = {},
): PathResult {
  if (!graph.entities.has(from) || !graph.entities.has(to)) return { status: "not-found", visited: 0 };
  const maxDepth = boundedInteger(options.maxDepth, 8, WALK_STEP_LIMIT - 1);
  const maxVisited = boundedInteger(options.maxVisited, 1000, PATH_VISIT_LIMIT);
  if (maxVisited === 0) return { status: "budget-exceeded", visited: 0 };
  if (from === to) return { status: "found", steps: [{ nodeId: from }] };
  const visited = new Set([from]);
  const parents = new Map<string, ParentStep>();
  const queue = [{ id: from, depth: 0 }];
  let cursor = 0;
  let scannedEdges = 0;
  let depthTruncated = false;
  while (cursor < queue.length) {
    const current = queue[cursor++];
    if (!current) break;
    for (const neighbor of adjacent(graph, current.id)) {
      scannedEdges += 1;
      if (scannedEdges > PATH_EDGE_LIMIT) return { status: "budget-exceeded", visited: visited.size };
      const target = neighbor.entity.id;
      if (visited.has(target)) continue;
      if (current.depth >= maxDepth) {
        depthTruncated = true;
        break;
      }
      if (visited.size >= maxVisited) return { status: "budget-exceeded", visited: visited.size };
      visited.add(target);
      parents.set(target, { from: current.id, claimId: neighbor.claim.id, direction: neighbor.direction });
      if (target === to) {
        const steps = reconstruct(from, to, parents);
        return steps ? { status: "found", steps } : { status: "budget-exceeded", visited: visited.size };
      }
      queue.push({ id: target, depth: current.depth + 1 });
    }
  }
  return { status: depthTruncated ? "budget-exceeded" : "not-found", visited: visited.size };
}

function toToken(value: WalkState): string {
  const bytes = new TextEncoder().encode(JSON.stringify(value));
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

/** Returns a URL-safe token, without a hash/query prefix. Throws instead of truncating. */
export function encodeWalk(walk: WalkState): string {
  const parsed = WalkSchema.safeParse(walk);
  if (!parsed.success) throw new Error("Invalid walk: use 1–64 steps, a dataset version and explicit continuations");
  const token = toToken(parsed.data);
  if (token.length > WALK_CHARACTER_LIMIT) throw new Error("This walk exceeds the 8192-character sharing limit");
  return token;
}

/** Decode untrusted shared state without evaluating HTML, URLs or code. */
export function decodeWalk(input: string, graph: GraphIndex): WalkDecodeResult {
  if (!input || input.length > WALK_CHARACTER_LIMIT || !/^[A-Za-z0-9_-]+$/.test(input) || input.length % 4 === 1) {
    return { ok: false, reason: "The walk token is malformed or exceeds 8192 characters" };
  }
  try {
    const base64 = input.replace(/-/g, "+").replace(/_/g, "/");
    const binary = atob(base64 + "=".repeat((4 - base64.length % 4) % 4));
    const bytes = Uint8Array.from(binary, (character) => character.charCodeAt(0));
    const raw: unknown = JSON.parse(new TextDecoder("utf-8", { fatal: true }).decode(bytes));
    const parsed = WalkSchema.safeParse(raw);
    if (!parsed.success) return { ok: false, reason: "The walk structure is invalid; version 1 permits 1–64 steps" };
    const walk = parsed.data;
    if (walk.dataset !== graph.corpus.datasetVersion) return { ok: false, reason: "This walk belongs to a different dataset version" };
    for (let index = 0; index < walk.steps.length; index += 1) {
      const step = walk.steps[index];
      if (!step || !graph.entities.has(step.nodeId)) return { ok: false, reason: "The walk contains an unknown entity" };
      if (index === 0) continue;
      const previous = walk.steps[index - 1];
      const claim = step.viaClaimId ? graph.claims.get(step.viaClaimId) : undefined;
      if (!previous || !claim || claim.object.type !== "entity") return { ok: false, reason: "A walk continuation has no entity relationship" };
      if (claim.status === "superseded") return { ok: false, reason: "The walk uses a superseded claim" };
      // Explicit disputed claims can be replayed; discovery still excludes them by default.
      const forward = claim.subject === previous.nodeId && claim.object.id === step.nodeId;
      const reverse = claim.object.id === previous.nodeId && claim.subject === step.nodeId;
      if ((step.direction === "forward" && !forward) || (step.direction === "reverse" && !reverse)) {
        return { ok: false, reason: "A claim does not connect the adjacent steps in the stated direction" };
      }
    }
    return { ok: true, walk };
  } catch {
    return { ok: false, reason: "The walk token does not contain valid UTF-8 JSON" };
  }
}

/** Compares possible date windows, never asserts simultaneous activity or influence. */
export function compareTime(left: TimeSpan, right: TimeSpan): TemporalRelation {
  if (left.earliest === null || left.latest === null || right.earliest === null || right.latest === null) return "unknown";
  if ([left.earliest, left.latest, right.earliest, right.latest].some((year) => !Number.isSafeInteger(year))) return "unknown";
  if (left.earliest > left.latest || right.earliest > right.latest) return "unknown";
  if ([left, right].some((time) => time.semantics === "unknown" || time.semantics === "index-window" || ["unknown", "before", "after"].includes(time.qualifier))) return "unknown";
  if (left.latest < right.earliest || right.latest < left.earliest) {
    // Circa has no automatic +/- tolerance. Non-overlapping nominal years cannot prove separation.
    return left.qualifier === "circa" || right.qualifier === "circa" ? "unknown" : "disjoint";
  }
  return "possible-overlap";
}

/** Deterministic name/alias/identifier lookup. No inferred semantic relationships. */
export function search(graph: GraphIndex, term: string): Entity[] {
  if (term.length > 200) return [];
  const needle = normalized(term);
  if (!needle) return [];
  const tokens = needle.split(/\s+/u);
  const matches: Array<{ entity: Entity; score: number }> = [];
  for (const entity of graph.entities.values()) {
    const labels = [entity.id, ...entity.labels.map((label) => label.text), ...entity.aliases.map((label) => label.text),
      ...entity.externalIds.map((external) => external.value)].map(normalized);
    let score = Infinity;
    for (const label of labels) {
      if (label === needle) score = Math.min(score, 0);
      else if (label.startsWith(needle)) score = Math.min(score, 1);
      else if (label.includes(needle)) score = Math.min(score, 2);
      else if (tokens.every((token) => label.includes(token))) score = Math.min(score, 3);
    }
    if (Number.isFinite(score)) matches.push({ entity, score });
  }
  return matches.sort((left, right) => left.score - right.score
    || lexical(normalized(labelFor(left.entity)), normalized(labelFor(right.entity)))
    || lexical(left.entity.id, right.entity.id)).slice(0, SEARCH_LIMIT).map((match) => match.entity);
}
