import { describe, expect, it } from "vitest";
import { CorpusSchema, TimeSpanSchema, validateCorpus } from "../src/index";
const makeCorpus = () => CorpusSchema.parse({
  schemaVersion: "0.1", datasetVersion: "test-1",
  sources: [{ id: "source", name: "Test authority", url: "https://example.org", documentationUrl: "https://example.org/docs", metadataLicense: "CC0" }],
  evidence: [{ id: "e", sourceId: "source", url: "https://example.org/object", retrievedAt: "2026-10-28T00:00:00Z", locator: "artist", note: "Synthetic test fixture, not published historical evidence." }],
  entities: [
    { id: "work", kind: "artwork", workLevel: "physical-object", labels: [{ language: "en", text: "Test work" }], evidenceIds: ["e"] },
    { id: "maker", kind: "person", labels: [{ language: "en", text: "Test maker" }], evidenceIds: ["e"] },
  ],
  claims: [{ id: "maker-claim", subject: "work", predicate: "made_by", object: { type: "entity", id: "maker" }, evidenceIds: ["e"], basis: "catalogue", status: "asserted" }], images: [],
});
describe("publication validation", () => {
  it("accepts a complete evidence-bearing claim", () => expect(validateCorpus(makeCorpus()).ok).toBe(true));
  it("returns a failure instead of throwing for malformed external URLs", () => {
    const corpus = makeCorpus(); corpus.sources[0]!.url = "";
    expect(() => validateCorpus(corpus)).not.toThrow();
    expect(validateCorpus(corpus).ok).toBe(false);
  });
  it("rejects dangling evidence even when object shape is valid", () => {
    const corpus = makeCorpus(); corpus.claims[0]!.evidenceIds = ["absent"];
    expect(validateCorpus(corpus).ok).toBe(false);
  });
  it("rejects a place or artwork masquerading as a maker", () => {
    const corpus = makeCorpus(); corpus.claims[0]!.object = { type: "entity", id: "work" };
    expect(validateCorpus(corpus).ok).toBe(false);
  });
  it("rejects computed influence instead of laundering similarity into history", () => {
    const corpus = makeCorpus(); const claim = corpus.claims[0]!;
    claim.predicate = "influenced_by"; claim.basis = "computed";
    claim.qualifiers.derivation = { algorithm: "similarity", version: "1", inputClaimIds: [claim.id] };
    expect(validateCorpus(corpus).ok).toBe(false);
  });
  it("requires a period scheme and geography", () => {
    const corpus = makeCorpus(); corpus.entities[1]!.kind = "period";
    expect(validateCorpus(corpus).ok).toBe(false);
  });
  it("keeps BCE, zero and unknown distinct and rejects reversed ranges", () => {
    const time = { display: "2–1 BCE", earliest: -1, latest: 0, qualifier: "range", semantics: "occurrence-window", sourceCalendar: "Gregorian", precision: "year" };
    expect(TimeSpanSchema.parse(time).latest).toBe(0);
    expect(TimeSpanSchema.parse({ ...time, earliest: null, latest: null }).earliest).toBeNull();
    expect(TimeSpanSchema.safeParse({ ...time, earliest: 1, latest: -1 }).success).toBe(false);
  });
  it("rejects duplicate IDs and derivation cycles", () => {
    const corpus = makeCorpus(); corpus.entities.push(corpus.entities[0]!);
    expect(validateCorpus(corpus).ok).toBe(false);
  });
});
