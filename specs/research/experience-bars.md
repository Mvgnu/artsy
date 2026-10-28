# Artsy: experience, domains, and Gauntlet research

Research date: 2026-10-28. Status: proposed requirements and external references, not a verdict on an implementation. Official pages were read; no competitor was interactively tested or screenshotted in this research task. A future critic must open the actual reference and actual exported artifact. All timings and thresholds below are proposed product gates, not measured results.

## 1. The product promise

Start anywhere in art, choose a relationship, and keep going while understanding why every step is possible. The primary object is the walk: an ordered path of entities and evidence-bearing edges. A biography, chronology, artwork viewer, or map is a lens on that path.

The product should make these questions effortless:

- What am I looking at, who made it or is credited with making it, and when?
- Which larger contexts does this belong to, and who makes those classifications?
- What can I follow from here: a study, maker, teacher, depicted subject, material, place, event, or a documented influence?
- What connects the next thing to this thing? Is that connection recorded, curated, or computed?
- What did I pass through to get here, and can I change direction without losing the trail?

"Related" is not a sufficient relation label. Use "study for", "made by", "same depicted subject", "made in", "held by", or "overlapping date range". A row may have both a human-readable explanation and the exact assertion IDs used to construct it.

## 2. A real first thread

The Met's record for Georges Seurat's *Study for “A Sunday on La Grande Jatte”* (object 437658, 1884) explicitly identifies it as the final preparatory sketch for the final painting now in the Art Institute of Chicago. The latter is AIC artwork 27992. This is an excellent first cross-institution journey because it is demonstrable, visually interesting, and does not require a speculative influence claim.

Source: https://www.metmuseum.org/art/collection/search/437658

Related authoritative identity: https://www.artic.edu/artworks/27992/a-sunday-on-la-grande-jatte-1884

The visitor task: open the Met study, follow **study for**, compare the final painting, open the evidence for the connection, follow Seurat, then choose another work or return to the study. Preserve the distinction between a work's depicted date, creation span, and later modifications. AIC's displayed chronology must survive normalization intact; a single integer year cannot be the only stored date.

This path is an M0 proof, not evidence of universal art-history coverage. A second launch thread should involve another geography and periodization scheme before the navigation model is considered settled. Anonymous and workshop production must work without a fictional "unknown artist" person node.

## 3. Navigation design

### Focused entity, explicit exits

The default view should contain a dominant artwork or entity identity, a compact date/place context, and a short list of intelligible exits grouped by relation. Do not make a force-directed graph the only navigation surface. Dense graph views can be an optional orientation lens once a user has accumulated a useful trail.

At 390px width, show the current node first, a visible trail control, then next-step cards grouped by relationship. At 1440px, use a persistent context/trail rail and spacious central image; show competing exits without overwhelming the image. A semantic list and links must offer everything the optional graph affords.

Choose up to a small number of representative exits per relation with an explicit "show all N" that opens the complete, paginated neighbor set. Count and ordering come from the current snapshot. A user asking to go in any direction must not be trapped in an editorially chosen six-card feed.

### Distinct directions

| Direction | Actual operation | What must remain visible |
|---|---|---|
| Zoom out | Artwork → maker, period, technique, place, collection | Kind and evidence of membership |
| Zoom in | Period/tradition → substantiated artists, workshops, works, events | The chosen scheme and scope |
| Move through time | Current interval → earlier, overlapping, later entities under a chosen relation | Uncertainty and unchanged geographic/material lens |
| Move sideways | Another work connected by a specific concept or documented relationship | Shared intermediary and claim IDs |
| Cross geography | Same time/material/subject in another represented region | Whether connection is shared classification or historical transmission |
| Follow a documented chain | Study → final work; artist → teacher; work → exhibition | Source and attribution certainty for each edge |
| Surprise me | Pick a new route from eligible evidence-bearing neighbors | Reason, reproducible seed, and easy return |

"Made in", "depicts", "found at", "held by", "exhibited at", and "owned by" must remain separate. A museum's present-day location is not the place an artwork was made. A derived overlap is not an encounter between artists. A similar-looking picture is not evidence that its maker influenced another.

### History and sharing

Back/forward must restore the current entity, walk, lens, filters, and evidence panel. Store canonical IDs and snapshot version, not entire copyrighted source records, in the share representation. Browser-only local persistence is enough for M0. Include a human-readable fallback for stale or removed entities. A saved walk must not silently become a different walk after ingestion.

### Educational depth

Offer short contextual definitions at the moment the user encounters a term. A guided route is a curated ordered set of already supported edges plus authored prompts; it cannot add fictional edges because a lesson needs a neat ending. Show where the supporting source can be read. Do not generate an essay for every database entity as a prerequisite to exploration.

"Why this connection?" should answer with a short claim, its type, its source, and any uncertainty. Computed relationships identify their method and inputs. An evidence panel must make disagreement readable rather than collapsing differing catalog attributions into one authoritative voice.

## 4. Periods are regional, overlapping interpretations

The Met's Heilbrunn Timeline explicitly supports chronological, geographic, and thematic routes. Its regional chronologies are a stronger structural model than one global succession of Western movements. Getty's AAT provides broader and related contexts and acknowledges multiple hierarchy positions. These are useful precedents, not complete taxonomies to copy.

References:

- https://www.metmuseum.org/essays/timeline-of-art-history
- https://library.metmuseum.org/record=e1000626~S1
- https://www.getty.edu/research/tools/vocabularies/aat/help.html

Separate **period**, **movement**, **dynasty**, **tradition**, **culture**, and **school** in data. A relationship may link them without turning them into equivalent categories. Each period definition carries its authority/scheme, geographic scope, date interval, and uncertainty. The UI should expose "according to this scheme" when competing classifications matter.

Coverage is a matrix of region × time window × entity/relationship type × source, with evidence and image availability. Show "not yet represented" or "no records in this snapshot", not "no art existed". Counts describe the imported snapshot, not all art. Date overlap alone does not assign a work to a movement.

At least one later fixture must exercise a named non-European period beside an overlapping European one. That is a check on the ontology, not a claim that two objects represent entire cultures. Further coverage must prioritize sources and curators from the represented traditions, not solely Western museums' holdings.

## 5. Proposed domain boundaries

Use the root's proposed `core / ingest / graph / media / explorer` package split for M0. Reserve `learning` as an explicit future spec, creating a runtime package only when the first curated route warrants it. If a sixth package is created now, it should have a narrow actual artifact and no requirement that graph search depends on it. Keep `sites/demo` as the integration fixture and `sites/atlas` as the eventual thin public configuration.

| Domain | Owns | Consumes | Must not own |
|---|---|---|---|
| core | Runtime schema validation, stable entity/claim/asset/time primitives, display-date formatting | No upward packages | Source HTTP calls, ranking, components |
| ingest | Source adapters, registries, mapping fixtures, lineage, reconciliation proposals, coverage reports | core | Global contract changes, UI text, silent identity merges |
| graph | Index construction, inverse traversal, query, neighborhood ranking, path replay, explanations | core, normalized snapshot contract | Raw source fetching, image rights decisions, editorial causality |
| media | Asset eligibility, metadata/credit assembly, IIIF URL handling, image delivery fallbacks | core | Guessing rights from artist death alone, changing artwork identity |
| explorer | Accessible entity/trail/evidence/compare/context components | core, graph, media | Live API fetching, embedding a source's schema in UI |
| learning (reserved) | Curated route definitions, contextual prompts, learning-specific rendering | core, graph, explorer public slots | Adding unsupported historical edges or redefining facts |
| demo site | Test configurations, integration routes, local specimen gallery | Public exports | Domain logic copied into the site |
| atlas site | Brand/configuration, actual static site composition, coverage/help content | Public exports | A second graph, bespoke source parsers |

PM owns root manifests, lockfile, shared TypeScript/build/test configs, every `contract.ts`, architecture tests, `.agent/**`, and engine spec. Domain ownership lists exclude those exact files even when nested under a package. Put domain fixture data under its owned package or explicitly assign a disjoint root data subdirectory. Do not leave an ambiguous shared `data/` free-for-all.

Each spec must declare executable `check`, `test`, and integration `build` commands and a meaningful fixture. Before scripts exist, mark verification as pending bootstrap instead of claiming a spec command ran. Static export must be possible from a pinned, checked-in or content-addressed snapshot without a live museum API during page rendering.

## 6. Named external bars and real artifacts

The named comparison is deliberately narrow. No domain needs to beat an entire museum platform. The critic evaluates the declared property and reports one largest gap.

| Domain | Named external reference | Single compared property | Artifact critic must inspect | Proposed decisive task |
|---|---|---|---|---|
| core | Linked Art object production/provenance model | Preserve who/where/when uncertainty without flattening distinct claims | Serialized normalized specimens, validator output, rendered evidence specimen in demo | Explain creator attribution, creation date, and present holding using a conflicting/uncertain fixture without inventing certainty |
| ingest | Official source object record + Getty reconciliation approach | An imported assertion remains auditable to its precise source and normalization | Adapter run output, pinned raw response, normalized records, mapping/coverage/rejection report, demo evidence | Pick sampled nontrivial fields and follow each to the exact source value; rerun produces the same semantic output |
| graph | Getty AAT full-record hierarchy and associative relation display | Users understand the relation and can move back or sideways without losing context | Real query/replay output plus served demo traversing it | From a work choose a named relation, see all candidates, follow one, reverse it, and open the supporting evidence |
| media | Rijksmuseum Collection Online Comparator + IIIF Presentation requiredStatement | Inspect real details with immediately recoverable attribution and no false image availability | Served compare/viewer at mobile and desktop, asset-policy report, request/404 evidence | Compare study and final work, zoom with keyboard/touch, find credit/license, then repeat with a missing or blocked image |
| explorer | Google Arts & Culture X Degrees of Separation | Each step of a surprising multi-hop route feels continuous and intelligible | Served static export, not screenshots alone | Complete a five-hop walk across at least three relation types and accurately explain each hop; back, reload, and reopen copied URL |
| learning | Met Heilbrunn Timeline | Give enough situated context to turn a connection into an understandable question | Actual cited guided route and source links, rendered in the demo | A reader can explain why one pair belongs in a route while distinguishing its asserted link from broader interpretation |
| demo site | Rijksmuseum Collection Online's integrated object exploration | Independent engine parts compose into one coherent visit | Exported demo with all relevant empty/error/disagreement states | Finish study → final → maker → another work without component-specific navigation conventions |
| atlas site | Met Heilbrunn regional chronologies | Move between time and place while retaining orientation and honest scope | Exported site, coverage view, period lens, representative cross-region route | Hold a time window, change region, identify represented periods and their sources, then return to the original walk |

Reference URLs:

- Core: https://linked.art/model/object/production/ and https://linked.art/model/provenance/
- Getty: https://www.getty.edu/research/tools/vocabularies/aat/help.html and https://www.getty.edu/research-conservation/tools-databases/vocabularies/data-services/
- Media: https://www.rijksmuseum.nl/en/about-collection-online and https://iiif.io/api/presentation/3.0/
- Explorer: https://artsandculture.google.com/experiment/x-degrees-of-separation/tgHqISGUjQHkGQ?hl=en and https://artsexperiments.withgoogle.com/xdegrees/
- Learning/periods: https://www.metmuseum.org/essays/timeline-of-art-history
- Integrated collection: https://data.rijksmuseum.nl/about/

Google's experiment deliberately links artworks by machine-detected visual features. Artsy can borrow its inviting continuity; it must not promote resemblance to a historical claim. Rijksmuseum's Comparator and Collection Online combine object inspection with contextual discovery. IIIF's `requiredStatement` exists to carry display-critical acknowledgements and must remain available in the client. These are separate reference properties.

Getty's current data-service page states that XML web services have been discontinued and legacy XML/relational files are archival; pipelines should use its current Linked Open Data services or monthly bulk formats. Do not copy an old tutorial's retired service into an implementation spec.

## 7. Gauntlet execution protocol

### Fresh critic packet

Provide only the goal, domain spec/contract, declared bar, test task, immutable snapshot/build identifiers, exported artifact URL/path, and necessary source/reference URLs. Spawn separately with no builder conversation/history or report. Read-only access. A critic may inspect implementation only after interacting with the artifact when needed to establish a blocker; the judgment must be grounded in behavior and outputs.

For non-UI domains, output is not a prose report: give the real normalized records, query responses, eligibility manifest, rejected-record set, and replay command. Also demonstrate their visible consequence in the served demo where relevant. A screenshot cannot establish that an importer preserves claims or that a graph is traversable in both directions.

### Required observations

1. Open the actual static export, served locally or at a review URL. Confirm fixture/snapshot version.
2. Complete the exact domain task at 390×844 and 1440×900 where the domain affects the visitor. Inspect screenshot plus interaction; use keyboard as well as pointer, and verify touch-sized controls on the narrow view.
3. Open the external reference. For presentation comparisons use matching content or equivalent complexity where possible. Unlabel references for visual A/B where this is practical; evidence checks cannot be fully blind because attribution identifies the source.
4. Exercise one known edge case relevant to the domain, such as uncertain dates, conflicting attributions, unknown creator, missing image, duplicate identity, high-degree node, empty result, stale walk, or license restriction.
5. Record one largest gap, with reproducible steps, actual result, expected property, evidence files, and severity. Do not dilute the verdict into twelve minor suggestions.
6. Either argue the pass using observations, or return the gap to the builder. No preset round count. PM may stop a round with the gap and reason recorded; that is explicitly not a pass.

If the artifact cannot be accessed, the round fails as **artifact unavailable**. If the reference is unavailable, record the attempted URL/error and have PM approve an equivalent named reference or defer the comparison. Never call a documentation-only review a product Gauntlet pass.

### Proposed common quality gates

- No unlabeled edges; all historic claims link to evidence, computed relations identify method and inputs.
- Two image specimens with known rights plus one missing/restricted image state.
- Back/forward, reload, and shared-walk restoration work for the inspected route.
- No horizontal page overflow at 390px; evidence and next choices stay operable by keyboard; focus is visible and moves predictably after navigation.
- A low-connectivity node explains the available next moves and data gap; it does not fabricate a way out.
- Deep node links work on a plain static server, with no live museum API required.
- A claimed present-day location is timestamped or identified as current to the source snapshot.

These are admission gates. A critic still must explain why the experience meets the named bar. Make no claim of general accessibility conformance from a handful of checks.

## 8. Deliverable waves

### M0: meaning before scale

Deliver authoritative engine/Lop/Gauntlet specs; source registry; runtime-validated fixture; deterministic graph proof; a real two-museum relationship and its reverse; separate artwork/image identity; per-edge evidence; one minimal rendered trail/evidence page if practical. Record missing production capabilities without labeling mock UI as complete. Do not promise every art period.

### M1: genuinely walkable slice

Add source adapters and pinned ingest outputs; at least three different kinds of useful relation; time/place lenses; inspectable image compare; route history/share; a second tradition with distinct periodization and an anonymous-maker fixture. Run fresh domain critics and one smoothing critic against the built demo. Measure actual coverage from the dataset rather than asserting quotas as quality.

### M2: broader, auditable exploration

Expand sources after reconciliation/rights reports are stable. Add curated guided routes, collection/subject pivots, richer provenance events, and source-health/change reports. A fresh engineer creates a throwaway second site using only the public packages and specs; every required engine edit becomes a recorded largest gap. Large-scale graph storage is justified by measured graph size and query needs, not by the word "graph" alone.

### M3: optional computational play

Visual similarity, semantic retrieval, learned recommendations, and generated learning aids can be separate opt-in lenses with explicit method labels. They must not write asserted influence relationships into the historical graph. Keep a historical-evidence-only path mode and the ability to inspect all recorded neighbors independent of recommendation ranking.

## 9. Findings to preserve in PM decisions

1. The strongest first demonstration is a tiny true relationship across institutions, not a large fabricated atlas.
2. "Every period" is an extensibility and coverage requirement; a universal chronological taxonomy would destroy the very relationships the user wants to inspect.
3. Claim evidence, uncertain time, artwork/image separation, and place roles are foundational contracts. Retrofitting them after cards are built will force migrations everywhere.
4. The visitor experience should revolve around explicit next directions and a durable trail. An animated graph is optional; losing context is unacceptable.
5. Data domains need domain-shaped artifacts and externally checkable records, with the visible demo as an additional consequence, not as a substitute for verification.
6. Defer an independent learning runtime until it has a specific output. Reserve its boundary now so editorial context cannot quietly mutate historical assertions later.
