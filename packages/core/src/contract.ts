import { z } from "zod";

// PM-owned. Change this contract before implementing a cross-domain capability.
export const entityKinds = ["artwork", "person", "group", "place", "period", "concept", "institution", "event"] as const;
export const EntityKindSchema = z.enum(entityKinds);
export type EntityKind = z.infer<typeof EntityKindSchema>;
const Id = z.string().min(1).max(200);
const WebUrl = z.url().refine((value) => /^https?:\/\//.test(value), "Expected an HTTP(S) URL");
const NonEmptyIds = z.array(Id).min(1);
export const LocalizedTextSchema = z.object({ language: z.string().min(2), text: z.string().min(1) }).strict();
export const TimeSpanSchema = z.object({
  display: z.string().min(1),
  // Astronomical years: 1 BCE = 0, 2 BCE = -1. Null means unknown, never 0.
  earliest: z.number().int().nullable(),
  latest: z.number().int().nullable(),
  qualifier: z.enum(["exact", "circa", "range", "before", "after", "unknown"]),
  semantics: z.enum(["occurrence-window", "index-window", "duration", "lifespan", "unknown"]),
  sourceCalendar: z.string().min(1),
  precision: z.enum(["year", "decade", "century", "unknown"]),
  edtf: z.string().optional(),
}).strict().refine((value) => value.earliest === null || value.latest === null || value.earliest <= value.latest, "Reversed time bounds");
export type TimeSpan = z.infer<typeof TimeSpanSchema>;

export const SourceSchema = z.object({
  id: Id, name: z.string().min(1), url: WebUrl,
  metadataLicense: z.string().min(1), documentationUrl: WebUrl,
}).strict();
export type Source = z.infer<typeof SourceSchema>;
export const EvidenceSchema = z.object({
  id: Id, sourceId: Id, url: WebUrl, retrievedAt: z.iso.datetime(),
  recordId: z.string().optional(), locator: z.string().min(1),
  // Brief paraphrase, not a copied museum essay. The locator identifies the exact supporting field/passage.
  note: z.string().min(1), snapshotSha256: z.string().regex(/^[a-f0-9]{64}$/).optional(),
}).strict();
export type Evidence = z.infer<typeof EvidenceSchema>;

export const EntitySchema = z.object({
  id: Id, kind: EntityKindSchema, labels: z.array(LocalizedTextSchema).min(1),
  aliases: z.array(LocalizedTextSchema).default([]), evidenceIds: NonEmptyIds,
  externalIds: z.array(z.object({ scheme: z.string().min(1), value: z.string().min(1), evidenceIds: NonEmptyIds }).strict()).default([]),
  workLevel: z.enum(["physical-object", "visual-work", "edition", "series", "performance", "architecture"]).optional(),
  period: z.object({ scheme: z.string().min(1), spatialScope: z.string().min(1) }).strict().optional(),
  description: z.string().optional(),
}).strict().superRefine((entity, context) => {
  if (entity.kind === "period" && !entity.period) context.addIssue({ code: "custom", message: "A period needs a named scheme and spatial scope" });
  if (entity.kind === "artwork" && !entity.workLevel) context.addIssue({ code: "custom", message: "An artwork needs a work level; an impression is not a design" });
});
export type Entity = z.infer<typeof EntitySchema>;

export const predicates = ["made_by", "study_for", "classified_as", "depicts", "made_of", "uses_technique", "produced_at", "found_at", "held_by", "located_in", "active_in", "influenced_by", "member_of", "part_of", "period_in", "dated", "described_as"] as const;
export const PredicateSchema = z.enum(predicates);
export type Predicate = z.infer<typeof PredicateSchema>;
type PredicateDefinition = {
  label: string; inverseLabel: string; subjects: readonly EntityKind[];
  objects: readonly EntityKind[]; value: "entity" | "time" | "text";
  group: "maker" | "history" | "context" | "material" | "place" | "period" | "motif" | "time";
};
const all = entityKinds;
export const predicateRegistry = {
  made_by: { label: "made by", inverseLabel: "made", subjects: ["artwork", "event"], objects: ["person", "group"], value: "entity", group: "maker" },
  study_for: { label: "study for", inverseLabel: "has study", subjects: ["artwork"], objects: ["artwork"], value: "entity", group: "history" },
  classified_as: { label: "associated with", inverseLabel: "includes", subjects: ["artwork", "person", "group"], objects: ["period", "concept"], value: "entity", group: "period" },
  depicts: { label: "depicts", inverseLabel: "depicted in", subjects: ["artwork"], objects: ["concept", "person", "place", "artwork"], value: "entity", group: "motif" },
  made_of: { label: "made of", inverseLabel: "material in", subjects: ["artwork"], objects: ["concept"], value: "entity", group: "material" },
  uses_technique: { label: "uses technique", inverseLabel: "used in", subjects: ["artwork"], objects: ["concept"], value: "entity", group: "material" },
  produced_at: { label: "made in", inverseLabel: "place of making for", subjects: ["artwork", "event"], objects: ["place"], value: "entity", group: "place" },
  found_at: { label: "found at", inverseLabel: "findspot of", subjects: ["artwork"], objects: ["place"], value: "entity", group: "place" },
  held_by: { label: "in the collection of", inverseLabel: "holds", subjects: ["artwork"], objects: ["institution"], value: "entity", group: "place" },
  located_in: { label: "located in", inverseLabel: "location of", subjects: ["institution", "place"], objects: ["place"], value: "entity", group: "place" },
  active_in: { label: "active in", inverseLabel: "place of activity for", subjects: ["person", "group"], objects: ["place"], value: "entity", group: "place" },
  influenced_by: { label: "influenced by", inverseLabel: "influenced", subjects: ["artwork", "person", "group", "period"], objects: ["artwork", "person", "group", "period", "concept"], value: "entity", group: "history" },
  member_of: { label: "member of", inverseLabel: "has member", subjects: ["person", "group"], objects: ["group"], value: "entity", group: "context" },
  part_of: { label: "part of", inverseLabel: "contains", subjects: ["artwork", "period", "place"], objects: ["artwork", "period", "place"], value: "entity", group: "context" },
  period_in: { label: "period scoped to", inverseLabel: "has period", subjects: ["period"], objects: ["place"], value: "entity", group: "period" },
  dated: { label: "dated", inverseLabel: "", subjects: all, objects: [], value: "time", group: "time" },
  described_as: { label: "description", inverseLabel: "", subjects: all, objects: [], value: "text", group: "context" },
} as const satisfies Record<Predicate, PredicateDefinition>;

export const ClaimObjectSchema = z.discriminatedUnion("type", [
  z.object({ type: z.literal("entity"), id: Id }).strict(),
  z.object({ type: z.literal("time"), value: TimeSpanSchema }).strict(),
  z.object({ type: z.literal("text"), value: z.string().min(1), language: z.string().min(2) }).strict(),
]);
export const ClaimSchema = z.object({
  id: Id, subject: Id, predicate: PredicateSchema, object: ClaimObjectSchema,
  evidenceIds: NonEmptyIds,
  status: z.enum(["asserted", "disputed", "superseded"]),
  basis: z.enum(["catalogue", "scholarship", "editorial", "computed"]),
  qualifiers: z.object({
    attribution: z.enum(["accepted", "attributed-to", "workshop-of", "circle-of", "after", "unknown"]).optional(),
    role: z.string().optional(), validDuring: TimeSpanSchema.optional(),
    scheme: z.string().optional(), explanation: z.string().optional(),
    derivation: z.object({ algorithm: z.string().min(1), version: z.string().min(1), inputClaimIds: NonEmptyIds }).strict().optional(),
  }).strict().default({}),
}).strict().superRefine((claim, context) => {
  if (claim.basis === "computed" && !claim.qualifiers.derivation) context.addIssue({ code: "custom", message: "A computed claim needs a reproducible derivation" });
  if (claim.basis === "computed" && claim.predicate === "influenced_by") context.addIssue({ code: "custom", message: "Similarity is not evidence of historical influence" });
});
export type Claim = z.infer<typeof ClaimSchema>;

export const ImageAssetSchema = z.object({
  id: Id, artworkId: Id, url: WebUrl, thumbnailUrl: WebUrl.optional(),
  alt: z.string().min(1), width: z.number().int().positive().optional(), height: z.number().int().positive().optional(),
  rights: z.object({
    status: z.enum(["open", "restricted", "unknown"]), license: z.string().nullable(),
    rightsUrl: WebUrl, credit: z.string().min(1), verifiedAt: z.iso.datetime(),
    evidenceIds: NonEmptyIds,
    // Each capability is independently reviewed; a thumbnail URL is not a license.
    display: z.boolean(), cache: z.boolean(), derivatives: z.boolean(),
  }).strict(),
}).strict();
export type ImageAsset = z.infer<typeof ImageAssetSchema>;

export const CorpusSchema = z.object({
  schemaVersion: z.literal("0.1"), datasetVersion: z.string().min(1),
  sources: z.array(SourceSchema).min(1), evidence: z.array(EvidenceSchema).min(1),
  entities: z.array(EntitySchema).min(1), claims: z.array(ClaimSchema), images: z.array(ImageAssetSchema),
}).strict();
export type Corpus = z.infer<typeof CorpusSchema>;

export type ValidationIssue = { path: string; message: string };
export type ValidationResult = { ok: true; corpus: Corpus } | { ok: false; issues: ValidationIssue[] };
