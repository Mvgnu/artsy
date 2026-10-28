# M0 core and ingest Gauntlet — round 2

## Verdict

**Core: pass (bounded six-work property). Ingest: pass (bounded six-work property).** The previous semantic gap is corrected in the actual published snapshot, its round trip and its scalar consumer. No next material gap was found within this round's scope. This is not a claim of general Linked Art conformance or a production import system.

## Artifact identity

- `/workspace/scratch/1414f9137fc6/artsy/data/seed/atlas.json`
- Dataset: `m0-2026-10-28.2`
- SHA-256: `1dd6f42bc8c078dd8875e4b69fdc51c6e5ce8185330eb957ddd599d362cd3c31`
- Counts: 27 entities, 46 claims, 52 evidence records, six image assets.
- Served export: `http://127.0.0.1:4173/`; its newly created walk URLs contain dataset `.2`.
- Read-only review; no repository files edited. No builder reports or prior reviews read for this round.

## Executed checks

Ran an inline `node --import tsx --input-type=module` script importing `buildSeed`/`serializeCorpus`, `validateCorpus`/`dateClaims`, and `graph.compareTime`. Replaced that process's global fetch with a throwing function before replay. Executed buildSeed twice and validated a JSON parse/serialize round trip.

Actual results:

- Replay equals checked-in published bytes: true.
- JSON validation/serialization round trip equals original replay: true.
- Second replay equals first: true.
- All eight pinned provider payloads pass buildSeed's checksum validation.
- Import reports: Met 5/5 accepted, AIC 2/2, Wikidata 1/1; zero quarantined.

The current frozen TimeSpan contract explicitly admits `index-window`. dateClaims returns it intact, with the original source display, endpoints, precision, qualifier, evidence IDs and creation-date-indexing role.

| Record | Source display retained | Numeric bounds retained | Typed semantics | compareTime against an interior exact-year probe |
|---|---|---|---|---|
| Met 56353 | ca. 1830–32 | 1820–1842 | index-window | 1835 -> unknown |
| Met 72381 | 1st to mid-2nd century | 1–150 | index-window | 100 -> unknown |
| Met 38198 | late 5th century | 467–499 | index-window | 480 -> unknown |

All three comparisons also return unknown with arguments reversed and when compared to themselves. The explicit Met Seurat study date versus exact 1884 returns possible-overlap, so this is not a blanket disabling of all time reasoning. Probe dates are synthetic consumer checks, not published historical assertions.

Other real data remains intact: William retains circa, astronomical -1960/-1877, found_at Meir and held_by Met without a produced_at assertion; AIC has independent main-execution and border-addition date claims; source-specific maker IDs and accepted attribution remain; unnamed sculptures receive no fictional shared maker; study_for and the standing Buddha's missing-hand caveat remain unchanged.

## Actual evidence rendering

Used Playwright/Chromium against the built export at 1440×900. Browser context used ignoreHTTPSErrors only for the environment proxy certificate; no site TLS settings were changed. Searched for each of Wave, Seated Buddha and Standing Buddha, entered the work and opened its date evidence.

All three panels retain the museum's human date and show `/objectDate; /objectBeginDate; /objectEndDate`, the exact record ID and retrieval date. They explicitly explain that precise numeric indexing endpoints cannot establish temporal overlap. The Wave panel additionally displays both ca. 1830–32 and 1820–1842. The typed and rendered meanings now agree.

## External bar actually re-opened this round

- https://linked.art/model/object/production/ — production carries its own time, actors and location.
- https://linked.art/model/provenance/ — custody, ownership and encounters are distinct.
- https://www.metmuseum.org/art/collection/search/56353 — ca. 1830–32.
- https://www.metmuseum.org/art/collection/search/72381 — 1st to mid-2nd century.
- https://www.metmuseum.org/art/collection/search/38198 — late 5th century and the missing original hand.
- https://api.artic.edu/api/v1/artworks/27992 — 1884–86, border added 1888–89.

The original five Met/AIC/Wikidata comparisons remain the six-work source baseline; the pinned input hashes are unchanged. The correction preserves original source statements while preventing museum indexing values from being promoted into historical overlap evidence. That meets the stated bounded preservation and traceability property.
