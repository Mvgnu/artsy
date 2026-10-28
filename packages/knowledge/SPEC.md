---
name: knowledge
description: Evidence-first identities and assertions
status: implemented
paths:
  owned:
  - packages/knowledge/src/
  tests:
  - packages/knowledge/test/
exports:
- Atlas
- Claim
- Entity
- parseAtlas
- predicates
consumes: []
verification:
  check: pnpm --filter @artsy/knowledge check
  test: pnpm --filter @artsy/knowledge test
  build: pnpm build
  architecture: pnpm test:architecture
bar:
  reference: Linked Art model + Wikidata statement/reference display
  property: Can a reader distinguish two same-titled objects and two conflicting source
    assertions without a silent merge?
---

# Evidence-first identities and assertions

Own the entity/assertion boundary and predicate type matrix. Dates are literal assertions, not overwritten entity fields. No unreferenced relationships; locators must identify the actual supporting record field or passage. Stable IDs are never recycled. Keep unknown values unknown.

Acceptance: reject duplicate IDs, dangling objects, dangling evidence, unsafe URLs, reversed intervals and illegal predicate types. Preserve both Botticelli birth-date statements and both Lippi identities. Make partial attribution explicit in the next schema amendment rather than pretending a workshop is its master. A source registry entry alone does not establish a claim.

Critic artifact: actual seed loaded in the demo plus the emitted graph JSON. Compare the source drawer with Linked Art's assertion pattern. Ask the critic to recover who said what for a multi-author work and an uncertain date. Largest gap to inspect first: evidence should remain assertion-specific when identity merging is introduced.

## Write gate and review

All `contract.ts`, manifests, lockfiles, root configuration, `.agent/`, `specs/00_engine.md` and architecture tests are PM-owned even if nested in owned paths. The domain SPEC may update exports/consumes/verification, but a boundary or contract change requires a PM ruling. Read both `.agent/workflows/lop.md` and `.agent/workflows/gauntlet.md`. A critic gets the goal, this bar and the built artifact—not the builder report. One largest gap per round; critic never edits implementation. End with changed paths, commands/results, disagreements and remaining defects.
