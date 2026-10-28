/** PM-owned v0.1 contract. Evidence belongs to assertions, not just pages. */
export type EntityKind = 'work' | 'person' | 'group' | 'place' | 'period' | 'concept' | 'material' | 'event' | 'institution';
export interface Entity {
  id: string;
  kind: EntityKind;
  labels: Readonly<Record<string, string>>;
  aliases: readonly string[];
  sourceIds: readonly string[];
}
export interface Source {
  id: string;
  url: string;
  title: string;
  publisher: string;
  readAt: string;
  mode: 'page-read' | 'api-snapshot';
}
export interface Evidence { sourceId: string; locator: string }
/** Signed astronomical years: 0 = 1 BCE. Null means unknown, not zero. */
export interface TimeSpan {
  kind: 'time';
  label: string;
  earliest: number | null;
  latest: number | null;
  precision: 'exact' | 'approximate' | 'range' | 'unknown';
  calendar: 'gregorian-proleptic';
}
export type Value = { kind: 'entity'; id: string } | TimeSpan | { kind: 'text'; text: string; language: string };
export type Predicate = 'createdBy' | 'trainedBy' | 'patronizedBy' | 'commissionedBy' | 'depicts' | 'depictsPlace' | 'createdIn' | 'activeIn' | 'heldBy' | 'classifiedAs' | 'usesMaterial' | 'parentOf' | 'partOf' | 'influencedBy' | 'creationDate' | 'birthDate' | 'deathDate' | 'periodExtent';
export interface Claim {
  id: string;
  subject: string;
  predicate: Predicate;
  object: Value;
  certainty: 'stated' | 'probable' | 'possible';
  status: 'supported' | 'disputed' | 'candidate' | 'retracted';
  evidence: readonly Evidence[];
  note: string;
}
export interface Media {
  id: string;
  workId: string;
  url: string;
  rights: 'public-domain' | 'cc0' | 'permission' | 'unknown' | 'restricted';
  rightsSourceId: string;
  credit: string;
  alt: string;
}
export interface Atlas {
  schemaVersion: 1;
  revision: string;
  sources: readonly Source[];
  entities: readonly Entity[];
  claims: readonly Claim[];
  media: readonly Media[];
}
export interface PredicateRule {
  forward: string; inverse: string;
  subjects: readonly EntityKind[];
  objects: readonly EntityKind[] | 'time' | 'text';
}
