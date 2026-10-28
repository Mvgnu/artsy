# Coverage and expansion

**2026-10-28 — M0, a bounded relationship proof.** The current seed contains six physical objects from two museum APIs. One Wikidata entity supports artist reconciliation. This is neither a survey of world art nor a claim of complete period coverage.

## What is represented

| Catalogue context | Seed objects | What the slice proves | What it does not prove |
|---|---:|---|---|
| French painting, 19th century | 2 | Seurat study → final painting; explicit cross-museum identity; artist/material/depicted-place pivots; source-scoped Neo-Impressionism | Coverage of European movements or general influence mapping |
| Gandhara and Gupta-period India | 2 | Two distinct sculptures connected through independently cited abhaya-mudra depictions; missing-hand caveat preserved | Direct historical influence between these two objects, complete Buddhist art, or South Asian chronology |
| Edo-period Japan | 1 | Hokusai physical print impression; named maker and period; display date differs from numeric index bounds | All impressions of the design, provenance of each print, or comprehensive Japanese periodization |
| Middle Kingdom Egypt | 1 | BCE conversion, unnamed maker, faience, explicit findspot separated from manufacture | A complete Middle Kingdom date definition, Egyptian stylistic sequence, or continental African coverage |

A museum's holdings and digitization choices shape this sample. Object counts alone are not quality or representativeness. A location named in a modern catalogue is not automatically a historical border, nationality or production coordinate.

Dataset `m0-2026-10-28.2` separates provider search ranges (`index-window`) from historical occurrence bounds. Great Wave and the century-worded sculpture dates retain their display text and numeric endpoints, but those endpoints cannot establish temporal overlap. This correction changes the dataset version; it does not alter the pinned museum responses.

The four period nodes each name their source scheme and spatial scope. Only sourced bounds appear: the Middle Kingdom node has no invented start/end dates. Style membership comes from explicit catalogue/scholarly statements, never a date-overlap rule.

## Explicitly absent

| Coverage gap | Candidate additions | Admission requirement |
|---|---|---|
| Sub-Saharan African traditions | Cleveland, Smithsonian, locally rooted institutional partnerships | Collective makers, specific cultural terminology, uncertain dates and contested acquisition histories survive normalization; a Benin brass head must not become generic bronze |
| Indigenous Americas and Latin America | Met/Cleveland breadth, Smithsonian units, regional providers | Community and cultural context; separate production, findspot, custody and current ownership claims |
| Oceania and Māori material | Te Papa; regional partners | Per-media rights and cultural conditions; key/refresh policy implemented before publication |
| East Asian depth | Japan Search, Smithsonian Asian collections, broader museum records | Language-preserving identities, regional period schemes and provider-specific media permissions |
| Islamic and West/Central/South Asian breadth | Met/Cleveland/Smithsonian; relevant regional sources | Multiple contemporaneous dynastic and cultural schemes, with dated geographic scope |
| Prehistory and archaeological periods | PeriodO, museum archaeology records, historical gazetteers | Source-specific uncertain boundaries, explicit calendar conversion and contextual geographic coverage |
| Modern/contemporary art, photography, living artists | Museum metadata and rights-cleared media | Missing image permission must remain visible; no age-based or metadata-license-based image assumption |
| Architecture, performance, installations and digital art | Specialist archives after contract additions | Distinguish work, site, event, version, documentation and digital reproduction |

Candidate does not mean ingested. Exact documentation and probe status live in `data/sources/registry.json`.

## M1 coverage report contract

For each versioned snapshot report counts by source, catalogue geography, period scheme, language, work level and medium. Include denominators and missingness for named maker, date, period assignment, role-specific place, external identity, evidenced edges and approved media. Never fabricate a percentage of “all art” or “all periods”; no such denominator has been established.

Report reconciliation conflicts, unlinked works, duplicate candidates, unknown media rights and source refresh dates. Keep out-of-dataset and out-of-scope distinct from historical nonexistence. A region with zero imported records must say that the dataset lacks records, not that art was absent.

## Expansion order

1. Complete paginated and incremental adapters for the documented launch sources, with checkpoint/resume and rejection receipts.
2. Admit Getty and PeriodO definitions without flattening alternative schemes. Expand named evidence for one regional thread at a time.
3. Add geographically rooted providers before claiming global breadth. Use the matrix to select a consequential gap rather than maximizing an easy provider count.
4. Admit richer chronology, acquisition events and multi-part works only through additive PM-reviewed contracts.

Gauntlet must inspect the actual route and its evidence. For the current shared gesture route, a critic should be able to see both the common iconography and the fact that one sculpture's hand is missing. A graph that hides the difference fails even if every foreign key is valid.
