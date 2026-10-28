export * from "./contract";
import { CorpusSchema, predicateRegistry } from "./contract";
import type { Claim, Corpus, Entity, ValidationIssue, ValidationResult } from "./contract";

export function labelFor(entity: Entity, language = "en"): string {
  return entity.labels.find((label) => label.language === language)?.text
    ?? entity.labels.find((label) => label.language === language.split("-")[0])?.text
    ?? entity.labels.find((label) => label.language === "en")?.text
    ?? entity.labels[0]?.text
    ?? entity.id;
}

export type DateClaim = Claim & { object: Extract<Claim["object"], { type: "time" }> };
export function dateClaims(corpus: Corpus, entityId: string): DateClaim[] {
  return corpus.claims.filter((claim): claim is DateClaim => claim.subject === entityId && claim.predicate === "dated" && claim.object.type === "time" && claim.status === "asserted");
}

export function validateCorpus(input: unknown): ValidationResult {
  const parsed = CorpusSchema.safeParse(input);
  if (!parsed.success) return { ok: false, issues: parsed.error.issues.map((issue) => ({ path: issue.path.join("."), message: issue.message })) };
  const corpus = parsed.data;
  const issues: ValidationIssue[] = [];
  const fail = (path: string, message: string) => { issues.push({ path, message }); };
  const unique = (rows: readonly { id: string }[], path: string) => {
    const seen = new Set<string>();
    for (const row of rows) {
      if (seen.has(row.id)) fail(path, `Duplicate ID ${row.id}`);
      seen.add(row.id);
    }
  };
  unique(corpus.sources, "sources"); unique(corpus.evidence, "evidence");
  unique(corpus.entities, "entities"); unique(corpus.claims, "claims"); unique(corpus.images, "images");
  const sources = new Set(corpus.sources.map((source) => source.id));
  const evidence = new Set(corpus.evidence.map((record) => record.id));
  const entities = new Map(corpus.entities.map((entity) => [entity.id, entity]));
  const claims = new Map(corpus.claims.map((claim) => [claim.id, claim]));
  const checkEvidence = (ids: readonly string[], path: string) => {
    for (const id of ids) if (!evidence.has(id)) fail(path, `Unknown evidence ${id}`);
  };
  for (const record of corpus.evidence) if (!sources.has(record.sourceId)) fail(`evidence.${record.id}`, `Unknown source ${record.sourceId}`);
  for (const entity of corpus.entities) {
    checkEvidence(entity.evidenceIds, `entities.${entity.id}`);
    for (const identity of entity.externalIds) checkEvidence(identity.evidenceIds, `entities.${entity.id}.externalIds`);
    const languages = new Set<string>();
    for (const label of entity.labels) {
      if (languages.has(label.language)) fail(`entities.${entity.id}.labels`, `Duplicate preferred label language ${label.language}`);
      languages.add(label.language);
    }
    if (entity.kind !== "period" && entity.period) fail(`entities.${entity.id}`, "Only a period may declare a period scheme");
    if (entity.kind !== "artwork" && entity.workLevel) fail(`entities.${entity.id}`, "Only an artwork may declare a work level");
  }
  for (const claim of corpus.claims) {
    const path = `claims.${claim.id}`;
    checkEvidence(claim.evidenceIds, path);
    const subject = entities.get(claim.subject);
    const definition = predicateRegistry[claim.predicate];
    if (!subject) fail(path, `Unknown subject ${claim.subject}`);
    else if (!definition.subjects.some((kind) => kind === subject.kind)) fail(path, `Invalid subject kind ${subject.kind} for ${claim.predicate}`);
    if (definition.value !== claim.object.type) fail(path, `Expected ${definition.value} value for ${claim.predicate}`);
    if (claim.object.type === "entity") {
      const object = entities.get(claim.object.id);
      if (!object) fail(path, `Unknown object ${claim.object.id}`);
      else {
        if (!definition.objects.some((kind) => kind === object.kind)) fail(path, `Invalid object kind ${object.kind} for ${claim.predicate}`);
        if (claim.predicate === "part_of" && subject && subject.kind !== object.kind) fail(path, "part_of requires matching kinds; use a specific relationship");
        if (claim.predicate === "classified_as" && object.kind === "period" && claim.basis === "computed") fail(path, "Date overlap must not manufacture period membership");
      }
      if (claim.subject === claim.object.id) fail(path, "A historical relation cannot point to itself");
    }
    for (const dependency of claim.qualifiers.derivation?.inputClaimIds ?? []) {
      if (!claims.has(dependency)) fail(path, `Unknown derivation claim ${dependency}`);
      if (dependency === claim.id) fail(path, "A claim cannot derive from itself");
    }
  }
  const visited = new Set<string>();
  const active = new Set<string>();
  const visit = (id: string) => {
    if (active.has(id)) { fail(`claims.${id}`, "Cyclic claim derivation"); return; }
    if (visited.has(id)) return;
    active.add(id);
    for (const dependency of claims.get(id)?.qualifiers.derivation?.inputClaimIds ?? []) visit(dependency);
    active.delete(id); visited.add(id);
  };
  for (const claim of corpus.claims) visit(claim.id);
  for (const asset of corpus.images) {
    const path = `images.${asset.id}`;
    if (entities.get(asset.artworkId)?.kind !== "artwork") fail(path, "An image must represent an existing artwork");
    checkEvidence(asset.rights.evidenceIds, path);
    if (asset.rights.status !== "open" && (asset.rights.display || asset.rights.cache || asset.rights.derivatives)) fail(path, "Unreviewed or restricted assets cannot opt into open publication capabilities");
    if (asset.rights.status === "open" && !asset.rights.license) fail(path, "An open asset needs a recorded rights statement or license");
    if (new URL(asset.url).protocol !== "https:") fail(path, "Published image URLs must use HTTPS");
    if (asset.thumbnailUrl && new URL(asset.thumbnailUrl).protocol !== "https:") fail(path, "Thumbnail URLs must use HTTPS");
  }
  return issues.length ? { ok: false, issues } : { ok: true, corpus };
}
