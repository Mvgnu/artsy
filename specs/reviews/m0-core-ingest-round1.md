# M0 data Gauntlet — core and ingest, original reviewed snapshot

Reviewer: fresh read-only critic. No repository files changed. No builder reports, previous reviews or implementation-status were read.

## Artifact identity

- Repository: `/workspace/scratch/1414f9137fc6/artsy`
- Base HEAD: `3c3d52cfd40df79a1b10691c266a490ee799adb6` (working tree was changing during review).
- Reviewed corpus: `data/seed/atlas.json`, dataset `m0-2026-10-28.1`.
- Original corpus SHA-256: `59837ce6337cab03065f69e66145744dc6a8f22561ef287bc5caf65111b78142`.
- 27 entities, 46 claims, 52 evidence records, six images, six artworks.
- Actual static export: `sites/demo/out/index.html`, served at `http://127.0.0.1:4173/`. Inspected rendered study relationship and Great Wave date evidence at 1440×900 with Playwright 1.56.1/Chromium.

## Actual commands and observations

Read core/ingest SPEC.md, their contracts, core/ingest implementations, raw manifest/context/provider snapshots, source research registry, import-report.json, engine agreement and Gauntlet workflow. Did not execute the writing CLI: it has no check-only mode.

Ran `node --import tsx --input-type=module` importing `buildSeed` and `serializeCorpus` from `./packages/ingest/src/index.ts`, `validateCorpus` and `dateClaims` from `./packages/core/src/index.ts`, then called `await buildSeed(process.cwd())` and compared serialization with `readFile('data/seed/atlas.json','utf8')`. After a live URL-refinement repair, this returned `validation: true`, `equal: true`, and the original SHA above. Receipt verification is executed by buildSeed for all eight provider payloads. Reports were Met received/accepted 5/5, AIC 2/2, Wikidata 1/1; all quarantined counts zero. There was no network acquisition in replay.

An earlier invocation genuinely failed with `TypeError [ERR_INVALID_URL]`, input `''`, at `packages/ingest/src/providers.ts:3` because the optional-URL union evaluated a `new URL('')` refinement. That implementation changed during the review and the repeated replay succeeded. This is recorded as resolved technical evidence, not the remaining quality gap.

The inspected baseline `dateClaims(corpus,'met:56353')` returned display `ca. 1830–32`, earliest `1820`, latest `1842`, qualifier `circa`, semantics `occurrence-window`, asserted status and role `creation`. Its evidence note said the wider range is search indexing and is not a new dating claim. The rendered date panel made that same caveat visible and displayed `/objectDate; /objectBeginDate; /objectEndDate`, record 56353 and the retrieval date.

## Core round

Verdict: **gap**.

**One largest gap: the typed time model in this snapshot cannot preserve the difference between a provider's search/index range and an asserted historical occurrence window.** The real Great Wave record exposes it: machine consumers receive an asserted creation occurrence window of 1820–1842; only free prose explains that the museum's displayed date is ca. 1830–32 and that the broader range is not another dating statement. Preserving both numbers and a caveat is useful, but the typed meaning is still wrong. A normal serialization/validation round trip retains that mismatch.

The external bar inspected was Linked Art production/provenance: production associates actors, time and place with the activity, while discovery and custody remain separately meaningful. This review does not demand full Linked Art conformance or additional artworks. It demands the already-published six-work facts retain their roles in machine-readable form.

Other bounded core observations were sound: accepted maker attribution and source IDs remain present; the study/final painting remain distinct physical objects; William uses `found_at` Meir and `held_by` Met without manufacturing a production place; the two AIC date claims preserve main execution and later border addition; no generic anonymous maker is shared between the sculptures.

## Ingest round

Verdict: **gap**.

**One largest gap: normalization publishes the Great Wave's provider indexing values as a creation `occurrence-window`.** This is the ingestion manifestation of the same cross-domain semantic loss, rather than a second wishlist item. The raw fields are real and exactly locatable, and the import is reproducible, but the transformation asserts a meaning its own note disclaims. The rendered human caveat does not repair the published scalar claim.

The requested relationship/source comparisons otherwise support a bounded result:

- Met 437658 explicitly identifies its canvas as the final study for the Chicago painting. The actual evidence panel shows both the Met Overview/Audio 6342 locator and AIC object ID/title/accession locators.
- Met 72381 explicitly describes abhaya mudra. Met 38198 identifies the original gesture while saying the right hand is missing; the normalized claim retains the missing-hand caveat and does not turn the bridge into influence.
- Met 544227 has the displayed ca. 1961–1878 BCE date, separate astronomical numbers -1960/-1877, and a Meir excavation/tomb findspot. The publication does not claim manufacture at Meir.
- AIC 27992's API independently confirms 1884–86 and border added 1888–89. The latter survives as its own dated claim.
- Seurat's cross-source identity is explicit: Met Q34013 plus Wikidata P6295 = AIC artist 40810. The recorded statement ID, revision 2561607084, normal rank and one reference survive in evidence; this is not a name-only merge.
- Source metadata terms and per-image rights/capabilities are separately represented. All six actual image assets are backed by provider public-domain flags; the five Met object pages also display Public Domain. This review does not claim a live denied-image import was exercised.

## Primary external references actually opened

- https://linked.art/model/object/production/ — production, uncertain attribution, discovery versus production.
- https://linked.art/model/provenance/ — ownership, custody and encounter distinctions.
- https://www.metmuseum.org/art/collection/search/437658
- https://www.metmuseum.org/art/collection/search/72381
- https://www.metmuseum.org/art/collection/search/38198
- https://www.metmuseum.org/art/collection/search/56353
- https://www.metmuseum.org/art/collection/search/544227
- https://api.artic.edu/api/v1/artworks/27992 — actual JSON successfully retrieved.
- https://www.wikidata.org/wiki/Q34013 — current page confirms ARTIC artist ID 40810.
- https://metmuseum.github.io/
- https://api.artic.edu/docs/
- https://www.metmuseum.org/hubs/open-access
- https://www.metmuseum.org/essays/georges-seurat-1859-1891-and-neo-impressionism

AIC object HTML returned 403; its successful official object API supplied the comparison. The web tool could not retrieve the Met JSON endpoint or AIC artist JSON endpoint; checked-in hashed payloads plus the official collection pages supplied those comparisons. These failed fetches are not presented as provider outages.

## Review boundary and live-tree change

PM announced and began a repair during the review. A later filesystem read showed `index-window` in the core contract/import output and a graph exclusion for that semantics, while the served export still displayed the earlier explanation. Those live changes are **not counted as a passed corrected round** here. The two gap verdicts above apply to the original SHA explicitly named above. A corrected frozen artifact needs its own replay/round-trip/comparison check. No PM stop decision was made or inferred.
