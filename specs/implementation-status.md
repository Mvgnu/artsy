# Implementation status — first real threads

Reviewed 2026-10-28. This is the delivery record for the new root workspace, separate from the earlier `frontend/` product.

## Delivery boundary

**M0 is a working relationship prototype and a specification foundation.** It is not worldwide art coverage or the completed public atlas. Five source packages and one static demo execute today. The learning package and public atlas have scoped specs but no claimed runtime.

The demo supports artwork/person/period/place/material/concept focus, typed forward and inverse connections, exact claim evidence, search, branching from an earlier stop, a larger image, and a complete dataset-pinned walk URL. A failed image preserves the record and traversal. Static data is validated during the build; the browser does not call museum metadata APIs.

The two decisive threads are:

1. Met Seurat study → **study for** → AIC finished painting → **made by** → Seurat, with inverse traversal, source-specific identity evidence, and the painting's later border date preserved.
2. Gandharan seated Buddha → **depicts** → abhaya mudra ← **depicts** ← Gupta standing Buddha. Each hop has its own source. The standing figure's missing hand and curatorial reconstruction are explicit. This route asserts a common depicted gesture, not influence between the two sculptures.

Hokusai's *Great Wave* and the Egyptian hippopotamus William add a physical print impression, source/index date disagreement, BCE dating, an unnamed maker, and a findspot distinct from production and collection.

## Snapshot and acquisition

| Measure | Actual value |
|---|---|
| Dataset | `m0-2026-10-28.2` |
| Canonical schema | `0.1` |
| Artworks | 6 physical objects |
| Entities | 27 |
| Claims | 46: 34 entity relationships and 12 scalar claims |
| Evidence records | 52 |
| Image records | 6, each with separate rights evidence |
| Pinned API responses | 8: five Met objects, one AIC object, one AIC artist, one Wikidata entity |
| Source registry | 12 researched providers/authorities; three have live record probes in this seed |

Corpus SHA-256: `1dd6f42bc8c078dd8875e4b69fdc51c6e5ce8185330eb957ddd599d362cd3c31`.

Final reviewed export `sites/demo/out/index.html` SHA-256: `8b96380e8dfa27c5b9ee61b6aa591a0a0fe2172e771e80be49a331b9d9692161`. Build IDs can change on a new export; the corpus hash is the stable data identity.

`data/raw/manifest.json` records request URLs, timestamps, HTTP status and exact byte hashes. `pnpm fixtures:build` verifies those receipts and deterministically replays the pinned records and reviewed context mappings into `data/seed/`. It is **not** a production crawler, a generic museum adapter, or automated extraction of all interpretive claims. Short authored mappings preserve source URLs and passage/field locators. Source documentation research is labeled separately from successful probes and implemented adapters.

## Technical verification

The following commands were actually run in the foundation checkout. The final browser run uses the static export, not Next's development server.

| Gate | Result |
|---|---|
| `pnpm install --frozen-lockfile` | Passed for the root workspace |
| `pnpm fixtures:build` | Passed; byte-identical replay also independently checked with network disabled |
| `pnpm spec:check` | Passed: eight domain specs, including explicit planned domains |
| `pnpm check` | Passed: five implemented packages and demo |
| `pnpm test` | Passed: 44 tests in five files |
| `pnpm test:architecture` | Passed: four architecture checks |
| `pnpm build` | Passed: Next.js static export in `sites/demo/out/` |
| `ARTSY_TEST_IGNORE_HTTPS_ERRORS=1 pnpm test:browser` | Passed: 1440×900 and 390×844, plus every image request blocked before hydration; zero client runtime errors |

Browser assertions cover a real loaded image, horizontal overflow, study/final/maker traversal, exact evidence links, visible arrival after a hop or bottom starter, visible Back/Forward arrival, reload, reopening a saved URL, the gesture bridge, search/no-match, a malformed walk, and the keyboard-operated image dialog. Independent critics exercised longer routes, branching, additional invalid/stale states, and source comparison.

The local browser used a test-only HTTPS override because this execution environment intercepts external HTTPS. No application TLS or request policy was weakened; CI does not enable the override. The AIC image host returned HTTP 403 in a separate trusted-HTTPS probe. Metadata and traversal remain usable through the image-unavailable state. That observation does not establish an outage for other clients.

The new GitHub workflow repeats fixture replay, technical gates and browser checks, then uploads the static export and browser evidence. Its first clean GitHub run passed installation, replay and every `pnpm verify` gate, but browser installation stopped because `ubuntu-latest` selected Ubuntu 26.04, unsupported by the pinned Playwright 1.56.1. The workflow now pins Ubuntu 24.04 and retains the same browser assertions. The PR's latest workflow result is the authority for remote CI status; local passes alone do not establish it. The legacy frontend's separate tests/build were not part of this foundation verification.

## Independent Gauntlet results

Three fresh critics were spawned without builder conversation history. They inspected real data/runtime output or the served export and opened the named external references. Reports preserve the scope of each judgment.

| Domain | Current judgment | Evidence / retained gap |
|---|---|---|
| core | **Bounded M0 pass, round 2** | Source dates and provenance preserved without treating provider index bounds as occurrence claims; [report](reviews/m0-core-ingest-round2.md) |
| ingest | **Bounded M0 pass, round 2** | Actual raw hashes, offline replay, evidence locators and source distinctions inspected; same report. Production ingestion remains unimplemented. |
| graph | **Bounded M0 pass** | Actual queries, reciprocal claim/evidence identity, full seed neighborhoods, portable routes and conservative date comparison; [report](reviews/m0-graph-round1.md) |
| media | **Gap retained; PM stop at M0** | Native enlargement and rights/failure behavior demonstrated; no two-work detail comparator. See stop decision below. |
| explorer | **Bounded M0 navigation pass, round 3** | Hops, starters and branched Back/Forward retain visible focus and exact route state; [report](reviews/m0-experience-round3.md) |
| demo | **Bounded M0 integration pass, round 3** | Same revised artifact inspected at both sizes, including copied URLs, first load and reload; full atlas capabilities remain deferred. |
| learning | **Not run** | Planned domain; no built guided-walk artifact |
| atlas | **Not run** | Planned public site; no built artifact |

### Changes caused by judgment

The first data review found that the Great Wave's provider index range could falsely imply historical overlap. PM amended the time contract with `index-window`; ingest marked the affected records, graph comparison now returns `unknown`, and the dataset version advanced. The critic reran the transformation and temporal queries before granting a bounded pass. See [decision 0002](decisions/0002-index-windows.md).

The first experience review found that a connection could change the focused record while leaving its image/title above the viewport, especially after using a starter near the footer. The second review verified direct arrivals but found the same defect on browser Back. Explicit navigation and browser history now share a visible arrival convention after the walk commits; initial hydration/reload remain separate. The third review verified simple and branched Back/Forward, the complete six-stop route, copied URL/new tab/reload, and normal first-load focus before granting the bounded pass. See [decision 0003](decisions/0003-navigation-arrival.md) and the independent experience reports.

### PM stop — media's full bar remains open

For this foundation delivery, PM stops media work with **one retained gap: two-work detail comparison**. The named Rijksmuseum/IIIF bar is unchanged. The native single-image dialog is not its substitute and does not receive a full-bar pass. This stop keeps M0 focused on auditable relationships and leaves comparison as a concrete M2 cycle with separate media/explorer ownership.

Reopen the domain when the demo can compare two independently identified artworks at useful scale, preserve each object's date/attribution/credit/rights, and continue the walk through either image's failure. A fresh critic must operate the real comparator and its external reference before a full pass. The current reference review opened the Rijksmuseum's primary capability page but did not operate its Comparator UI; that limit is retained in the report.

## Remaining product work

- Production imports: current paginated interfaces, retry/checkpoint/resume, source refresh, rejection/reconciliation reports, and rights withdrawal.
- Evidence-aware global coverage: Getty/PeriodO authority enrichment, regional sources, multilingual identities and overlapping period schemes. A European sequence is not the global ontology.
- Larger graph: pagination, ranking and shard/query budgets, retaining access to every recorded neighbor.
- Exploration: regional timeline lanes, role-specific geography, two-work detail comparison and durable branching. Current links restore the walk, not transient search/filter/evidence UI state.
- Learning: cited guided routes and context built from existing claims, without inventing asserted relationships.
- Public atlas: coverage/source pages, integration smoothing, and the second-site onboarding drill. That drill has not run; reuse is currently supported by architecture boundaries rather than proven by a second product.

The package/site specs and [engine plan](engine-plan.md) assign these tasks and their external bars. No merge, public deployment, scheduled crawl or complete world-art survey is claimed.

## Process qualification

Parallel research and scoped building used three delegated agents; three different fresh agents performed the data, graph and experience reviews. The PM owned contracts, workspace, integration and final decisions. The initial bootstrap used disjoint paths in one integration checkout; it did not execute separate worktree merges. [Decision 0001](decisions/0001-foundation.md) records this exception. Subsequent Lop cycles require their own branch/worktree and scope gate.
