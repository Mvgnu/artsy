import type { Claim, Corpus, Entity, Evidence, Predicate, Source, TimeSpan } from "@artsy/core";

// PM-owned public surface; implementation lives in index.ts.
export type GraphIndex = {
  corpus: Corpus;
  entities: ReadonlyMap<string, Entity>;
  claims: ReadonlyMap<string, Claim>;
  outgoing: ReadonlyMap<string, readonly Claim[]>;
  incoming: ReadonlyMap<string, readonly Claim[]>;
};
export type Neighbor = {
  entity: Entity; claim: Claim; direction: "forward" | "reverse";
  label: string; group: string;
};
export type NeighborOptions = { predicates?: readonly Predicate[]; includeDisputed?: boolean; limit?: number };
export type ClaimExplanation = { claim: Claim; evidence: Evidence[]; sources: Source[] };
export type WalkStep = { nodeId: string; viaClaimId?: string; direction?: "forward" | "reverse" };
export type WalkState = { v: 1; dataset: string; steps: WalkStep[] };
export type WalkDecodeResult = { ok: true; walk: WalkState } | { ok: false; reason: string };
export type TemporalRelation = "possible-overlap" | "disjoint" | "unknown";
export type PathResult = { status: "found"; steps: WalkStep[] } | { status: "not-found" | "budget-exceeded"; visited: number };
export type TemporalComparator = (left: TimeSpan, right: TimeSpan) => TemporalRelation;
