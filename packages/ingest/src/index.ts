import { createHash } from "node:crypto";
import { readFile, stat } from "node:fs/promises";
import { resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { z } from "zod";
import { ClaimSchema, EntitySchema, EvidenceSchema, SourceSchema, validateCorpus } from "@artsy/core";
import type { Claim, Corpus, Entity, Evidence, ImageAsset, TimeSpan } from "@artsy/core";
import type { ImportResult } from "./contract";
import { ArticArtistSchema, SeuratIdentitySchema, metYearToAstronomical, parseArticRecord, parseMetRecord } from "./providers";
export type { ImportResult, ImportReport } from "./contract";
export { parseArticRecord, parseMetRecord, metYearToAstronomical } from "./providers";

const ReceiptSchema = z.object({
  sourceId: z.string().min(1), recordId: z.string().min(1), url: z.url(),
  path: z.string().startsWith("data/raw/"), retrievedAt: z.iso.datetime(),
  httpStatus: z.literal(200), sha256: z.string().regex(/^[a-f0-9]{64}$/),
}).strict();
const ManifestSchema = z.object({
  schemaVersion: z.literal(1), adapterVersion: z.literal("m0-pinned-replay-1"),
  requests: z.array(ReceiptSchema).min(1),
}).strict();
type Receipt = z.infer<typeof ReceiptSchema>;
const ContextSchema = z.object({
  schemaVersion: z.literal(1), description: z.string(),
  sources: z.array(SourceSchema), evidence: z.array(EvidenceSchema),
  entities: z.array(EntitySchema), claims: z.array(ClaimSchema),
}).strict();
const defaultRoot = fileURLToPath(new URL("../../../", import.meta.url));

async function readJson(path: string): Promise<unknown> {
  const value: unknown = JSON.parse(await readFile(path, "utf8"));
  return value;
}
async function readVerified(root: string, receipt: Receipt): Promise<unknown> {
  const path = resolve(root, receipt.path);
  if (!path.startsWith(resolve(root, "data/raw") + sep)) throw new Error("Raw input path escapes its owned directory");
  if ((await stat(path)).size > 1_000_000) throw new Error(`Fixture exceeds bounded replay budget: ${receipt.path}`);
  const bytes = await readFile(path);
  if (createHash("sha256").update(bytes).digest("hex") !== receipt.sha256) throw new Error(`Snapshot hash mismatch: ${receipt.path}`);
  const value: unknown = JSON.parse(bytes.toString("utf8"));
  return value;
}
function requiredReceipt(receipts: readonly Receipt[], sourceId: string, recordId: string): Receipt {
  const matches = receipts.filter((receipt) => receipt.sourceId === sourceId && receipt.recordId === recordId);
  if (matches.length !== 1 || !matches[0]) throw new Error(`Expected one pinned ${sourceId}:${recordId} receipt`);
  return matches[0];
}
function canonical<T extends { id: string }>(rows: T[]): T[] {
  return rows.sort((left, right) => left.id < right.id ? -1 : left.id > right.id ? 1 : 0);
}
export function serializeCorpus(corpus: Corpus): string { return `${JSON.stringify(corpus, null, 2)}\n`; }

/** M0: a bounded, offline replay. This is deliberately not a museum-wide adapter. */
export async function buildSeed(root = defaultRoot): Promise<ImportResult> {
  const manifest = ManifestSchema.parse(await readJson(resolve(root, "data/raw/manifest.json")));
  const context = ContextSchema.parse(await readJson(resolve(root, "data/raw/context.json")));
  const corpus: Corpus = { schemaVersion: "0.1", datasetVersion: "m0-2026-10-28.2", sources: context.sources,
    evidence: [...context.evidence], entities: [...context.entities], claims: [...context.claims], images: [] };
  const addEvidence = (receipt: Receipt, key: string, locator: string, note: string): string => {
    const id = `${receipt.sourceId}:${receipt.recordId}:${key}`;
    const evidence: Evidence = { id, sourceId: receipt.sourceId, url: receipt.url, retrievedAt: receipt.retrievedAt,
      recordId: receipt.recordId, locator, note, snapshotSha256: receipt.sha256 };
    corpus.evidence.push(evidence); return id;
  };
  const addClaim = (claim: Claim) => { corpus.claims.push(claim); };
  const relation = (id: string, subject: string, predicate: Claim["predicate"], target: string, evidenceIds: string[], qualifiers: Claim["qualifiers"] = {}) =>
    addClaim({ id, subject, predicate, object: {type: "entity", id: target}, evidenceIds, basis: "catalogue", status: "asserted", qualifiers });
  const date = (id: string, subject: string, value: TimeSpan, evidenceIds: string[], qualifiers: Claim["qualifiers"] = {}) =>
    addClaim({ id, subject, predicate: "dated", object: {type: "time", value}, evidenceIds, basis: "catalogue", status: "asserted", qualifiers });

  for (const recordId of [437658, 72381, 38198, 56353, 544227]) {
    const receipt = requiredReceipt(manifest.requests, "met", String(recordId));
    const record = parseMetRecord(await readVerified(root, receipt));
    if (record.objectID !== recordId) throw new Error(`Met record identity mismatch: ${recordId}`);
    const id = `met:${recordId}`;
    const title = addEvidence(receipt, "title", "/title; /objectID; /accessionNumber", "The museum identifies this physical collection object by its own ID and accession number.");
    const identities: Entity["externalIds"] = [{scheme: "met-object", value: String(recordId), evidenceIds: [title]}, {scheme: "met-accession", value: record.accessionNumber, evidenceIds: [title]}];
    if (record.objectWikidata_URL) {
      const evidence = addEvidence(receipt, "identity", "/objectWikidata_URL", "The Met record supplies this external object identifier; it is not a title-based merge.");
      identities.push({scheme: "wikidata-url", value: record.objectWikidata_URL, evidenceIds: [evidence]});
    }
    corpus.entities.push({id, kind: "artwork", labels: [{language: "en", text: record.title}], aliases: [], workLevel: "physical-object", evidenceIds: [title], externalIds: identities});
    // Reviewed M0 mapping: broad century prose does not warrant the API's exact
    // numeric endpoints as occurrence bounds. Neither does a range that differs
    // from the display. The two other pinned records have explicit matching years.
    const isIndexWindow = recordId === 56353 || record.objectDate.includes("century");
    const dates = addEvidence(receipt, "date", "/objectDate; /objectBeginDate; /objectEndDate", recordId === 56353
      ? "The display date is ca. 1830–32; the museum's search bounds are 1820–1842. Both are preserved. The wider interval is not a new dating claim."
      : recordId === 544227 ? "The provider's signed historical BCE years are converted to astronomical years by adding one to negative values; the original display survives."
      : isIndexWindow ? "The museum supplies numeric indexing endpoints for a century-worded date. The source's prose date is retained; these precise endpoints are not promoted to historical occurrence bounds."
      : "The display date and the museum's numeric indexing bounds are retained independently.");
    date(`${id}:dated`, id, {display: record.objectDate, earliest: metYearToAstronomical(record.objectBeginDate), latest: metYearToAstronomical(record.objectEndDate),
      qualifier: record.objectDate.startsWith("ca.") ? "circa" : record.objectBeginDate === record.objectEndDate ? "exact" : "range",
      semantics: isIndexWindow ? "index-window" : "occurrence-window", sourceCalendar: "Met catalogue CE/BCE; calendar unspecified", precision: record.objectDate.includes("century") ? "century" : "year"}, [dates],
      {role: isIndexWindow ? "creation-date indexing" : "creation", explanation: isIndexWindow ? "Search bounds supplied by the museum; read the display date for its dating statement. These bounds cannot establish temporal overlap." : "Museum occurrence window; not a continuous duration."});
    const medium = addEvidence(receipt, "medium", "/medium", `The catalogue medium is ${record.medium}.`);
    const mediumConcepts = recordId === 437658 ? ["concept:oil-paint", "concept:canvas"] : recordId === 72381 ? ["concept:bronze", "concept:gold-leaf"] : recordId === 38198 ? ["concept:red-sandstone"] : recordId === 544227 ? ["concept:faience"] : [];
    for (const material of mediumConcepts) relation(`${id}:made-of:${material}`, id, "made_of", material, [medium]);
    if (recordId === 56353) relation(`${id}:woodblock`, id, "uses_technique", "concept:woodblock-printing", [medium]);
    const custody = addEvidence(receipt, "custody", "/repository; /objectURL", "This record belongs to The Met collection. Custody is not a claim about historical ownership or production location.");
    relation(`${id}:held-by`, id, "held_by", "institution:met", [custody]);
    if (record.artistDisplayName) {
      // Explicit bounded mappings: no generic join on the display name.
      const personId = recordId === 437658 ? "person:seurat" : recordId === 56353 ? "person:hokusai" : null;
      if (!personId || record.artistPrefix || record.artistSuffix) throw new Error("Unreviewed artist attribution requires reconciliation");
      const maker = addEvidence(receipt, "maker", "/artistDisplayName; /artistWikidata_URL; /artistULAN_URL; /artistRole", "The museum supplies the named artist and external identifiers; absence of an artist on other objects does not create a shared anonymous person.");
      corpus.entities.push({id: personId, kind: "person", labels: [{language: "en", text: record.artistDisplayName}], aliases: [], evidenceIds: [maker], externalIds: [
        {scheme: "wikidata-url", value: record.artistWikidata_URL, evidenceIds: [maker]}, {scheme: "ulan-url", value: record.artistULAN_URL, evidenceIds: [maker]},
      ]});
      relation(`${id}:maker`, id, "made_by", personId, [maker], {attribution: "accepted", role: "artist"});
      const lifeEvidence = addEvidence(receipt, "artist-dates", "/artistBeginDate; /artistEndDate; /artistDisplayBio", "The museum's biographical display supplies the artist's lifespan.");
      const start = z.coerce.number().int().positive().parse(record.artistBeginDate); const end = z.coerce.number().int().positive().parse(record.artistEndDate);
      date(`${personId}:lifespan`, personId, {display: `${record.artistBeginDate}–${record.artistEndDate}`, earliest: start, latest: end, qualifier: "range", semantics: "lifespan", sourceCalendar: "CE; calendar unspecified", precision: "year"}, [lifeEvidence], {role: "lifespan"});
    }
    if (record.period) {
      const periodId = recordId === 38198 ? "period:gupta-met" : recordId === 56353 ? "period:edo-met" : recordId === 544227 ? "period:middle-kingdom-met" : null;
      if (!periodId) throw new Error("Unreviewed period needs a source-scoped definition");
      const period = addEvidence(receipt, "period", "/period", "The museum explicitly classifies this object within the named period; this was not inferred from the object's date.");
      relation(`${id}:period`, id, "classified_as", periodId, [period], {scheme: "The Met collection catalogue"});
    }
    if (recordId === 544227) {
      if (record.geographyType !== "From" || record.subregion !== "Meir" || !record.excavation) throw new Error("Findspot interpretation needs renewed review");
      const place = addEvidence(receipt, "findspot", "/geographyType; /country; /subregion; /locale; /locus; /excavation", "The recorded excavation/tomb context is at Meir in Egypt. This is a findspot, not a demonstrated place of manufacture.");
      relation(`${id}:findspot`, id, "found_at", "place:meir", [place], {role: "archaeological findspot"});
    }
    if (record.isPublicDomain && record.primaryImage && !record.rightsAndReproduction) {
      const rightsEvidence = addEvidence(receipt, "image-rights", "/isPublicDomain; /primaryImage; /primaryImageSmall; /rightsAndReproduction; /creditLine", "The museum marks this work public domain and supplies its Open Access image URL. This decision is independent of metadata licensing.");
      const image: ImageAsset = {id: `${id}:image`, artworkId: id, url: record.primaryImage, alt: record.title,
        rights: {status: "open", license: "Public Domain", rightsUrl: record.objectURL, credit: `The Metropolitan Museum of Art. ${record.creditLine}`, verifiedAt: receipt.retrievedAt, evidenceIds: [rightsEvidence], display: true, cache: true, derivatives: true}};
      if (record.primaryImageSmall) image.thumbnailUrl = record.primaryImageSmall;
      corpus.images.push(image);
    }
  }

  const receipt = requiredReceipt(manifest.requests, "artic", "27992");
  const record = parseArticRecord(await readVerified(root, receipt));
  if (record.data.id !== 27992 || record.data.artist_id !== 40810) throw new Error("AIC fixture identity changed; review reconciliation");
  const artistReceipt = requiredReceipt(manifest.requests, "artic", "artist/40810");
  const artist = ArticArtistSchema.parse(await readVerified(root, artistReceipt)).data;
  const identityReceipt = requiredReceipt(manifest.requests, "wikidata", "Q34013");
  const identity = SeuratIdentitySchema.parse(await readVerified(root, identityReceipt)).entities.Q34013;
  const identityClaim = identity.claims.P6295.find((claim) => claim.mainsnak.datavalue.value === String(artist.id) && claim.rank !== "deprecated");
  if (!identityClaim) throw new Error("No current Wikidata cross-reference establishes the AIC artist identity");
  const join = addEvidence(identityReceipt, "aic-artist-identity", `/entities/Q34013/claims/P6295; statement ${identityClaim.id}; revision ${identity.lastrevid}`, `This Wikidata statement connects Q34013 with AIC artist ${artist.id}; rank ${identityClaim.rank}, ${identityClaim.references.length} recorded reference(s). The community assertion is retained for identity review.`);
  const artistEvidence = addEvidence(artistReceipt, "identity", "/data/id; /data/title; /data/birth_date; /data/death_date", "The AIC artist identity and lifespan corroborate the bounded cross-source reconciliation; the explicit identifier is in the separate Wikidata evidence.");
  const seurat = corpus.entities.find((entity) => entity.id === "person:seurat");
  if (!seurat) throw new Error("Missing Seurat entity");
  seurat.externalIds.push({scheme: "artic-artist", value: String(artist.id), evidenceIds: [join, artistEvidence]});
  const title = addEvidence(receipt, "title", "/data/id; /data/title; /data/main_reference_number", "The AIC record identifies the final painting and its accession number.");
  corpus.entities.push({id: "artic:27992", kind: "artwork", workLevel: "physical-object", labels: [{language: "en", text: record.data.title}], aliases: [], evidenceIds: [title], externalIds: [{scheme: "artic-artwork", value: "27992", evidenceIds: [title]}, {scheme: "artic-accession", value: record.data.main_reference_number, evidenceIds: [title]}]});
  const creator = addEvidence(receipt, "maker", "/data/artist_id; /data/artist_title", "AIC credits Georges Seurat; his source-specific ID is explicitly reconciled through the separate Wikidata assertion.");
  relation("artic:27992:maker", "artic:27992", "made_by", "person:seurat", [creator, join], {attribution: "accepted", role: "artist"});
  const dates = addEvidence(receipt, "date", "/data/date_display; /data/date_start; /data/date_end", "Main execution is indexed as 1884–86. The full display additionally identifies a border added in 1888–89; that event has its own dated claim.");
  date("artic:27992:dated", "artic:27992", {display: record.data.date_display, earliest: record.data.date_start, latest: record.data.date_end, qualifier: "range", semantics: "occurrence-window", sourceCalendar: "AIC catalogue CE; calendar unspecified", precision: "year"}, [dates], {role: "main execution", explanation: "These bounds index the main painting; the later border is separately recorded."});
  date("artic:27992:border-dated", "artic:27992", {display: "border added 1888–89", earliest: 1888, latest: 1889, qualifier: "range", semantics: "occurrence-window", sourceCalendar: "AIC catalogue CE; calendar unspecified", precision: "year"}, [dates], {role: "border addition"});
  const medium = addEvidence(receipt, "medium", "/data/medium_display; /data/material_titles", "AIC lists oil on canvas and identifies oil paint and canvas in its material terms.");
  for (const material of ["concept:oil-paint", "concept:canvas"]) relation(`artic:27992:made-of:${material}`, "artic:27992", "made_of", material, [medium]);
  const place = addEvidence(receipt, "origin", "/data/place_of_origin", "The object record supplies France as place of origin; no more precise production coordinates are inferred.");
  relation("artic:27992:origin", "artic:27992", "produced_at", "place:france", [place]);
  const custody = addEvidence(receipt, "custody", "/data/main_reference_number; /data/credit_line; /config/website_url", "The Art Institute of Chicago holds this catalogued collection object.");
  relation("artic:27992:held-by", "artic:27992", "held_by", "institution:artic", [custody]);
  if (record.data.is_public_domain && record.data.image_id) {
    const evidence = addEvidence(receipt, "image-rights", "/data/is_public_domain; /data/image_id; /config/iiif_url; /data/credit_line", "The record marks the work public domain. The IIIF image URL is constructed using the base and identifier returned by this response.");
    const url = `${record.config.iiif_url}/${encodeURIComponent(record.data.image_id)}/full/843,/0/default.jpg`;
    corpus.images.push({id: "artic:27992:image", artworkId: "artic:27992", url, thumbnailUrl: url, alt: record.data.thumbnail?.alt_text ?? record.data.title,
      rights: {status: "open", license: "CC0-1.0", rightsUrl: "https://api.artic.edu/docs/#copyright", credit: `Art Institute of Chicago. ${record.data.credit_line}`, verifiedAt: receipt.retrievedAt, evidenceIds: [evidence], display: true, cache: true, derivatives: true}});
  }
  canonical(corpus.sources); canonical(corpus.evidence); canonical(corpus.entities); canonical(corpus.claims); canonical(corpus.images);
  const validated = validateCorpus(corpus);
  if (!validated.ok) throw new Error(`Invalid seed corpus: ${validated.issues.map((issue) => `${issue.path}: ${issue.message}`).join("; ")}`);
  return {corpus: validated.corpus, reports: [
    {sourceId: "met", received: 5, accepted: 5, quarantined: 0, warnings: ["Bounded pinned replay only; no pagination or live refresh.", "Hokusai and century-worded sculpture bounds are typed index-window, excluded from historical temporal-overlap reasoning; original display dates are retained."]},
    {sourceId: "artic", received: 2, accepted: 2, quarantined: 0, warnings: ["One artwork and one artist record. Artwork description field deliberately excluded."]},
    {sourceId: "wikidata", received: 1, accepted: 1, quarantined: 0, warnings: ["Only the explicit AIC artist identity is consumed; remaining Wikidata claims are not imported."]},
  ]};
}
