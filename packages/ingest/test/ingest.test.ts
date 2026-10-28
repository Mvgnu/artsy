import { readFile, writeFile, cp, mkdtemp, rm } from "node:fs/promises";
import { createHash } from "node:crypto";
import { tmpdir } from "node:os";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { afterEach, describe, expect, it, vi } from "vitest";
import { validateCorpus } from "@artsy/core";
import { z } from "zod";
import { buildSeed, metYearToAstronomical, parseArticRecord, parseMetRecord, serializeCorpus } from "../src/index";

const root = fileURLToPath(new URL("../../../", import.meta.url));
const temporary: string[] = [];
async function json(path: string): Promise<unknown> { const value: unknown = JSON.parse(await readFile(path, "utf8")); return value; }
async function fixtureCopy(): Promise<string> {
  const directory = await mkdtemp(resolve(tmpdir(), "artsy-ingest-")); temporary.push(directory);
  await cp(resolve(root, "data/raw"), resolve(directory, "data/raw"), {recursive: true});
  return directory;
}
afterEach(async () => { vi.unstubAllGlobals(); await Promise.all(temporary.splice(0).map((path) => rm(path, {recursive: true, force: true}))); });

describe("bounded source replay", () => {
  it("replays byte-for-byte without any network call and passes the canonical validator", async () => {
    const fetch = vi.fn(() => { throw new Error("Replay attempted a network request"); }); vi.stubGlobal("fetch", fetch);
    const result = await buildSeed(root);
    expect(validateCorpus(result.corpus).ok).toBe(true);
    expect(serializeCorpus(result.corpus)).toBe(await readFile(resolve(root, "data/seed/atlas.json"), "utf8"));
    expect(serializeCorpus((await buildSeed(root)).corpus)).toBe(serializeCorpus(result.corpus));
    expect(fetch).not.toHaveBeenCalled();
  });
  it("rejects corrupted snapshots instead of quietly rebuilding different history", async () => {
    const directory = await fixtureCopy();
    await writeFile(resolve(directory, "data/raw/met/437658.json"), "{}");
    await expect(buildSeed(directory)).rejects.toThrow("Snapshot hash mismatch");
  });
  it("rejects malformed provider values at the boundary", async () => {
    const met = parseMetRecord(await json(resolve(root, "data/raw/met/437658.json")));
    expect(() => parseMetRecord({...met, isPublicDomain: "true"})).toThrow();
    expect(() => parseMetRecord({...met, objectBeginDate: 1900, objectEndDate: 1800})).toThrow();
    const aic = parseArticRecord(await json(resolve(root, "data/raw/artic/27992.json")));
    expect(() => parseArticRecord({...aic, config: {...aic.config, iiif_url: "javascript:alert(1)"}})).toThrow();
    expect(() => parseArticRecord({...aic, data: {...aic.data, is_public_domain: null}})).toThrow();
  });
  it("keeps interpretation, material, findspot and anonymous maker semantics", async () => {
    const {corpus} = await buildSeed(root);
    expect(corpus.claims.find((claim) => claim.id === "met:437658:study-for")?.object).toEqual({type: "entity", id: "artic:27992"});
    const gesture = corpus.claims.filter((claim) => claim.predicate === "depicts" && claim.object.type === "entity" && claim.object.id === "concept:abhaya-mudra");
    expect(gesture.map((claim) => claim.subject).sort()).toEqual(["met:38198", "met:72381"]);
    expect(gesture.find((claim) => claim.subject === "met:38198")?.qualifiers.explanation).toContain("missing");
    expect(corpus.claims.some((claim) => claim.subject === "met:544227" && claim.predicate === "found_at")).toBe(true);
    expect(corpus.claims.some((claim) => claim.subject === "met:544227" && claim.predicate === "produced_at")).toBe(false);
    expect(corpus.claims.filter((claim) => claim.predicate === "made_by").map((claim) => claim.subject).sort()).toEqual(["artic:27992", "met:437658", "met:56353"]);
    expect(corpus.entities.filter((entity) => entity.kind === "person")).toHaveLength(2);
    expect(corpus.claims.some((claim) => claim.predicate === "influenced_by")).toBe(false);
  });
  it("preserves BCE conversion, museum indexing uncertainty and a separate border event", async () => {
    expect(metYearToAstronomical(-1)).toBe(0);
    expect(metYearToAstronomical(-1961)).toBe(-1960);
    expect(() => metYearToAstronomical(0)).toThrow("ambiguous");
    const {corpus} = await buildSeed(root);
    const hippo = corpus.claims.find((claim) => claim.id === "met:544227:dated");
    expect(hippo?.object).toMatchObject({type: "time", value: {display: "ca. 1961–1878 B.C.", earliest: -1960, latest: -1877}});
    expect(corpus.claims.find((claim) => claim.id === "met:56353:dated")?.object).toMatchObject({type: "time", value: {display: "ca. 1830–32", earliest: 1820, latest: 1842, semantics: "index-window"}});
    const border = corpus.claims.find((claim) => claim.id === "artic:27992:border-dated");
    expect(border?.qualifiers.role).toBe("border addition");
    expect(border?.object).toMatchObject({type: "time", value: {earliest: 1888, latest: 1889}});
  });
  it("separates provider search indexes from explicit historical date bounds in the schema", async () => {
    const {corpus} = await buildSeed(root);
    expect(corpus.datasetVersion).toBe("m0-2026-10-28.2");
    for (const id of ["met:56353:dated", "met:72381:dated", "met:38198:dated"]) {
      expect(corpus.claims.find((claim) => claim.id === id)?.object).toMatchObject({type: "time", value: {semantics: "index-window"}});
    }
    for (const id of ["met:437658:dated", "met:544227:dated", "artic:27992:dated", "artic:27992:border-dated"]) {
      expect(corpus.claims.find((claim) => claim.id === id)?.object).toMatchObject({type: "time", value: {semantics: "occurrence-window"}});
    }
  });
  it("does not publish an image when the refreshed rights flag becomes false", async () => {
    const directory = await fixtureCopy();
    const path = "data/raw/met/437658.json";
    const record = parseMetRecord(await json(resolve(directory, path)));
    const bytes = `${JSON.stringify({...record, isPublicDomain: false})}\n`;
    await writeFile(resolve(directory, path), bytes);
    const manifestPath = resolve(directory, "data/raw/manifest.json");
    const manifest = z.object({requests: z.array(z.object({path: z.string(), sha256: z.string()}).passthrough())}).passthrough().parse(await json(manifestPath));
    const receipt = manifest.requests.find((item) => item.path === path);
    if (!receipt) throw new Error("Missing test receipt");
    receipt.sha256 = createHash("sha256").update(bytes).digest("hex");
    await writeFile(manifestPath, JSON.stringify(manifest));
    const {corpus} = await buildSeed(directory);
    expect(corpus.entities.some((entity) => entity.id === "met:437658")).toBe(true);
    expect(corpus.images.some((image) => image.artworkId === "met:437658")).toBe(false);
  });
});
