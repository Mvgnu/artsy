---
name: graph
description: Follow and explain every hop
status: implemented
paths:
  owned:
  - packages/graph/src/
  tests:
  - packages/graph/test/
exports:
- neighbors
- findPath
- parseTrail
- validateTrail
- Trail
- PathResult
consumes:
- knowledge
verification:
  check: pnpm --filter @artsy/graph check
  test: pnpm --filter @artsy/graph test
  build: pnpm build
  architecture: pnpm test:architecture
bar:
  reference: Wikidata referenced statements + Linked Art relationships
  property: Can someone audit every hop, traverse it backwards and tell a missing
    path from a search limit?
---

# Follow and explain every hop

Own deterministic adjacency, filtered traversal, bounded path search and versioned trail replay. Every step has the original claim ID and traversal orientation. Default queries exclude unreviewed/retracted/disputed and qualified assertions. Probable/possible inclusion is explicit. BFS finds a shortest graph route, not a historically meaningful explanation by itself. Prevent institutional superhubs from overwhelming future recommendations.

Acceptance: six-hop golden trail; inverse labels; candidate exclusion; qualified-origin opt-in; deterministic ordering; no-path versus hop/visit limit; stale revision and withdrawn-step rejection. The demo has a separate collection-link toggle so a visitor can distinguish an institutional bridge from historical transmission.

Critic artifact: served explorer and exported trail JSON with the primary sources alongside it. Compare proof readability to referenced Wikidata statements, not its graph aesthetics. Largest gap: scale, diversity-aware next-hop ranking and semantic path costs are future work; do not call BFS educational relevance.

## Write gate and review

All `contract.ts`, manifests, lockfiles, root configuration, `.agent/`, `specs/00_engine.md` and architecture tests are PM-owned even if nested in owned paths. The domain SPEC may update exports/consumes/verification, but a boundary or contract change requires a PM ruling. Read both `.agent/workflows/lop.md` and `.agent/workflows/gauntlet.md`. A critic gets the goal, this bar and the built artifact—not the builder report. One largest gap per round; critic never edits implementation. End with changed paths, commands/results, disagreements and remaining defects.
