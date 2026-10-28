import { z } from "zod";

const HttpUrl = z.url().refine((value) => /^https?:\/\//.test(value), "Expected an HTTP(S) URL");
const MaybeUrl = z.union([HttpUrl, z.literal("")]);
// Validate the fields this bounded adapter consumes; upstream may add unrelated fields.
export const MetRecordSchema = z.object({
  objectID: z.number().int().positive(), title: z.string().min(1), objectDate: z.string().min(1),
  objectBeginDate: z.number().int(), objectEndDate: z.number().int(),
  artistDisplayName: z.string(), artistBeginDate: z.string(), artistEndDate: z.string(),
  artistPrefix: z.string(), artistSuffix: z.string(), artistWikidata_URL: MaybeUrl, artistULAN_URL: MaybeUrl,
  objectWikidata_URL: MaybeUrl, objectURL: HttpUrl, accessionNumber: z.string().min(1),
  isPublicDomain: z.boolean(), primaryImage: MaybeUrl, primaryImageSmall: MaybeUrl,
  rightsAndReproduction: z.string(), creditLine: z.string().min(1), repository: z.string().min(1),
  medium: z.string().min(1), period: z.string(), culture: z.string(), geographyType: z.string(),
  country: z.string(), subregion: z.string(), locale: z.string(), excavation: z.string(),
}).refine((record) => record.objectBeginDate <= record.objectEndDate, "Met date bounds are reversed");
export type MetRecord = z.infer<typeof MetRecordSchema>;
export function parseMetRecord(input: unknown): MetRecord { return MetRecordSchema.parse(input); }

export const ArticRecordSchema = z.object({
  data: z.object({
    id: z.number().int().positive(), title: z.string().min(1), date_display: z.string().min(1),
    date_start: z.number().int(), date_end: z.number().int(), artist_id: z.number().int().positive(),
    artist_title: z.string().min(1), place_of_origin: z.string().min(1), medium_display: z.string().min(1),
    credit_line: z.string().min(1), main_reference_number: z.string().min(1),
    is_public_domain: z.boolean(), image_id: z.string().min(1).nullable(),
    style_titles: z.array(z.string()), material_titles: z.array(z.string()),
    thumbnail: z.object({width: z.number().int().positive(), height: z.number().int().positive(), alt_text: z.string().min(1)}).nullable(),
  }).refine((record) => record.date_start <= record.date_end, "AIC date bounds are reversed"),
  info: z.object({ license_text: z.string().min(1), license_links: z.array(HttpUrl).min(1) }),
  config: z.object({ iiif_url: HttpUrl, website_url: HttpUrl }),
});
export type ArticRecord = z.infer<typeof ArticRecordSchema>;
export function parseArticRecord(input: unknown): ArticRecord { return ArticRecordSchema.parse(input); }

export const ArticArtistSchema = z.object({ data: z.object({
  id: z.literal(40810), title: z.string().min(1), birth_date: z.number().int(), death_date: z.number().int(),
  ulan_id: z.number().int().nullable(), wikidata_id: z.string().nullable(),
}) });

const StringStatement = z.object({
  id: z.string().min(1), rank: z.enum(["preferred", "normal", "deprecated"]),
  mainsnak: z.object({ snaktype: z.literal("value"), property: z.literal("P6295"),
    datavalue: z.object({ value: z.string(), type: z.literal("string") }) }),
  references: z.array(z.unknown()).default([]),
});
export const SeuratIdentitySchema = z.object({ entities: z.object({ Q34013: z.object({
  id: z.literal("Q34013"), lastrevid: z.number().int().positive(),
  claims: z.object({ P6295: z.array(StringStatement).min(1) }),
}) }) });

// The pinned Met BCE example uses signed historical years (-1961 = 1961 BCE).
// This conversion is provider-specific. It must not be applied to astronomical
// years from PeriodO or inferred blindly for every source.
export function metYearToAstronomical(year: number): number {
  if (!Number.isInteger(year)) throw new Error("Expected an integer Met year");
  if (year === 0) throw new Error("Met year 0 is ambiguous; quarantine instead of guessing");
  return year < 0 ? year + 1 : year;
}
