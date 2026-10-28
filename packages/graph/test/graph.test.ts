import { describe, expect, it } from "vitest";
import { CorpusSchema } from "@artsy/core";
import type { Claim, Corpus, Entity, TimeSpan } from "@artsy/core";
import {
  compareTime, createGraph, decodeWalk, encodeWalk, explain, findPath, neighbors, search,
} from "../src/index";
import type { WalkState } from "../src/contract";

// Deliberately synthetic records: these test graph semantics, not art-historical facts.
function fixture(): Corpus {
  return CorpusSchema.parse({
    schemaVersion: "0.1", datasetVersion: "test-fixture-v1",
    sources: [{ id: "museum", name: "Test museum", url: "https://museum.example",
      metadataLicense: "test", documentationUrl: "https://museum.example/docs" }],
    evidence: ["catalogue", "study-relation", "dispute", "old"].map((id) => ({
      id, sourceId: "museum", url: `https://museum.example/${id}`,
      retrievedAt: "2026-10-28T00:00:00Z", locator: `/claims/${id}`, note: `Synthetic evidence ${id}`,
    })),
    entities: [
      { id: "study", kind: "artwork", workLevel: "physical-object", labels: [{ language: "en", text: "Study" }], evidenceIds: ["catalogue"] },
      { id: "final", kind: "artwork", workLevel: "physical-object", labels: [{ language: "en", text: "Final painting" }], evidenceIds: ["catalogue"] },
      { id: "isolated", kind: "artwork", workLevel: "physical-object", labels: [{ language: "en", text: "Isolated object" }], evidenceIds: ["catalogue"] },
      { id: "maker", kind: "person", labels: [{ language: "en", text: "Émile Example" }, { language: "ja", text: "画家" }], aliases: [{ language: "en", text: "Artist alias" }], evidenceIds: ["catalogue"] },
      { id: "old-maker", kind: "person", labels: [{ language: "en", text: "Former maker" }], evidenceIds: ["old"] },
      { id: "oil", kind: "concept", labels: [{ language: "en", text: "Oil paint" }], evidenceIds: ["catalogue"] },
      { id: "motif", kind: "concept", labels: [{ language: "en", text: "Contested motif" }], evidenceIds: ["dispute"] },
      { id: "東京", kind: "place", labels: [{ language: "en", text: "Tokyo" }, { language: "ja", text: "東京" }], evidenceIds: ["catalogue"] },
    ],
    claims: [
      { id: "c01", subject: "study", predicate: "study_for", object: { type: "entity", id: "final" }, evidenceIds: ["study-relation"], basis: "catalogue", status: "asserted" },
      { id: "c02", subject: "study", predicate: "made_by", object: { type: "entity", id: "maker" }, evidenceIds: ["catalogue"], basis: "catalogue", status: "asserted" },
      { id: "c03", subject: "final", predicate: "made_by", object: { type: "entity", id: "maker" }, evidenceIds: ["catalogue"], basis: "catalogue", status: "asserted" },
      { id: "c04", subject: "study", predicate: "made_of", object: { type: "entity", id: "oil" }, evidenceIds: ["catalogue"], basis: "catalogue", status: "asserted" },
      { id: "c05", subject: "final", predicate: "depicts", object: { type: "entity", id: "motif" }, evidenceIds: ["dispute"], basis: "scholarship", status: "disputed" },
      { id: "c06", subject: "study", predicate: "made_by", object: { type: "entity", id: "old-maker" }, evidenceIds: ["old"], basis: "catalogue", status: "superseded" },
      { id: "c07", subject: "study", predicate: "dated", object: { type: "time", value: time(1884, 1884) }, evidenceIds: ["catalogue"], basis: "catalogue", status: "asserted" },
    ], images: [],
  });
}

function time(earliest: number | null, latest: number | null, overrides: Partial<TimeSpan> = {}): TimeSpan {
  return {
    display: earliest === latest ? String(earliest) : `${earliest}–${latest}`,
    earliest, latest, qualifier: "range", semantics: "occurrence-window",
    sourceCalendar: "Gregorian", precision: "year", ...overrides,
  };
}

function rawToken(value: unknown): string {
  return Buffer.from(JSON.stringify(value), "utf8").toString("base64url");
}

function basicWalk(dataset = "test-fixture-v1"): WalkState {
  return { v: 1, dataset, steps: [{ nodeId: "study" }, { nodeId: "final", viaClaimId: "c01", direction: "forward" }] };
}

describe("evidence-bearing directional graph", () => {
  it("reuses one historical assertion when following its inverse", () => {
    const graph = createGraph(fixture());
    const forward = neighbors(graph, "study", { predicates: ["study_for"] });
    const inverse = neighbors(graph, "final", { predicates: ["study_for"] });
    expect(forward).toHaveLength(1);
    expect(inverse).toHaveLength(1);
    expect(forward[0]?.claim).toBe(inverse[0]?.claim);
    expect(forward[0]).toMatchObject({ label: "study for", direction: "forward", entity: { id: "final" } });
    expect(inverse[0]).toMatchObject({ label: "has study", direction: "reverse", entity: { id: "study" } });
    expect(explain(graph, "c01")?.evidence.map((entry) => entry.id)).toEqual(["study-relation"]);
    expect(explain(graph, "c01")?.sources.map((entry) => entry.id)).toEqual(["museum"]);
  });

  it("keeps scalar claims for inspection, but never turns dates into phantom nodes", () => {
    const graph = createGraph(fixture());
    expect(graph.outgoing.get("study")?.some((claim) => claim.id === "c07")).toBe(true);
    expect(neighbors(graph, "study").some((neighbor) => neighbor.claim.id === "c07")).toBe(false);
    expect(explain(graph, "c07")?.claim.object.type).toBe("time");
    expect(explain(graph, "missing")).toBeUndefined();
    expect(neighbors(graph, "missing")).toEqual([]);
  });

  it("requires explicit disputed discovery and never discovers superseded assertions", () => {
    const graph = createGraph(fixture());
    expect(neighbors(graph, "final").some((neighbor) => neighbor.claim.id === "c05")).toBe(false);
    expect(neighbors(graph, "final", { includeDisputed: true }).some((neighbor) => neighbor.claim.id === "c05")).toBe(true);
    expect(neighbors(graph, "study", { includeDisputed: true }).some((neighbor) => neighbor.claim.id === "c06")).toBe(false);
    expect(explain(graph, "c06")?.claim.status).toBe("superseded");
  });

  it("rejects broken evidence and dangling nodes before building indexes", () => {
    const brokenEvidence = fixture();
    const first = brokenEvidence.claims[0];
    if (!first) throw new Error("Missing test fixture claim");
    first.evidenceIds = ["does-not-exist"];
    expect(() => createGraph(brokenEvidence)).toThrow(/Invalid graph corpus/);
    const brokenNode = fixture();
    const next = brokenNode.claims[0];
    if (!next) throw new Error("Missing test fixture claim");
    next.object = { type: "entity", id: "does-not-exist" };
    expect(() => createGraph(brokenNode)).toThrow(/Invalid graph corpus/);
  });

  it("produces stable bounded neighborhoods independent of source-array order", () => {
    const first = fixture();
    const second = fixture();
    second.claims.reverse();
    second.entities.reverse();
    expect(neighbors(createGraph(first), "study").map((neighbor) => neighbor.claim.id))
      .toEqual(neighbors(createGraph(second), "study").map((neighbor) => neighbor.claim.id));
    expect(neighbors(createGraph(first), "study", { limit: 1 })).toHaveLength(1);
    expect(neighbors(createGraph(first), "study", { limit: 0 })).toEqual([]);
    expect(neighbors(createGraph(first), "study", { predicates: [] })).toEqual([]);
  });
});

describe("bounded route discovery", () => {
  it("finds a shortest real route in both directions, then replays it", () => {
    const graph = createGraph(fixture());
    const result = findPath(graph, "final", "oil");
    expect(result.status).toBe("found");
    if (result.status !== "found") throw new Error("Expected route");
    expect(result.steps).toEqual([
      { nodeId: "final" },
      { nodeId: "study", viaClaimId: "c01", direction: "reverse" },
      { nodeId: "oil", viaClaimId: "c04", direction: "forward" },
    ]);
    expect(decodeWalk(encodeWalk({ v: 1, dataset: graph.corpus.datasetVersion, steps: result.steps }), graph).ok).toBe(true);
  });

  it("reports truncation instead of absence when depth or visit budgets stop search", () => {
    const graph = createGraph(fixture());
    expect(findPath(graph, "final", "oil", { maxDepth: 1 }).status).toBe("budget-exceeded");
    expect(findPath(graph, "study", "final", { maxVisited: 1 })).toEqual({ status: "budget-exceeded", visited: 1 });
    expect(findPath(graph, "study", "final", { maxVisited: 0 })).toEqual({ status: "budget-exceeded", visited: 0 });
    expect(findPath(graph, "study", "final", { maxDepth: 0 }).status).toBe("budget-exceeded");
    expect(findPath(graph, "isolated", "final")).toEqual({ status: "not-found", visited: 1 });
    expect(findPath(graph, "missing", "final")).toEqual({ status: "not-found", visited: 0 });
  });

  it("does not use disputes or superseded attributions to bridge disconnected entities", () => {
    const graph = createGraph(fixture());
    expect(findPath(graph, "study", "motif").status).toBe("not-found");
    expect(findPath(graph, "study", "old-maker").status).toBe("not-found");
    expect(findPath(graph, "study", "study")).toEqual({ status: "found", steps: [{ nodeId: "study" }] });
  });

  it("does not hide paths behind the public neighbor display limit", () => {
    const corpus = fixture();
    for (let index = 0; index < 240; index += 1) {
      const id = `many-${String(index).padStart(3, "0")}`;
      const entity: Entity = { id, kind: "concept", labels: [{ language: "en", text: id }], aliases: [], externalIds: [], evidenceIds: ["catalogue"] };
      const claim: Claim = { id: `claim-${id}`, subject: "study", predicate: "depicts", object: { type: "entity", id }, evidenceIds: ["catalogue"], basis: "catalogue", status: "asserted", qualifiers: {} };
      corpus.entities.push(entity);
      corpus.claims.push(claim);
    }
    const graph = createGraph(corpus);
    expect(neighbors(graph, "study", { limit: 1000 })).toHaveLength(200);
    expect(findPath(graph, "study", "many-239").status).toBe("found");
    expect(search(graph, "many-")).toHaveLength(100);
  });
});

describe("untrusted portable walk state", () => {
  it("round-trips Unicode and cycles without silently shortening the route", () => {
    const graph = createGraph(fixture());
    const unicode: WalkState = { v: 1, dataset: graph.corpus.datasetVersion, steps: [{ nodeId: "東京" }] };
    expect(decodeWalk(encodeWalk(unicode), graph)).toEqual({ ok: true, walk: unicode });
    const cycle: WalkState = { ...basicWalk(), steps: [...basicWalk().steps, { nodeId: "study", viaClaimId: "c01", direction: "reverse" }] };
    expect(decodeWalk(encodeWalk(cycle), graph)).toEqual({ ok: true, walk: cycle });
  });

  it("checks dataset identity, every node, adjacent claim and direction", () => {
    const graph = createGraph(fixture());
    expect(decodeWalk(encodeWalk(basicWalk("another-dataset")), graph)).toMatchObject({ ok: false, reason: expect.stringContaining("dataset") });
    const unknownNode: WalkState = { ...basicWalk(), steps: [{ nodeId: "unknown" }] };
    expect(decodeWalk(encodeWalk(unknownNode), graph).ok).toBe(false);
    const wrongDirection: WalkState = { ...basicWalk(), steps: [{ nodeId: "study" }, { nodeId: "final", viaClaimId: "c01", direction: "reverse" }] };
    expect(decodeWalk(encodeWalk(wrongDirection), graph).ok).toBe(false);
    const teleport: WalkState = { ...basicWalk(), steps: [{ nodeId: "study" }, { nodeId: "oil", viaClaimId: "c01", direction: "forward" }] };
    expect(decodeWalk(encodeWalk(teleport), graph).ok).toBe(false);
    const scalar: WalkState = { ...basicWalk(), steps: [{ nodeId: "study" }, { nodeId: "final", viaClaimId: "c07", direction: "forward" }] };
    expect(decodeWalk(encodeWalk(scalar), graph).ok).toBe(false);
  });

  it("allows an explicitly chosen disputed edge but rejects superseded replay", () => {
    const graph = createGraph(fixture());
    const disputed: WalkState = { ...basicWalk(), steps: [{ nodeId: "final" }, { nodeId: "motif", viaClaimId: "c05", direction: "forward" }] };
    expect(decodeWalk(encodeWalk(disputed), graph).ok).toBe(true);
    const superseded: WalkState = { ...basicWalk(), steps: [{ nodeId: "study" }, { nodeId: "old-maker", viaClaimId: "c06", direction: "forward" }] };
    expect(decodeWalk(encodeWalk(superseded), graph)).toMatchObject({ ok: false, reason: expect.stringContaining("superseded") });
  });

  it("returns failures for malformed payloads without throwing", () => {
    const graph = createGraph(fixture());
    for (const token of ["", "%%%", "a", "a".repeat(8193), "_w", rawToken(null), rawToken([]), rawToken({ v: 2 }), rawToken({ ...basicWalk(), extra: "ignored?" })]) {
      expect(() => decodeWalk(token, graph)).not.toThrow();
      expect(decodeWalk(token, graph).ok).toBe(false);
    }
    expect(decodeWalk(rawToken({ ...basicWalk(), steps: [{ nodeId: "study" }, { nodeId: "final" }] }), graph).ok).toBe(false);
    expect(decodeWalk(rawToken({ ...basicWalk(), steps: [{ nodeId: "study", viaClaimId: "c01", direction: "forward" }] }), graph).ok).toBe(false);
  });

  it("enforces both structural and character limits on encode and decode", () => {
    const graph = createGraph(fixture());
    const tooMany: WalkState = { ...basicWalk(), steps: Array.from({ length: 65 }, (_, index) => index === 0
      ? { nodeId: "study" }
      : { nodeId: index % 2 ? "final" : "study", viaClaimId: "c01", direction: index % 2 ? "forward" : "reverse" }) };
    expect(() => encodeWalk(tooMany)).toThrow(/64/);
    expect(decodeWalk(rawToken(tooMany), graph).ok).toBe(false);
    const tooLong: WalkState = { ...basicWalk(), steps: Array.from({ length: 64 }, (_, index) => index === 0
      ? { nodeId: "x".repeat(200) }
      : { nodeId: "x".repeat(200), viaClaimId: "c".repeat(200), direction: "forward" }) };
    expect(() => encodeWalk(tooLong)).toThrow(/8192/);
  });
});

describe("honest temporal comparisons and search", () => {
  it("uses possible overlap for occurrence windows and treats BCE year zero as valid", () => {
    expect(compareTime(time(-1, 0), time(0, 1))).toBe("possible-overlap");
    expect(compareTime(time(0, 0), time(1, 1))).toBe("disjoint");
    expect(compareTime(time(1830, 1832), time(1831, 1831))).toBe("possible-overlap");
    expect(compareTime(time(100, 150, { semantics: "duration" }), time(140, 160))).toBe("possible-overlap");
  });

  it("does not invent missing bounds or circa tolerances", () => {
    expect(compareTime(time(null, 100, { qualifier: "before" }), time(200, 200))).toBe("unknown");
    expect(compareTime(time(1830, 1830, { qualifier: "circa" }), time(1831, 1831))).toBe("unknown");
    expect(compareTime(time(1830, 1830, { qualifier: "circa" }), time(1830, 1830))).toBe("possible-overlap");
    expect(compareTime(time(10, 20, { semantics: "unknown" }), time(10, 20))).toBe("unknown");
    expect(compareTime(time(30, 10), time(20, 40))).toBe("unknown");
  });

  it("does not treat a provider's broad search window as evidence of contemporaneity", () => {
    const providerWindow = time(1820, 1842, {
      display: "ca. 1830–32", qualifier: "circa", semantics: "index-window",
    });
    // Search indexing includes 1825, but the displayed dating does not establish creation then.
    // Even overlap with the displayed years requires historical bounds, not an indexing range.
    for (const year of [1825, 1831, 1850]) {
      expect(compareTime(providerWindow, time(year, year))).toBe("unknown");
      expect(compareTime(time(year, year), providerWindow)).toBe("unknown");
    }
    expect(compareTime({ ...providerWindow, qualifier: "range" }, time(1850, 1850))).toBe("unknown");
    expect(compareTime(time(1830, 1832), time(1831, 1831))).toBe("possible-overlap");
  });

  it("searches labels, aliases and Unicode deterministically without suggesting invented matches", () => {
    const graph = createGraph(fixture());
    expect(search(graph, "emile").map((entity) => entity.id)).toEqual(["maker"]);
    expect(search(graph, "artist alias").map((entity) => entity.id)).toEqual(["maker"]);
    expect(search(graph, "画家").map((entity) => entity.id)).toEqual(["maker"]);
    expect(search(graph, "東京").map((entity) => entity.id)).toEqual(["東京"]);
    expect(search(graph, " ")).toEqual([]);
    expect(search(graph, "invented connection")).toEqual([]);
    expect(search(graph, "x".repeat(201))).toEqual([]);
  });
});
