# ArtSy source research and acquisition plan

Research date: **2026-10-28**. Scope: publicly documented data services, rights, authority data, and a small set of official object records. This is an implementation recommendation, not a claim that the whole history of art is already represented.

## Decision

Use **The Met + Art Institute of Chicago + Cleveland** for the first physical-object records and reusable images, and **Wikidata** for cross-collection identities and explicitly attributed relationships. Add **Getty AAT/ULAN/TGN** for concepts, makers, and places, and **PeriodO** for source-specific period definitions. Treat those authorities as vocabularies and competing assertions, never as universal truth.

The product should ingest museum metadata into a versioned local graph; a visitor's click must not depend on a live museum API or Wikidata SPARQL query. Acquisition and publication are separate stages. A broken upstream service cannot delete the previous published graph.

The three-museum launch choice is pragmatic: accessible APIs, rights indicators, and complementary records. It does not provide geographically balanced coverage. A coverage report must expose missing regions, traditions, time spans, languages, and image permissions. No global linear sequence of European period names should be imposed on this data.

## Launch sources

### 1. The Metropolitan Museum of Art

Official documentation: <https://metmuseum.github.io/>. Bulk source: <https://github.com/metmuseum/openaccess>.

- Object endpoint: `https://collectionapi.metmuseum.org/public/collection/v1/objects/{objectID}`.
- Enumeration: `/public/collection/v1/objects`; supports `metadataDate` for changes.
- Search **now**: `/public/collection/v1.1/search`; `offset` and `limit`, maximum 500 per page. The old `/v1/search` retirement date is **2026-10-01**. Do not copy older tutorials.
- No API key; documented limit 80 requests/second. ArtSy should start far below that and back off on 429/5xx.
- Selected Open Access metadata is CC0; corresponding open images are public domain. Keep `isPublicDomain`, image presence, and record evidence separately; never infer image permission from an old object date.
- Useful fields include artist/object Wikidata URLs, artist ULAN URL, dates, culture, period, dynasty/reign, geography type, department, tags, medium, accession and source URL.

**Assessment:** broad chronological and material range; valuable Egyptian, Islamic, Asian, African, Oceanic and American records alongside European art. Museum fields and their missingness determine actual coverage. `geographyType` matters: a findspot is not necessarily a production place.

### 2. Art Institute of Chicago

Official API/rights/IIIF documentation: <https://api.artic.edu/docs/>.

- Endpoint family: `https://api.artic.edu/api/v1/{resource}`; resources include artworks, artists, places, styles and subjects.
- No authentication for public access; **60 requests/minute** anonymous limit. Send the requested `AIC-User-Agent` identifier.
- Page limit 100; a search query cannot retrieve over 1,000 results through deep pagination. Prefer documented data dumps for bulk ingestion.
- Artwork metadata is CC0 **except `description`, which is CC BY 4.0** plus the site's terms. Preserve field-level licensing or omit description in initial extraction.
- Images use `image_id` with the response's `config.iiif_url`; do not hardcode the base. Only publish images that pass the public-domain/rights check. IIIF manifests are documented for public-domain artworks.
- Dates, styles, subjects, material/technique identifiers, artist IDs, provenance and exhibition history provide strong graph inputs.

**Assessment:** good for comparing period/style, subject and material pivots. ID-based term fields are preferable to splitting prose strings. It is also useful for a Japanese woodblock-print route.

### 3. Cleveland Museum of Art

Official API documentation: <https://openaccess-api.clevelandart.org/>. Dataset repository is linked there: <https://github.com/ClevelandMuseumArt/openaccess>.

- Public endpoints: `https://openaccess-api.clevelandart.org/api/artworks/`, `/api/creators/`, `/api/exhibitions/`; object detail accepts its internal ID.
- Documentation exposes unauthenticated requests. No numeric request-rate ceiling was verified. Configure a conservative limiter; unknown does not mean unlimited.
- Artworks use `skip`/`limit`, maximum/default 1,000; `updated_since` supports incremental retrieval. Creator/exhibition page limits differ.
- Dataset metadata is CC0. Image permission is separate: `share_license_status` is `CC0`, `Copyrighted`, or `Other`; only `CC0` records supply CC0 images under the documented scheme.
- Structured creators, provenance, citations, exhibition history, cultural labels, date ranges and alternate images are useful.
- Documentation reports daily updates; do not hardcode a data count.

**Assessment:** particularly useful for graph evidence that can be opened and audited. Its Benin record below is a valuable test of collective authorship, cultural specificity and provenance.

### 4. Wikidata

Official access guidance: <https://www.wikidata.org/wiki/Wikidata:Data_access>. Licensing: <https://www.wikidata.org/wiki/Wikidata:Licensing>. Query limits: <https://www.mediawiki.org/wiki/Wikidata_Query_Service/User_Manual>.

- Structured entity data is CC0. Narrative content outside entity namespaces is not covered by that blanket statement.
- Access known entities through the Linked Data interface, e.g. `https://www.wikidata.org/wiki/Special:EntityData/Q5582.json`; Action API supports small batches. Use dumps for large extraction.
- `https://query.wikidata.org/sparql` is an acquisition/discovery tool. Its documented query deadline is 60 seconds, with client processing and concurrency limits; respect `Retry-After`, an identifying User-Agent and `maxlag` where applicable.
- Preserve statement IDs, rank, qualifiers, references, entity revision and retrieval time. A bare truthy projection loses exactly the disagreement/provenance the atlas needs.

**Assessment:** the strongest general join layer for aliases, movements, teachers, places, subjects, and external IDs. Coverage and reference quality vary; an unreferenced community assertion must remain identifiable. An image property is a filename pointer, not an image license.

## Authorities and enrichment

| Source | Verified access and rights | Role and limits |
|---|---|---|
| Getty AAT, ULAN, TGN | [Current data services](https://www.getty.edu/research-conservation/tools-databases/vocabularies/data-services/), [LOD documentation](https://www.getty.edu/research/tools/vocabularies/lod/index.html); `https://vocab.getty.edu/sparql`; per-record JSON/RDF and monthly N-Triples. ODC-By 1.0, with Getty/contributor/source attribution. | AAT: materials, techniques, object types, styles. ULAN: people/groups and names. TGN: places and names. Store exact URIs, scope notes and hierarchy relations; do not equate labels automatically. **XML services and XML/relational releases were discontinued in 2026**; the final archived datasets date to January 30. CONA/IA are not substitutes for a current universal artwork graph. |
| PeriodO | [Technical overview](https://perio.do/technical-overview/), [license](https://perio.do/license/); complete JSON-LD dataset linked as `http://n2t.net/ark:/99152/p0d.json`; stable ARK identifiers. Public-domain dedication. | Period definitions tied to a cited source, geographical scope and uncertain temporal bounds. Multiple definitions may coexist. An authority is a shared-source grouping, not necessarily a continuous periodization. **PeriodO uses astronomical year numbering: 0000 is 1 BCE**; preserve the original display label and convert deliberately. |
| Wikimedia Commons | [Machine-readable metadata](https://commons.wikimedia.org/wiki/Commons:Machine-readable_data), [developer licensing guidance](https://foundation.wikimedia.org/wiki/Legal:Wikimedia_Developer_App_Guidelines). `https://commons.wikimedia.org/w/api.php`, `imageinfo` with `iiprop=extmetadata`. | Gap-filling media. Per-file licenses differ; preserve creator, credit, source page, license URL and revision. HTML metadata needs sanitization. Missing or contradictory rights require link-only treatment. No blanket “Wikimedia is CC0” assumption. |
| Iconclass | [API](https://iconclass.org/help/api), [official dataset](https://github.com/iconclass/data). Dataset advertised as CC0; API help contains an old planned-key warning and needs a live check before dependency. | Candidate iconography/subject hierarchy. Do not force every tradition into a classification merely because a matching English word exists. Prefer the versioned dataset over an unverified operational API. |

## Expansion sources after the first graph

### Rijksmuseum

[Docs](https://data.rijksmuseum.nl/docs/), [search](https://data.rijksmuseum.nl/docs/search), [bulk](https://data.rijksmuseum.nl/docs/data-dumps/), [policy](https://data.rijksmuseum.nl/policy).

The current no-key endpoint is `https://data.rijksmuseum.nl/search/collection`. It returns Linked Art identifiers, then the resolver supplies records; follow `next.id` for pagination. `_profile=la-framed` is documented. OAI-PMH, LDES, bulk N-Triples, actors/places/concepts and IIIF provide richer acquisition options. The 2026 OAI-PMH EDM update can break code that parses XML structure directly. Rights vary by record: public domain, CC0, CC BY 4.0, and restricted content all occur. Keep the actual notice. This is a good next connector for Dutch art, printmaking and cross-collection comparison, not the basis for worldwide completeness. Numeric rate ceiling not verified.

### Smithsonian

[Developer tools](https://www.si.edu/openaccess/devtools), [FAQ](https://www.si.edu/openaccess/faq), [official client repository](https://github.com/Smithsonian/smithsonian-openaccess), [bulk repository](https://github.com/Smithsonian/OpenAccess), [API docs](https://edan.si.edu/openaccess/apidocs/).

The public API requires an api.data.gov key; weekly JSON bulk data avoids making a production key a prerequisite for initial evaluation. Open Access assets are designated CC0; metadata availability does not guarantee media availability. Filter per asset and institution. This can extend Asian, African and American coverage, with institutional and collection-specific bias still visible. Numeric rate ceiling not verified. The developer-tools page was available in the search index but returned 404 through a direct web fetch in this run; do not report it as a successful live endpoint probe.

### Europeana

[API access](https://europeana.atlassian.net/wiki/spaces/EF/pages/2462351393/Accessing+the+APIs), [FAQ](https://europeana.atlassian.net/wiki/spaces/EF/pages/2360508417), [fair-use guidance](https://europeana.atlassian.net/wiki/spaces/EF/pages/2704146433).

Metadata is CC0; media reuse follows `edm:rights`/`europeana:rights`. It aggregates many providers, so duplicate manifestations and variable metadata require explicit reconciliation. Personal/project API keys are now distinct; `X-Api-Key` is preferred and URL `wskey` is deprecated. Keep keys in acquisition jobs, out of public static bundles. For bulk work use dataset downloads or OAI-PMH rather than unbounded search pagination. Numeric account quota must be read from the granted key/response; it was not verified here.

### Japan Search

[Developer portal](https://jpsearch.go.jp/static/developer/en.html), [schema overview](https://jpsearch.go.jp/static/developer/introduction/en.html), [rights/endpoint explanation](https://jpsearch.go.jp/rdf/sparql-explain/).

`https://jpsearch.go.jp/rdf/sparql/` and item `.jsonld`/`.ttl` representations expose normalized people, places and times across participating collections. Only provider-authorized metadata is exposed through this route. Media licensing is expressed in access information using `schema:license`; preserve its original version and provider. This is a geographically rooted enrichment candidate, particularly for Japanese material. Do not replace a provider's rights with an aggregator-wide assumption. Production quota/auth requirements need an actual probe.

### Te Papa

[API terms](https://www.tepapa.govt.nz/learn/research/datasets/collections-api/api-terms-of-use), [developer registration](https://data.tepapa.govt.nz/docs/register.html).

Potential Oceania/Māori collection source with explicit agents/places/concepts and relationships. Evaluation guest keys expire after 30 minutes; sustained use needs a registered key. Limit: 10 requests/second. Metadata is CC BY 4.0 with attribution waived; media licenses differ. Guidance asks not to retain API content beyond four weeks, creating a freshness requirement for snapshots. Respect the provided cultural-context information. This is an extension candidate, not an adapter to silently turn on without accounting for its operational terms.

## Object seeds that expose the real modelling problems

These official collection pages were inspected on 2026-10-28. API fixture acquisition remains separate.

| Seed | Museum facts supported by its record | Useful traversal / adversarial case |
|---|---|---|
| [Met 56353: Hokusai, Under the Wave off Kanagawa](https://www.metmuseum.org/art/collection/search/56353) | Approximately 1830–32; Edo period; Japan; woodblock print; image explicitly public domain. | Creator → print → series → depicted mountain/water, with source support per edge. Met [45434](https://www.metmuseum.org/art/collection/search/45434) is another impression: shared title/artist does **not** mean the physical objects are identical. |
| [Met 544227: Hippopotamus “William”](https://www.metmuseum.org/art/collection/search/544227) | Approximately 1961–1878 BCE; Middle Kingdom, Dynasty 12; faience; from the Senbi tomb context at Meir; image explicitly public domain. | Period → object → material / excavation context / lotus imagery. Findspot must not turn into `created_in`; uncertain dates must not turn into a precise year. No named creator is given. |
| [Met 42168: Spouted Ritual Water Vessel (He)](https://www.metmuseum.org/art/collection/search/42168) | Late 11th century BCE; Western Zhou; China; bronze; public-domain image. Record discusses a reconstructed grouping with explicit uncertainty. | Material → vessel → other pieces in the set. A hypothesized grouping stays qualified; broad Chinese origin is not a latitude/longitude point. |
| [Cleveland accession 1938.6: Ancestral Commemorative Head](https://www.clevelandart.org/art/1938.6) | Possibly mid-1500s or early 1600s; Nigeria, Benin Kingdom, Ẹdo peoples; Igun Eronmwon guild; copper alloy and iron; open-access notice. | Group authorship, uncertain/disjunctive dating, origin versus present collection, and provenance. **Brass is not bronze.** Its [print record](https://www.clevelandart.org/print/art/1938.6) provides an 1897 removal-to-Europe provenance statement. Do not collapse custodianship into rightful ownership. API ID 117905 is a candidate from the record's linked bibliography and must be verified before use. |

A legitimate exploratory bridge is “compare ways of representing water” between the river imagery, Japanese wave and European riverside paintings. It must say **editorial comparison**. It is not evidence that the Egyptian maker influenced Hokusai or that either influenced Seurat. Likewise, temporal overlap enables “around the same time” without implying contact.

## Rights decisions as data

Recommended engineering contract (not a new interpretation of a license):

```ts
type RightsDecision = 'allow' | 'link-only' | 'review';
type RightsEvidence = {
  sourceId: string;
  sourceRecordId: string;
  sourceRecordUrl: string;
  mediaUrl?: string;
  metadataLicenseUrl: string | null;
  fieldLicenseOverrides: Record<string, string>;
  mediaLicenseUrl: string | null;
  mediaRightsText: string | null;
  rightsEvidenceUrl: string;
  rightsEvidencePointer: string | null;
  creatorCredit: string | null;
  institutionCredit: string;
  acquisitionCredit: string | null;
  attributionText: string | null;
  sourceRevision: string | null;
  retrievedAt: string;
  policyVersion: string;
  decision: RightsDecision;
  decisionReason: string;
};
```

The allowlist initially accepts explicit CC0/public-domain designations for images from admitted providers, plus separately implemented CC BY cases when every required credit is available. Unknown, missing, contradictory, noncommercial-only, or restricted media remain link-only pending review. This is a conservative product rule; the node itself can still appear with permitted metadata. Keep rights on each asset, because alternate views may differ.

Attribution should distinguish the artwork maker, photographer, data provider and acquisition credit line. A donor is not the image copyright holder. Do not turn museum logos into endorsement.

Retain the original rights assertion and the policy decision, with a captured date. A refresh that changes permission withdraws the asset from the next publication, invalidates cached derivatives, and records why; it does not erase the historical audit evidence. Source-specific retention rules constrain what can be cached.

## Evidence and ingestion contracts

1. **Acquire:** record request URL with secrets removed, source revision/ETag where supplied, retrieved time, response hash, adapter version, status and response/schema validation. A pagination checkpoint must resume without duplicates. Honor rate limits and retry windows.
2. **Normalize:** namespaced IDs first. Preserve display text and original units, language, dates and uncertainty. Link an external authority ID only when supplied or independently reconciled with a reviewable decision. Do not join on names alone.
3. **Assert:** each relationship carries its exact source record and a JSON pointer / statement ID / cited-page locator. Record `museum assertion`, `community assertion`, `curated interpretation`, or `computed relationship`; these are different evidence mechanisms, not arbitrary confidence percentages.
4. **Reconcile:** retain conflicting assertions and define a display-selection policy. Separate physical object, abstract work, edition/impression, image, actor, group, place, period definition and collection. Unknown creator is absence, not a shared universal person.
5. **Enrich:** build typed and labelled comparison edges from inspectable rules. No embedding similarity or LLM suggestion can silently become a historical-influence claim.
6. **Publish:** freeze a versioned graph and media manifest after schema, reference integrity, license and adversarial-fixture checks. UI gets a stable snapshot and provenance links. Keep the last known-good published snapshot on acquisition failure.
7. **Measure coverage:** for each geographic/tradition/time slice, show objects, creators, evidenced relationships, image eligibility and missingness. A numerical zero means “not in this dataset,” not “no art existed.”

## Candidate source registry shape

This is a recommendation for the PM-owned registry contract. `docs-verified` and `probe-passed` are deliberately different states.

```yaml
schemaVersion: 1
researchedAt: '2026-10-28'
sources:
  - id: met
    tier: launch
    role: object-provider
    docsUrl: https://metmuseum.github.io/
    baseUrl: https://collectionapi.metmuseum.org/public/collection
    paths:
      object: /v1/objects/{id}
      enumerate: /v1/objects
      search: /v1.1/search
    authentication: none
    documentedRate: {requests: 80, intervalSeconds: 1}
    configuredRate: {requests: 1, intervalSeconds: 1}
    metadataLicense: CC0-1.0
    mediaRightsField: isPublicDomain
    verification: docs-verified
  - id: artic
    tier: launch
    role: object-provider
    docsUrl: https://api.artic.edu/docs/
    baseUrl: https://api.artic.edu/api/v1
    authentication: none
    documentedRate: {requests: 60, intervalSeconds: 60}
    configuredRate: {requests: 30, intervalSeconds: 60}
    metadataLicense: CC0-1.0
    fieldLicenseOverrides: {description: CC-BY-4.0}
    mediaRightsField: is_public_domain
    verification: docs-verified
  - id: cleveland
    tier: launch
    role: object-provider
    docsUrl: https://openaccess-api.clevelandart.org/
    baseUrl: https://openaccess-api.clevelandart.org/api
    authentication: none-documented
    documentedRate: null
    configuredRate: {requests: 1, intervalSeconds: 1}
    metadataLicense: CC0-1.0
    mediaRightsField: share_license_status
    verification: docs-verified
  - id: wikidata
    tier: launch
    role: identity-and-assertions
    docsUrl: https://www.wikidata.org/wiki/Wikidata:Data_access
    entityUrl: https://www.wikidata.org/wiki/Special:EntityData/{id}.json
    metadataLicense: CC0-1.0
    publishedGraphDependsOnLiveEndpoint: false
    verification: docs-verified
  - id: getty
    tier: authority
    role: vocabulary
    docsUrl: https://www.getty.edu/research-conservation/tools-databases/vocabularies/data-services/
    metadataLicense: ODC-By-1.0
    datasets: [AAT, ULAN, TGN]
    acquisition: monthly-n-triples-or-bounded-sparql
    verification: docs-verified
  - id: periodo
    tier: authority
    role: period-definition
    docsUrl: https://perio.do/technical-overview/
    metadataLicense: public-domain-dedication
    dateConvention: astronomical-year-numbering
    verification: docs-verified
```

Configured rates above are ArtSy's proposed operational defaults, not provider policies. A source registry should also hold source-specific retention rules, attribution requirements and the exact rights-evidence URLs before activation.

## Verification actually performed

The initial sandbox network attempt was blocked. A subsequently approved, bounded read-only acquisition succeeded on 2026-10-28: five Met object JSON records, AIC artwork 27992, AIC artist 40810, and Wikidata Q34013. Exact request URLs, retrieval timestamps, HTTP 200 statuses and SHA-256 receipts are in `data/raw/manifest.json`. Raw selected-field responses are checked in. `data/sources/registry.json` distinguishes these successful probes from documentation-only candidates. No Getty, PeriodO, Cleveland or expansion connector is implemented yet.

`pnpm fixtures:build` replays those inputs without network, verifies their hashes, validates provider boundaries and the canonical corpus, and deterministically writes `data/seed/atlas.json`. Original curatorial paraphrases and exact locators are kept in `data/raw/context.json`; museum essay text is not copied. AIC artwork descriptions are excluded from the requested fields.

Dataset `m0-2026-10-28.2` records search indexing as a distinct time semantic. Great Wave and the two century-worded Met sculpture dates use `index-window`; their numeric endpoints are not historical occurrence bounds and do not establish temporal overlap. Seurat’s explicit 1884 and William’s explicit BCE range retain occurrence-window semantics. Raw observed JSON bytes and their acquisition hashes are unchanged.

Two important observed differences survive in the fixture: Met 56353 says ca. 1830–32 while its numeric indexing bounds are 1820–1842; AIC 27992 records execution during 1884–86 and a border added 1888–89. The latter has a separate date claim. Wikidata Q34013 statement P6295 explicitly connects the artist to AIC 40810; this community assertion has its own provenance and does not silently override museum metadata.

## Source-domain Gauntlet suggestion

External bar: **the institution's own object record**; compared property: can a visitor inspect the exact evidence for maker, date, place, media rights and relationship without losing qualifiers that the museum shows?

Critic task: compare normalized fixtures and rendered evidence panels with the four seeded records above. The largest likely gap is lossy normalization: place role, uncertain date, collective maker, distinct impression, or rights provenance. A round cannot pass based only on source count or an attractive API list.
