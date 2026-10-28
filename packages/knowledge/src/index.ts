import type { Atlas, Claim, Entity, EntityKind, Evidence, Media, Predicate, PredicateRule, Source, Value } from './contract.js';
const makers: readonly EntityKind[] = ['person', 'group'];
const works: readonly EntityKind[] = ['work'];
const any: readonly EntityKind[] = ['work','person','group','place','period','concept','material','event','institution'];
export const predicates: Readonly<Record<Predicate, PredicateRule>> = {
  createdBy: {forward:'created by',inverse:'created',subjects:works,objects:makers},
  trainedBy: {forward:'trained with',inverse:'trained',subjects:makers,objects:makers},
  patronizedBy: {forward:'supported by',inverse:'supported',subjects:makers,objects:['person','group','institution']},
  commissionedBy: {forward:'commissioned by',inverse:'commissioned',subjects:works,objects:['person','group','institution']},
  depicts: {forward:'depicts',inverse:'depicted in',subjects:works,objects:['person','group','concept','event']},
  depictsPlace: {forward:'depicts place',inverse:'depicted in',subjects:works,objects:['place']},
  createdIn: {forward:'created in',inverse:'place of creation for',subjects:works,objects:['place']},
  activeIn: {forward:'active in',inverse:'place of activity for',subjects:makers,objects:['place']},
  heldBy: {forward:'in the collection of',inverse:'holds',subjects:works,objects:['institution']},
  classifiedAs: {forward:'classified as',inverse:'includes',subjects:['work','person','group'],objects:['period','concept']},
  usesMaterial: {forward:'uses',inverse:'used in',subjects:works,objects:['material']},
  parentOf: {forward:'parent of',inverse:'child of',subjects:['person'],objects:['person']},
  partOf: {forward:'part of',inverse:'contains',subjects:any,objects:any},
  influencedBy: {forward:'influenced by',inverse:'influenced',subjects:['person','work','group','period'],objects:['person','work','group','period']},
  creationDate: {forward:'dated',inverse:'',subjects:works,objects:'time'},
  birthDate: {forward:'born',inverse:'',subjects:['person'],objects:'time'},
  deathDate: {forward:'died',inverse:'',subjects:['person'],objects:'time'},
  periodExtent: {forward:'dated by this authority',inverse:'',subjects:['period'],objects:'time'}
};
function fail(message: string): never { throw new Error(message); }
function record(v: unknown): Record<string, unknown> {
  if (typeof v !== 'object' || v === null || Array.isArray(v)) fail('Expected object');
  return Object.fromEntries(Object.entries(v));
}
function text(v: unknown): string {
  return typeof v === 'string' && v.trim().length > 0 ? v : fail('Expected nonempty string');
}
function list(v: unknown): unknown[] { return Array.isArray(v) ? v : fail('Expected array'); }
function choice<T extends string>(v: unknown, allowed: readonly T[]): T {
  for (const item of allowed) if (v === item) return item;
  return fail(`Unknown enum: ${String(v)}`);
}
function integer(v: unknown): number | null {
  return v === null ? null : typeof v === 'number' && Number.isSafeInteger(v) ? v : fail('Invalid year');
}
export function safeUrl(v: unknown): string {
  const value = text(v); const url = new URL(value);
  if (url.protocol !== 'https:' || url.username || url.password) fail('Only HTTPS URLs without credentials are allowed');
  return value;
}
function source(v: unknown): Source {
  const o = record(v); const readAt = text(o.readAt);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(readAt) || !Number.isFinite(Date.parse(readAt)) || new Date(readAt).toISOString().slice(0,10) !== readAt) fail('Invalid source date');
  return {id:text(o.id),url:safeUrl(o.url),title:text(o.title),publisher:text(o.publisher),readAt,mode:choice(o.mode,['page-read','api-snapshot'])};
}
function entity(v: unknown): Entity {
  const o = record(v); const labels: Record<string,string> = {};
  for (const [key,value] of Object.entries(record(o.labels))) {
    if (!/^[a-z]{2,3}(-[A-Za-z0-9]+)*$/.test(key)) fail('Invalid language tag');
    labels[key] = text(value);
  }
  if (!Object.keys(labels).length) fail('Missing label');
  return {id:text(o.id),kind:choice(o.kind,any),labels,aliases:list(o.aliases).map(text),sourceIds:list(o.sourceIds).map(text)};
}
function value(v: unknown): Value {
  const o = record(v);
  if (o.kind === 'entity') return {kind:'entity',id:text(o.id)};
  if (o.kind === 'text') return {kind:'text',text:text(o.text),language:text(o.language)};
  if (o.kind !== 'time') return fail('Invalid value kind');
  const earliest = integer(o.earliest); const latest = integer(o.latest);
  const precision = choice(o.precision,['exact','approximate','range','unknown']);
  if (earliest !== null && latest !== null && earliest > latest) fail('Reversed date bounds');
  if (precision === 'exact' && (earliest === null || earliest !== latest)) fail('Exact date needs equal finite bounds');
  return {kind:'time',label:text(o.label),earliest,latest,precision,calendar:choice(o.calendar,['gregorian-proleptic'])};
}
function evidence(v: unknown): Evidence { const o=record(v); return {sourceId:text(o.sourceId),locator:text(o.locator)}; }
function claim(v: unknown): Claim {
  const o=record(v);
  const predicate=o.predicate;
  if (!isPredicate(predicate)) fail('Unknown predicate');
  return {id:text(o.id),subject:text(o.subject),predicate,object:value(o.object),certainty:choice(o.certainty,['stated','probable','possible']),status:choice(o.status,['supported','disputed','candidate','retracted']),evidence:list(o.evidence).map(evidence),note:text(o.note)};
}
function isPredicate(v: unknown): v is Predicate { return typeof v==='string' && Object.hasOwn(predicates,v); }
function media(v: unknown): Media {
  const o=record(v); return {id:text(o.id),workId:text(o.workId),url:safeUrl(o.url),rights:choice(o.rights,['public-domain','cc0','permission','unknown','restricted']),rightsSourceId:text(o.rightsSourceId),credit:text(o.credit),alt:text(o.alt)};
}
function unique<T extends {id:string}>(items:readonly T[]): Map<string,T> {
  const map=new Map<string,T>();
  for (const item of items) {
    if (!/^[a-z][a-z0-9-]*:[A-Za-z0-9-]+$/.test(item.id)) fail(`Invalid ID ${item.id}`);
    if (map.has(item.id)) fail(`Duplicate ID ${item.id}`);
    map.set(item.id,item);
  }
  return map;
}
/** Parse an untrusted boundary by construction; fail closed on dangling evidence. */
export function parseAtlas(input: unknown): Atlas {
  const o=record(input); if (o.schemaVersion!==1) fail('Unsupported schema version');
  const atlas: Atlas={schemaVersion:1,revision:text(o.revision),sources:list(o.sources).map(source),entities:list(o.entities).map(entity),claims:list(o.claims).map(claim),media:list(o.media).map(media)};
  const sources=unique(atlas.sources); const entities=unique(atlas.entities); unique(atlas.claims); unique(atlas.media);
  for (const e of atlas.entities) {
    if (!e.sourceIds.length || e.sourceIds.some(s=>!sources.has(s))) fail(`Missing entity evidence: ${e.id}`);
  }
  for (const c of atlas.claims) {
    const s=entities.get(c.subject); const rule=predicates[c.predicate];
    if (!s || !rule.subjects.includes(s.kind)) fail(`Invalid subject: ${c.id}`);
    if (!c.evidence.length || c.evidence.some(e=>!sources.has(e.sourceId))) fail(`Missing claim evidence: ${c.id}`);
    if (c.object.kind==='entity') {
      const target=entities.get(c.object.id);
      if (!target || typeof rule.objects==='string' || !rule.objects.includes(target.kind)) fail(`Invalid object: ${c.id}`);
      if (c.subject===target.id) fail(`Self relationship: ${c.id}`);
    } else if (c.object.kind!==rule.objects) fail(`Invalid literal: ${c.id}`);
  }
  for (const m of atlas.media) if (entities.get(m.workId)?.kind!=='work' || !sources.has(m.rightsSourceId)) fail(`Invalid media evidence: ${m.id}`);
  return atlas;
}
export function label(e: Entity, language='en'): string { return e.labels[language] ?? Object.values(e.labels)[0] ?? e.id; }
