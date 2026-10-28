import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { CorpusSchema } from "@artsy/core";
import { createGraph, decodeWalk, neighbors } from "@artsy/graph";
import type { WalkState } from "@artsy/graph";
import { Explorer } from "../src/index";
import { branchWalk, extendWalk, walkHref } from "../src/walk";

// Deliberately fictional records. These test UI behavior without making new
// historical assertions or relying on live museum responses.
const corpus = CorpusSchema.parse({
  schemaVersion: "0.1",
  datasetVersion: "ui-specimen-1",
  sources: [{ id: "fixture", name: "Fixture Museum", url: "https://example.org/", metadataLicense: "CC0", documentationUrl: "https://example.org/docs" }],
  evidence: [{ id: "record", sourceId: "fixture", url: "https://example.org/collection/study", retrievedAt: "2026-10-28T00:00:00Z", locator: "catalogue study relationship", note: "A fictional fixture for UI verification." }],
  entities: [
    { id: "study", kind: "artwork", labels: [{ language: "en", text: "A preparatory study" }], workLevel: "physical-object", evidenceIds: ["record"] },
    { id: "final", kind: "artwork", labels: [{ language: "en", text: "The finished work" }], workLevel: "physical-object", evidenceIds: ["record"] },
    { id: "maker", kind: "person", labels: [{ language: "en", text: "A fixture maker" }], evidenceIds: ["record"] },
  ],
  claims: [
    { id: "study-final", subject: "study", predicate: "study_for", object: { type: "entity", id: "final" }, evidenceIds: ["record"], status: "asserted", basis: "catalogue" },
    { id: "study-maker", subject: "study", predicate: "made_by", object: { type: "entity", id: "maker" }, evidenceIds: ["record"], status: "asserted", basis: "catalogue" },
    { id: "final-maker", subject: "final", predicate: "made_by", object: { type: "entity", id: "maker" }, evidenceIds: ["record"], status: "asserted", basis: "catalogue" },
    { id: "final-date", subject: "final", predicate: "dated", object: { type: "time", value: { display: "1884–86, border added 1888–89", earliest: 1884, latest: 1889, qualifier: "range", semantics: "occurrence-window", sourceCalendar: "Gregorian", precision: "year" } }, evidenceIds: ["record"], status: "asserted", basis: "catalogue" },
  ],
  images: [{
    id: "restricted-image", artworkId: "final", url: "https://example.org/restricted-art.jpg", alt: "A fictional restricted image",
    rights: { status: "restricted", license: null, rightsUrl: "https://example.org/rights", credit: "Fixture Museum", verifiedAt: "2026-10-28T00:00:00Z", evidenceIds: ["record"], display: false, cache: false, derivatives: false },
  }],
});

describe("Explorer server-rendered visitor surface", () => {
  it("renders a single named focus with the source's complete date text", () => {
    const html = renderToStaticMarkup(createElement(Explorer, { corpus, initialEntityId: "final" }));
    expect(html.match(/<h1\b/g)).toHaveLength(1);
    expect(html).toContain("The finished work");
    expect(html).toContain("1884–86, border added 1888–89");
    expect(html).toContain("see date evidence");
  });

  it("keeps a restricted artwork navigable without emitting its image URL", () => {
    const html = renderToStaticMarkup(createElement(Explorer, { corpus, initialEntityId: "final" }));
    expect(html).not.toContain("https://example.org/restricted-art.jpg");
    expect(html).toContain("No image is available for display in this collection.");
    expect(html).toContain("has study");
    expect(html).toContain("https://example.org/collection/study");
  });

  it("provides explicit relation labels and evidence controls in each direction", () => {
    const studyHtml = renderToStaticMarkup(createElement(Explorer, { corpus, initialEntityId: "study" }));
    const finalHtml = renderToStaticMarkup(createElement(Explorer, { corpus, initialEntityId: "final" }));
    expect(studyHtml).toContain("Why study for The finished work?");
    expect(finalHtml).toContain("Why has study A preparatory study?");
    expect(studyHtml).toContain("Sources &amp; evidence");
    expect(studyHtml).toContain("A small, sourced collection to explore");
  });

  it("treats a person as a useful focus rather than a broken artwork card", () => {
    const html = renderToStaticMarkup(createElement(Explorer, { corpus, initialEntityId: "maker" }));
    expect(html).toContain("A connection worth following");
    expect(html).toContain("Artist / person");
    expect(html).toContain("Why made A preparatory study?");
    expect(html).not.toContain("No image is available for display in this collection.");
  });

  it("offers a shared concept as the second thread even when a shared place comes first", () => {
    const specimen = CorpusSchema.parse({
      ...corpus,
      entities: [
        ...corpus.entities,
        { id: "riverbank", kind: "place", labels: [{ language: "en", text: "A fixture riverbank" }], evidenceIds: ["record"] },
        { id: "gesture", kind: "concept", labels: [{ language: "en", text: "A fixture gesture" }], evidenceIds: ["record"] },
        { id: "first-sculpture", kind: "artwork", labels: [{ language: "en", text: "First fixture sculpture" }], workLevel: "physical-object", evidenceIds: ["record"] },
        { id: "second-sculpture", kind: "artwork", labels: [{ language: "en", text: "Second fixture sculpture" }], workLevel: "physical-object", evidenceIds: ["record"] },
      ],
      claims: [
        ...corpus.claims,
        { id: "study-place", subject: "study", predicate: "depicts", object: { type: "entity", id: "riverbank" }, evidenceIds: ["record"], status: "asserted", basis: "catalogue" },
        { id: "final-place", subject: "final", predicate: "depicts", object: { type: "entity", id: "riverbank" }, evidenceIds: ["record"], status: "asserted", basis: "catalogue" },
        { id: "first-gesture", subject: "first-sculpture", predicate: "depicts", object: { type: "entity", id: "gesture" }, evidenceIds: ["record"], status: "asserted", basis: "catalogue" },
        { id: "second-gesture", subject: "second-sculpture", predicate: "depicts", object: { type: "entity", id: "gesture" }, evidenceIds: ["record"], status: "asserted", basis: "catalogue" },
      ],
    });
    const html = renderToStaticMarkup(createElement(Explorer, { corpus: specimen, initialEntityId: "study" }));
    expect(html).toContain("Find works depicting A fixture gesture");
    expect(html).not.toContain("Find works depicting A fixture riverbank");
    const thread: WalkState = { v: 1, dataset: specimen.datasetVersion, steps: [{ nodeId: "first-sculpture" }] };
    expect(html).toContain(walkHref(thread));
  });
});

describe("Explorer trail state", () => {
  const graph = createGraph(corpus);
  const start: WalkState = { v: 1, dataset: corpus.datasetVersion, steps: [{ nodeId: "study" }] };

  it("shares every stop and its exact directional claim through the graph codec", () => {
    const next = neighbors(graph, "study").find((neighbor) => neighbor.entity.id === "final");
    if (!next) throw new Error("Missing specimen relationship");
    const extended = extendWalk(start, next);
    const href = walkHref(extended);
    const token = new URL(href, "https://example.org").searchParams.get("walk");
    expect(token).not.toBeNull();
    const restored = decodeWalk(token ?? "", graph);
    expect(restored).toEqual({ ok: true, walk: extended });
    expect(extended.steps[1]).toEqual({ nodeId: "final", viaClaimId: "study-final", direction: "forward" });
  });

  it("branches at an earlier stop without mutating the original trail", () => {
    const next = neighbors(graph, "study").find((neighbor) => neighbor.entity.id === "final");
    if (!next) throw new Error("Missing specimen relationship");
    const original = extendWalk(start, next);
    const branched = branchWalk(original, 0);
    expect(branched).toEqual(start);
    expect(original.steps).toHaveLength(2);
    expect(() => branchWalk(original, -1)).toThrow("existing stop");
    expect(() => branchWalk(original, 2)).toThrow("existing stop");
  });
});
