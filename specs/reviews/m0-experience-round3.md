# Gauntlet round 3 — bounded explorer/demo navigation pass

## Verdict

**Pass for the bounded M0 explorer navigation and demo continuity task.** The round-2 Back/Forward arrival gap is resolved in the inspected static export. History traversal restores the correct route and keeps its focused current identity visibly located. Direct and bottom-starter arrivals remain coherent.

**The full media comparator remains an open gap.** Native enlargement and this navigation pass do not satisfy the two-work detail-comparison bar. This is not a full production Gauntlet pass, an accessibility-conformance claim, or a claim of broader collection coverage.

## Artifact and review boundary

- Actual plain-server export: `http://127.0.0.1:4173/`, from `sites/demo/out/`.
- Independently checked `index.html` SHA-256: `8b96380e8dfa27c5b9ee61b6aa591a0a0fe2172e771e80be49a331b9d9692161`.
- Dataset: `m0-2026-10-28.2`; independently checked SHA-256: `1dd6f42bc8c078dd8875e4b69fdc51c6e5ce8185330eb957ddd599d362cd3c31`.
- Playwright 1.56.1, Chromium; 390×844 and 1440×900. `ignoreHTTPSErrors: true` was confined to the test browser.
- Read-only inspection, with live interaction and visual screenshot review. No repository/data edits, builder reports, reasoning, or implementation-status reads.

## History, URL, and focus results

All cases below were inspected at both viewports.

| Case | URL and trail result | Visible position and focus result |
|---|---|---|
| Initial study → lower maker card → Back | Exact original URL and study restored | Current H1 focused and wholly visible; study image visible. |
| Forward to maker | Exact original maker URL and identical trail | Maker H1 focused and wholly visible; purposeful entity stage visible. |
| Six-stop route → earlier stop 2 → Neo-Impressionism → Back twice | Exact two-stop branch point, then exact former six-stop route restored | Correct H1 focused and wholly visible at each arrival. |
| Forward twice through that branch | Exact branch-point and Neo-Impressionism URLs/trails restored | Correct H1 focused and wholly visible at each arrival. |
| Direct work/maker/material hops | Correct node, entering claim, and direction retained | Corrected object-arrival convention retained. |
| Bottom “A subject that travels” starter | Fresh one-stop `met:38198` trail | Standing Buddha image, full title, credit, rights link, and date visible; H1 focused. |
| Copy trail link → fresh tabs → reload | Clipboard exactly matches walked URL; both tabs and reloads retain identical six-stop token/trail | Normal first-load introduction at scroll=0 with BODY focus; no erroneous off-screen H1 focus. |

The six-stop route was:

`met:437658` → `artic:27992` → `person:seurat` → `met:437658` → `concept:canvas` → `artic:27992`

It crosses `study_for`, `made_by`, and `made_of`, includes reverse traversal and a repeated work, and retains the complete node IDs, entering claim IDs, directions, and dataset version. The former future remains in browser history instead of being spliced onto the new branch.

### Decisive improvement

The minimal reproduction used the lower “made by Georges Seurat” card, then Back and Forward, with 1.5 seconds allowed for each history arrival to settle.

| Arrival | 390×844 | 1440×900 |
|---|---|---|
| Back to study | H1 y=584 px, height 79 px; image stage y=18 px | H1 y=47 px, height 90 px; image stage y=24 px |
| Forward to maker | H1 y=531 px, height 39 px | H1 y=47 px, height 45 px |

This directly closes the prior failure, where Back focused a study title entirely above the viewport. The longer branch also passes: the final painting's three-line mobile title is wholly visible at y=561–679 px, and Neo-Impressionism at y=531–570 px. All measured page widths remained 390 or 1440 px without horizontal page overflow.

## First-load distinction

The initial root visit, fresh copied-URL visits, and reloads preserve the introductory layout at scroll=0 with normal BODY focus. They do not automatically jump to the object. Consequently, on mobile the current title is below the first viewport on a fresh visit. This preserved first-load convention is distinct from the fixed history defect, where the application had focused a heading that remained off-screen. The copied route's identity and complete sequence restore correctly.

## External comparison and limits

The same checked bars apply: Google Arts & Culture X Degrees of Separation for intelligible continuity and Rijksmuseum Collection Online for coherent object exploration. Their primary pages and the actual X Degrees experiment were opened during round 1; this scoped reinspection reused that comparison.

- https://artsandculture.google.com/experiment/x-degrees-of-separation/tgHqISGUjQHkGQ?hl=en
- https://artsexperiments.withgoogle.com/xdegrees/
- https://www.rijksmuseum.nl/en/about-collection-online
- https://iiif.io/api/presentation/3.0/

X Degrees keeps works visibly present along its chain. The corrected demo now meets the relevant bounded property through its own single-object convention: the visitor can identify the arriving record, see its image or explicit non-image state, and retrace the same sourced route. The evidence clarity inspected in round 1 supports that bounded assessment; the interfaces and relationship semantics are not claimed to be identical.

The actual Rijksmuseum Comparator interface was not operated. Its primary page's published capability was reviewed, so no full interaction-benchmark claim is made. The two-object detail comparator remains absent and open. The AIC image remains unavailable in this environment; its previously verified source-host 403 is separate from eligibility and comparator capability. Actual Met imagery loaded in this round.

No new rights-policy, disputed-claim, stale-route, or metadata-only-fixture review was performed. Those capabilities should not be inferred from this focused pass. No PM stop decision for the comparator is recorded by the critic.

## Classification and evidence handoff

| Domain | Round-3 classification |
|---|---|
| Explorer | Bounded M0 pass for the sourced route, branch/share restoration, and visible history-arrival task. Prior arrival gap closed. |
| Demo | Bounded M0 integration pass for the same object exploration task and consistent arrival convention. |
| Media | Full comparator gap remains open; native single-image enlargement is not the completed comparator. |

Durable ordinary viewport proof PNGs:

- `/tmp/artsy-critic-experience/round3/mobile-history-back.png`
- `/tmp/artsy-critic-experience/round3/desktop-history-back.png`
- `/tmp/artsy-critic-experience/round3/mobile-branch-back.png`
- `/tmp/artsy-critic-experience/round3/desktop-direction-forward.png`
- `/tmp/artsy-critic-experience/round3/mobile-bottom-starter.png`

Full measurements and state comparisons: `/tmp/artsy-critic-experience/round3/observations.json`. Additional first-load, copied-URL, reload, and history screenshots are in that directory. This report is `/tmp/artsy-critic-experience-round3.md`.

The browser was closed after inspection. Repository and corpus were not modified.
