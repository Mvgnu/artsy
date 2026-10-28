# Fresh graph Gauntlet — bounded M0 pass

## Verdict

**pass, bounded to the assigned M0 graph behavior and the inspected real snapshot.** No remaining graph gap was observed against the named property: identify the relation, inspect who supports it, and traverse back without changing the assertion. This is not a production-scale graph, a whole-site accessibility certification, or a pass for deferred timeline, migration, reconciliation, or pagination work.

I worked read-only. I read the graph specification, frozen graph/core contracts, engine and Lop/Gauntlet rules. I did not read implementation-status, builder reports, or previous reviews. Implementation was inspected only after real query output. No repository files, graph data, or seed records were changed.

## Artifact identity

- Repository: `/workspace/scratch/1414f9137fc6/artsy`.
- Runtime entry point: `packages/graph/src/index.ts`, imported with `node --import tsx --input-type=module`.
- Dataset: `data/seed/atlas.json`, version `m0-2026-10-28.2`, 27 entities and 46 claims.
- Dataset SHA-256: `1dd6f42bc8c078dd8875e4b69fdc51c6e5ce8185330eb957ddd599d362cd3c31`.
- Static artifact: `http://127.0.0.1:4173/`, served from `sites/demo/out/`.
- `sites/demo/out/index.html` SHA-256 at inspection: `bce468664ea41ca3f2747879cc9d62d957cc5252007e65fc290b55e9888c48d0`.
- Live route tokens embedded dataset `.2`; I did not encounter the earlier `.1` build suggested as a possibility in the brief.
- Browser: installed Playwright/Chromium; 1440×900 and 390×844 viewports. Screenshots were viewed in memory, not saved as repository artifacts.

## External reference actually inspected

Opened the official Getty AAT About page and Editorial Guidelines through web retrieval:

- https://www.getty.edu/research/tools/vocabularies/aat/about.html
- https://www.getty.edu/publications/vocabularies-editorial-guidelines/aat-guidelines/3_editorial_rules/3.5/

Then inspected the live official concept record in Playwright, not merely the documentation:

- Travertine, AAT `300011329`: https://www.getty.edu/vow/AATFullDisplay?find=travertine&logic=AND&note=&subjectid=300011329
- Followed its `distinguished from` link to tufa, AAT `300011712`, and followed tufa's reciprocal `distinguished from` link back to travertine.
- Followed travertine's parent sinter, AAT `300263391`, and opened its hierarchy display. Sinter contained travertine and tufa at the next level; travertine had narrower children.
- Opened the linked CAMEO source record `2000047822`, which supplied a full bibliographic citation, beyond its abbreviated source label.

The web tool initially could not retrieve the two full-record URLs, and could not render the About page's GIF examples. The live browser successfully loaded the full records with HTTP 200, so the comparison was completed rather than treating those tool failures as a pass. The local browser initially encountered `ERR_CERT_AUTHORITY_INVALID` for artwork image requests. Subsequent browser contexts used `ignoreHTTPSErrors: true` solely for the known environment proxy issue; the application was not changed.

Getty separates hierarchical position from associative relationship type, preserves reciprocal meaning, and supplies context and bibliographic sources. For the assigned three visitor questions, the demo meets that property: plain relation labels lead to a dedicated evidence panel, exact source locations, and an inverse with unchanged support. The demo's claim-specific explanation is particularly direct. Getty has a substantially richer concept record and hierarchy; this pass does not imply equivalent coverage or expressive breadth. Blind comparison was not practical because both artifacts explicitly name their sources.

## Observed runtime and UI results

### Seurat study/final/inverse

`neighbors` and `findPath` returned the actual claim `met:437658:study-for` from Met study `met:437658` to final painting `artic:27992`. Forward label was `study for`; reverse label was `has study`. Both returned the same original claim object and evidence IDs, not a second invented historical assertion.

The explanation contained exactly `met-text:study-for` and `artic:27992:title`. Its Met locator was `Overview, first paragraph; Audio 6342, first paragraph`, and its Art Institute locator was `/data/id; /data/title; /data/main_reference_number`.

I independently opened the Met record at https://www.metmuseum.org/art/collection/search/437658. Its overview and Audio 6342 support the final-study/Chicago connection.

In both browser viewports I opened “Why this connection?”, followed the final painting, and returned through `has study`. The inverse evidence panel's rendered text exactly equaled the forward panel's text. Its canonical heading continued to state the original study-for assertion. The three-step URL contained the same claim once forward and once reverse. Opening that URL in a fresh page on the plain static server restored all three trail steps.

### Buddha gesture bridge

`findPath(graph, 'met:72381', 'met:38198')` returned precisely:

1. `met:72381`.
2. `concept:abhaya-mudra`, through `met:72381:gesture`, forward.
3. `met:38198`, through `met:38198:gesture`, reverse.

There was no direct Buddha-to-Buddha influence claim. The UI presented `depicts` and then `depicted in`, with both objects available from the concept. Each hop opened its own Met evidence record.

I independently opened https://www.metmuseum.org/art/collection/search/72381 and https://www.metmuseum.org/art/collection/search/38198. Their opening paragraphs support the two gesture identifications. The latter records that the relevant hand is missing. Both desktop and mobile evidence panels displayed the missing-hand reconstruction qualification clearly, before the source details. The mobile screenshot showed the full qualification, source link, locator, and status without horizontal overflow.

### Discovery, limits, and exact evidence

Across all 27 real entities, the default neighborhood exactly matched all eligible asserted entity relationships. The maximum observed degree was 8, below the default 50 and hard 200 output cap. The corpus had 12 scalar claims; none appeared as neighbors. Every returned neighbor referenced an existing original claim, and every explanation's evidence set exactly equaled its claim's evidence IDs. Reversing the corpus entity, claim, evidence, and source arrays preserved neighborhoods and the demonstrated Buddha route.

A depth-1 search for the two-hop Buddha path returned `budget-exceeded`, not a claim that no relationship exists. Visited-node budgets 1 and 0 also returned `budget-exceeded`.

### Portable routes and time

A forward/reverse cyclic study walk encoded and decoded successfully. Stale dataset `.1`, wrong direction, teleportation, missing claim/entity, malformed token, 8,193-character token, unsupported version, unknown fields, invalid initial continuation, malformed UTF-8, and scalar-as-edge continuation returned typed failures without decoder crashes.

On mobile, stale, malformed, and wrong-direction URL states visibly reported why the trail could not be restored and offered a fresh trail; they did not present the invalid route as successfully recovered.

For the real Hokusai date claim, provider indexing bounds 1820–1842 with display `ca. 1830–32` returned `unknown` against valid occurrence-window dates 1825, 1831, and 2000, in both operand orders. A valid exact-date self-comparison returned `possible-overlap` as a control. Thus neither overlap nor separation was inferred from that provider search window.

## Scope of the decision

These are direct runtime and browser observations, separate from package test-suite or full-workspace gates. I did not rebuild the artifact or claim a fresh whole-workspace gate run. No conclusion here establishes behavior at production scale, complete world-art coverage, all possible time models, or migration of old dataset URLs. Cursor neighborhoods, richer temporal representation, and snapshot migration are explicitly outside this M0 slice. No PM stop is required for the inspected graph property.
