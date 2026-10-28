# Gauntlet round 2 — explorer/demo arrival behavior

## Verdict

**The original direct-arrival defect is corrected. Explorer and demo still receive `gap` because browser Back can leave the focused current heading outside the viewport.** This is the one remaining navigation gap from this scoped inspection. The full media-comparator gap remains distinct and unchanged; this round does not grant it a pass.

## Artifact and inspection boundary

- Actual static export: `http://127.0.0.1:4173/`, served from `sites/demo/out/`.
- Exported `index.html` SHA-256, independently checked: `72281a6e98148122089d4104455a2b1718d813727790ff160b36c96d2588cfd8`.
- Dataset: `m0-2026-10-28.2`.
- Dataset SHA-256, independently checked: `1dd6f42bc8c078dd8875e4b69fdc51c6e5ce8185330eb957ddd599d362cd3c31`.
- Playwright 1.56.1, Chromium, 390×844 and 1440×900.
- `ignoreHTTPSErrors: true` was confined to the test browser.
- Read-only review; no repository/data edits, builder reports, or implementation-status reads.

The external bars remain Google Arts & Culture X Degrees of Separation for intelligible continuity and Rijksmuseum Collection Online for integrated object exploration. Their primary pages and the actual X Degrees experiment were opened in round 1. This scoped round reused that checked comparison rather than repeating external-reference retrieval. The actual Rijksmuseum Comparator interface was not operated in either round; the full-comparison capability is therefore assessed against the named primary page's published property, not a complete interaction benchmark.

References:

- https://artsandculture.google.com/experiment/x-degrees-of-separation/tgHqISGUjQHkGQ?hl=en
- https://artsexperiments.withgoogle.com/xdegrees/
- https://www.rijksmuseum.nl/en/about-collection-online
- https://iiif.io/api/presentation/3.0/

## Corrected behavior observed

The following now arrive with the complete current H1 and object area visible, with focus on `h1#artsy-entity-heading`, in both viewports:

1. Open the study's exact relation evidence, then follow `study for` to the final painting.
2. Follow `made by` to Seurat and `made` back to the study.
3. Follow the lower Canvas connection, then its inverse to the final painting.
4. Select the earlier stop 2, then take the alternate Neo-Impressionism direction.
5. Scroll to the bottom and start “A subject that travels.”
6. Search for Hippopotamus, use Tab to reach its result, and Enter to start the new trail.

The viewport placement is consistent: on mobile the object stage begins at approximately y=18 px and the H1 begins between y=531 and y=584 px, depending on the object. The longest tested final-painting title is wholly visible between y=561 and y=679 px. On desktop, the stage begins at y=24 px and the H1 at y=47 px. The Met study, standing Buddha, and Hippopotamus images loaded visibly; the final painting retained its explicit AIC image-unavailable fallback. The measured page widths remained 390 and 1440 px respectively.

The previous bottom-starter failure is specifically resolved. The standing Buddha now arrives with its full image, credit, rights link, title, and date visible, instead of leaving the visitor at the footer.

Representative ordinary viewport PNGs:

- `/tmp/artsy-critic-experience/round2/desktop-final-after-evidence.png`
- `/tmp/artsy-critic-experience/round2/mobile-bottom-starter.png`
- `/tmp/artsy-critic-experience/round2/mobile-study-return.png`
- `/tmp/artsy-critic-experience/round2/mobile-keyboard-search-arrival.png`

## One remaining gap — Back separates visible position from keyboard focus

### Minimal reproduction

At either tested viewport:

1. Load `http://127.0.0.1:4173/` as a fresh visit.
2. Scroll to the lower “Meet the maker” card and follow its `made by Georges Seurat` link.
3. Use browser Back.
4. Allow more than 1.6 seconds for the page and scroll position to settle.

The study is restored correctly, and `document.activeElement` is its H1. The focused heading is nevertheless entirely above the viewport:

| Viewport | H1 top | H1 height | Image/object result |
|---|---:|---:|---|
| 390×844 | −186 px | 79 px | Study image also entirely above the viewport; image box y=−701 to −418 px. |
| 1440×900 | −134 px | 90 px | Sticky image remains visible, but the work title is entirely above the viewport. |

Screenshots after the extended settle wait:

- `/tmp/artsy-critic-experience/round2/mobile-simple-back.png`
- `/tmp/artsy-critic-experience/round2/desktop-simple-back.png`

The branch task shows the same issue more strongly. Final painting → Neo-Impressionism → Back restores the correct final-painting route but places its focused H1 at y=−1021 px on mobile and y=−833 px on desktop. The mobile viewport contains the lower relationship cards with neither the object nor its title visible. Evidence:

- `/tmp/artsy-critic-experience/round2/mobile-branch-back.png`
- `/tmp/artsy-critic-experience/round2/desktop-branch-back.png`

The route data is not lost: a second Back recovered the former six-stop route exactly in both viewports. The defect is the disagreement between the current focused object and the restored visible position. Native history scroll restoration was observed as `auto`; this is context for the observation, not a code-level diagnosis.

### Why retain the gap

Browser history normally restoring the previous scroll position is reasonable. Here the application simultaneously declares the current H1 as keyboard focus, while leaving it off-screen. That inconsistency breaks the chosen arrival convention and the named ability to retrace without losing the current work, especially on mobile. Correct route serialization is necessary but does not settle this visual/focus issue.

**Suggested correction:** coordinate history traversal's scroll restoration and focus behavior with the chosen arrival contract so that the focused current identity remains visibly locatable after Back/Forward. Reinspect the minimal lower-maker-card reproduction; no wider rebuild of navigation is suggested by this round.

## Domain classification

| Domain | Round-2 classification |
|---|---|
| Explorer | `gap`: direct hops, branch selections, starters, and keyboard search arrivals now satisfy the bounded arrival task; browser Back still leaves focused current identity off-screen. |
| Demo | `gap`: same remaining Back/focus inconsistency in the composed visit. No second independent site defect is asserted. |
| Media | Full comparator gap carried forward; not retested as a separate domain round. Corrected navigation and native enlargement do not constitute a two-work detail-comparator pass. |

This is a bounded M0 navigation review, not a production-wide accessibility or collection-coverage claim. The AIC source-host 403 limitation recorded in round 1 remains separate from the comparator gap. No PM stop decision is recorded by this critic.

## Evidence handoff

- Complete round-1 report: `/tmp/artsy-critic-experience-round1.md`.
- Complete round-2 report: `/tmp/artsy-critic-experience-round2.md`.
- Round-2 browser observation record, with URLs, focus, viewport, scroll position, and bounding boxes: `/tmp/artsy-critic-experience/round2/observations.json`.
- Screenshots: `/tmp/artsy-critic-experience/round2/`.

The browser was closed after inspection. Repository and corpus were not modified.
