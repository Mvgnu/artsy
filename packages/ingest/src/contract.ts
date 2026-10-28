import type { Corpus } from "@artsy/core";
// Source adapters return a validated corpus. Raw payloads enter as unknown.
export type ImportReport = { sourceId: string; received: number; accepted: number; quarantined: number; warnings: string[] };
export type ImportResult = { corpus: Corpus; reports: ImportReport[] };
