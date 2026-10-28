---
name: chronology
description: Understand overlap without false precision
status: implemented-partial
paths:
  owned:
  - packages/chronology/src/
  tests:
  - packages/chronology/test/
exports:
- overlap
- historicalYear
- Overlap
consumes:
- knowledge
verification:
  check: pnpm --filter @artsy/chronology check
  test: pnpm --filter @artsy/chronology test
  build: pnpm build
  architecture: pnpm test:architecture
bar:
  reference: PeriodO authority-scoped period definitions
  property: Can two legitimate period definitions coexist and can uncertain dates
    remain visibly uncertain?
---

# Understand overlap without false precision

Own interval arithmetic and date formatting, not assigning periods by year. v0.1 supports signed astronomical integer-year bounds and unknowns. Overlap compares envelopes; it is not a historical relationship or proof of contemporaneity. Approximate labels must not receive arbitrary +/- year windows.

Acceptance: BCE boundary, year zero, inclusive endpoint overlap, disjoint open bounds, and genuinely unknown intersections are tested. Production adds EDTF/interval disjunction and multiple calendars only through PM-reviewed contracts and fixtures. Dates of creation, depiction, discovery and acquisition must be separate.

Critic artifact: compiled date fixtures and source statements rendered in the demo, compared with the same ambiguity in PeriodO. There is no timeline UI yet; a timeline Gauntlet is blocked until it exists. Largest gap: there is not yet a regional, multi-definition timeline to inspect.

## Write gate and review

All `contract.ts`, manifests, lockfiles, root configuration, `.agent/`, `specs/00_engine.md` and architecture tests are PM-owned even if nested in owned paths. The domain SPEC may update exports/consumes/verification, but a boundary or contract change requires a PM ruling. Read both `.agent/workflows/lop.md` and `.agent/workflows/gauntlet.md`. A critic gets the goal, this bar and the built artifact—not the builder report. One largest gap per round; critic never edits implementation. End with changed paths, commands/results, disagreements and remaining defects.
