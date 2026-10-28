---
name: demo
description: "Thin, inspectable integration site for real relationship fixtures and adversarial states"
status: foundation
paths:
  owned:
    - sites/demo/app/
    - sites/demo/public/
  tests:
    - sites/demo/test/
exports:
  - DemoSite
consumes:
  - core.Corpus
  - core.validateCorpus
  - explorer.Explorer
verification:
  check: "pnpm --filter @site/demo check"
  test: "pnpm --filter @site/demo test"
  build: "pnpm --filter @site/demo build"
bar:
  reference: "Rijksmuseum Collection Online integrated object exploration"
  property: "A visitor follows a work into its context and back without encountering different interaction conventions between engine parts."
---

# Demo site

The demo composes engine exports and validates the pinned corpus at build time. It owns site title/configuration and the initial focus; it does not copy graph traversal, rights rules or provider schemas. `next.config.ts`, manifests and root data remain outside the site's write gate.

## M0 artifact and acceptance

`sites/demo/out/index.html` is the plain-static-server artifact. It must render real images where permitted, source display dates and explicit relationship choices. Initial focus is Met 437658; starter choices include the documented shared-gesture route. Counts are derived from the snapshot and clearly identified as a bounded proof.

Open the initial artwork, follow study-for to AIC 27992, inspect its evidence, follow Seurat, retrace, start the Buddha thread, follow the gesture to the other sculpture, copy the walk URL, reload it and use browser back/forward. No live museum API is involved in any step. Remote images may fail; preserve the focus/title/rights/source link with a useful fallback.

Semantic HTML, a single page H1, keyboard-operable controls, visible focus, reduced-motion behavior, and no page overflow at 390px are required. M0 English labels preserve original source text and do not decide the public atlas's final language.

## Gauntlet

Reference: https://www.rijksmuseum.nl/en/about-collection-online . Inspect the actual exported page at 390×844 and 1440×900. Perform the full task above with pointer and keyboard. Judge continuity and coherence, not equal collection size. Record one largest gap. The full comparator, map and multi-region chronology are later engine milestones; their absence is explicit, not a passing implementation of those requirements.

## Onboarding drill

After M2, a fresh engineer copies only this site's thin structure, chooses another snapshot and initial focus, and builds a throwaway site. No edits under `packages/` should be required. Record each needed engine edit. Until that drill runs, reuse is a design supported by boundaries, not an experimentally established quality pass.
