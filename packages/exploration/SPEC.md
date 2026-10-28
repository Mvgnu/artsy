---
name: exploration
description: Choose a direction without losing the thread
status: implemented-partial
paths:
  owned:
  - packages/exploration/src/
  tests:
  - packages/exploration/test/
exports:
- mountExplorer
- ExplorerConfig
consumes:
- knowledge
- graph
- media
verification:
  check: pnpm --filter @artsy/exploration check
  test: python ops/browser-smoke.py
  build: pnpm build
  architecture: pnpm test:architecture
bar:
  reference: National Gallery of Art object page + Wikidata evidence presentation
  property: On a phone and by keyboard, can a visitor choose an intelligible next
    connection and recover the route and evidence?
---

# Choose a direction without losing the thread

Own the reusable exploration interface; never embed an artwork ID or institution-specific copy. Show relationships before generic related-content cards. Title, type, source and uncertainty must remain legible. Search admits alternate labels. Each next-hop control is a real button; each source is a real link. No canvas-only controls, hover-only proof, drag-only navigation or surprise automatic movement.

Acceptance: six-hop walk; back/forward; branching from an earlier trail item; shared URL survives reload with filters; accessible invalid-link error; competing dates remain visible; no horizontal overflow at 390px; image failure fallback. Search hits start a new thread rather than pretending the jump was an evidenced edge. Path results reveal every claim before adoption.

Critic artifact: real served export at 390x844 and 1440x900, keyboard interaction and source drawer; compare the identified properties, not the screenshot styling. Biggest gap: no independent critic has evaluated educational clarity, and graph/map/timeline/compare lenses remain unbuilt.

## Write gate and review

All `contract.ts`, manifests, lockfiles, root configuration, `.agent/`, `specs/00_engine.md` and architecture tests are PM-owned even if nested in owned paths. The domain SPEC may update exports/consumes/verification, but a boundary or contract change requires a PM ruling. Read both `.agent/workflows/lop.md` and `.agent/workflows/gauntlet.md`. A critic gets the goal, this bar and the built artifact—not the builder report. One largest gap per round; critic never edits implementation. End with changed paths, commands/results, disagreements and remaining defects.
