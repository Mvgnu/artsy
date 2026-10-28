---
name: geography
description: Locate the right historical relationship
status: contract-only
paths:
  owned:
  - packages/geography/src/
  tests:
  - packages/geography/test/
exports:
- LocatedGeometry
consumes:
- knowledge
verification:
  check: pnpm --filter @artsy/geography check
  test: 'BLOCKED: no implementation or executable domain test yet'
  build: pnpm build
  architecture: pnpm test:architecture
bar:
  reference: Getty TGN records + Linked Art location/movement model
  property: Can a visitor distinguish made-in, depicted-in, found-at and held-at without
    a misleading modern border?
---

# Locate the right historical relationship

Own geometry normalization and historical-place presentation. The same location string may refer to a city, region, historic polity or building. No geocoding a nation to its capital as object coordinates. Coordinates carry precision and evidence; historical membership is dated. Sensitive findspots must be coarsened or omitted after review.

Acceptance when implemented: creation versus depiction fixtures; historical names; disputed borders; missing coordinates; coarse region; a time-scoped custody move; keyboard equivalent for every map interaction. A map must not be the only route to an entity.

Critic artifact: a served place comparison view and emitted role-specific geometry. Until built, review status is blocked, not passed. Biggest current gap: no geographic view or role-aware mapping runtime exists.

## Write gate and review

All `contract.ts`, manifests, lockfiles, root configuration, `.agent/`, `specs/00_engine.md` and architecture tests are PM-owned even if nested in owned paths. The domain SPEC may update exports/consumes/verification, but a boundary or contract change requires a PM ruling. Read both `.agent/workflows/lop.md` and `.agent/workflows/gauntlet.md`. A critic gets the goal, this bar and the built artifact—not the builder report. One largest gap per round; critic never edits implementation. End with changed paths, commands/results, disagreements and remaining defects.
