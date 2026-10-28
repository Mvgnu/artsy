# Gauntlet round 1 — explorer, media, demo

**Verdict: retain one gap in each domain. Explorer and demo share the same navigation-orientation defect. Media remains below its full external bar because native enlargement is not a two-work detail comparator.**

## Artifact and review boundary

- **Artifact:** actual static export at `http://127.0.0.1:4173/`, served from `sites/demo/out/`.
- **Dataset:** `m0-2026-10-28.2`.
- **Export identity:** `sites/demo/out/index.html` SHA-256: `bce468664ea41ca3f2747879cc9d62d957cc5252007e65fc290b55e9888c48d0`.
- **Browser:** Playwright 1.56.1, Chromium; **1440×900** and **390×844**.
- **TLS:** `ignoreHTTPSErrors: true` was used only in the test browser, as authorized.
- **Independence:** inspected the live artifact before implementation code; did not read implementation status or prior reviews; no repository/data changes.

## Reference checks

**Explorer reference opened successfully:** [Google Arts & Culture’s primary description](https://artsandculture.google.com/experiment/x-degrees-of-separation/tgHqISGUjQHkGQ?hl=en) and the [actual X Degrees experiment](https://artsexperiments.withgoogle.com/xdegrees/). The experiment loaded a visible chain from figurative sculpture through vessels, with each work retained in the visual sequence. Screenshot: `/tmp/artsy-critic-experience/reference-xdegrees-route.png`. Its relevant advantage is visible continuity between stops, not its machine-learning relationship semantics.

**Media/demo reference opened successfully:** [Rijksmuseum About Collection Online](https://www.rijksmuseum.nl/en/about-collection-online), through both web retrieval and the browser. Its primary description explicitly presents side-by-side artwork comparison and inspection of small details. I also opened [IIIF Presentation 3.0](https://iiif.io/api/presentation/3.0/), including the rights/required-statement guidance. **I did not operate the actual Rijksmuseum Comparator interface**, so this is a comparison against the named primary page’s observable capability description, not a complete interaction benchmark.

## Domain verdicts

| Domain | Verdict | One largest remaining gap |
|---|---|---|
| **Explorer** | **gap** | Navigation changes the current object without reliably bringing that object into view. |
| **Media** | **gap at full bar; bounded M0 capabilities demonstrated** | There is no two-work detail comparator; the single-image dialog cannot complete the Seurat comparison task. |
| **Demo** | **gap** | The whole visit inherits the orientation failure, most clearly when a bottom starter opens a new thread while leaving the visitor at the footer. No separate site-specific defect is asserted. |

### Explorer — new stops are not reliably visible

**Reproduction at 390×844:**

1. Open the initial study.
2. Scroll to “study for” and follow the Chicago painting.
3. Follow “made by” to Seurat, then “made” back to the study.

After these pointer hops, the current H1 repeatedly landed at **y = −16 px**; its first line was clipped, and the artwork was above the viewport. After the final-painting-to-maker hop, only the lower part of the one-line “Georges Seurat” title remained visible.

On desktop, after opening study evidence and then following the final painting/maker, the current H1 was at approximately **y = −89 px**, completely above the viewport. Keyboard focus did move to the H1 after navigation settled. Focus movement alone did not ensure visual orientation.

**Evidence:**

- `/tmp/artsy-critic-experience/mobile-after-hop.png`
- `/tmp/artsy-critic-experience/mobile-after-maker-hop.png`
- `/tmp/artsy-critic-experience/mobile-after-maker-to-work.png`
- `/tmp/artsy-critic-experience/desktop-final.png`

**Why this fails the bar:** the route and its evidence remain intelligible, but the visitor can lose the current work at the moment of arrival. The reference keeps the works visibly present along its chain.

**Suggested correction:** establish one arrival behavior for hops, branches, search results, and starters that brings the new object’s identity and useful image context into view, with appropriate keyboard focus. Verify after scrolling deeply, not only from the top of the page.

### Media — the full comparison task is absent

The native dialog opens a single real image, retains its credit, provides an original-image link, and closes with Escape back to “Look closer.” That is a useful M0 capability. It does not provide a second independently identified artwork, per-object detail controls, or a way to inspect study and final together. The dialog tells the visitor to use browser zoom.

The Met images actually loaded: the study source was **1959×1332**, and the seated Buddha source was **2000×2000**. The loaded mobile dialogue is documented in:

- `/tmp/artsy-critic-experience/mobile-native-enlargement-loaded.png`

The AIC image displayed the explicit unavailable-image state in this environment. The PM independently verified an **HTTP 403** from the same host with trusted HTTPS. I therefore treat this as a source-host limitation, **not evidence that the eligibility policy incorrectly rejected the image**. It also means I could not judge the final painting’s actual brushwork here.

**M0 evidence, kept separate from the full-bar judgment:**

- Actual `canDisplay` execution allowed all six recorded assets.
- Restricted status, unknown status, unsupported CC-BY license, `display: false`, and absent rights evidence were denied.
- `cache: false` independently remained display-allowed.
- Main views retained separate image credits and rights links.
- Blocking every image request before page load produced explicit fallbacks, while title, evidence, and relationship traversal remained usable.

**Suggested next full-bar work:** implement the explicitly deferred two-object comparison surface, retaining each object’s own date, attribution, credit, rights access, and independent detail control. Do not relabel native enlargement as that completed capability.

### Demo — the bottom starter appears not to navigate

This is the strongest whole-visit manifestation of the explorer gap.

**Reproduction at 390×844:**

1. Follow the Seurat route or simply scroll to “Pull another thread.”
2. Click **“A subject that travels.”**
3. Observe the current viewport immediately after the new state settles.

The URL and H1 changed to **Standing Buddha Offering Protection**, but the screen still showed the bottom relationship, starter cards, and footer. The new H1 was **854 px above the viewport**. There was no visible arrival at the new sculpture.

**Evidence:**

- `/tmp/artsy-critic-experience/mobile-buddha-start.png`

This makes the interaction appear ineffective unless the visitor notices the URL or scrolls upward. It is particularly damaging to the demo’s intended transition from the Seurat thread to the shared-subject thread.

**Suggested correction:** apply the same visible arrival behavior to a fresh starter as to a connection. This is the same underlying issue as the explorer finding; I am not adding a second independent integration defect.

## What worked in the actual visit

I completed this **six-stop, five-hop route across three predicates**:

`met:437658` → `artic:27992` → `person:seurat` → `met:437658` → `concept:canvas` → `artic:27992`

It used `study_for`, `made_by`, and `made_of`, including reverse traversal and a repeated object. The copied URL reproduced the complete node/claim/direction sequence. Reload and a fresh tab restored the same sixth stop. Branching at stop 2 into Neo-Impressionism worked; after allowing history navigation to settle, Back restored the former six-stop route and Forward restored the shortened branch point.

The evidence was specific and useful:

- Study-to-final evidence named the exact subject, relation, and object; identified the Met overview/audio passages and the AIC record fields; and displayed retrieval dates and metadata terms.
- Maker evidence included accepted attribution and the source-specific identity reconciliation.
- The final painting preserved **“1884–86, border added 1888–89”**, with the border event also independently evidenced.
- The shared-subject route went from Standing Buddha through **Abhaya mudra** to Seated Buddha using **“depicts” / “depicted in.”**
- The standing Buddha evidence explicitly explained that the missing right hand makes the gesture a **curatorial reconstruction**, rather than visible intact anatomy.

Keyboard-only traversal reached study → final → maker → study. The dialog’s close control had a visible focus ring, Escape closed it, and focus returned to its opener. The tested normal, evidence, and blocked-image states had **390 px page width with no horizontal overflow**.

## Limits and evidence handoff

This is **not a full production pass**. I did not inspect an actual live metadata-only artwork, a disputed-claim fixture, or stale/invalid route specimens in this round. Those should not be inferred from the successful blocked-image and normal-route checks.

Screenshots and a machine-readable observation record are under:

`/tmp/artsy-critic-experience/`

The principal record is `/tmp/artsy-critic-experience/observations.json`. The browser was closed after inspection. **No PM stop decision is recorded by this critic; any decision to retain the deferred comparator gap remains a PM decision.**
