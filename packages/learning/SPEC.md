---
name: learning
description: Turn curiosity into understanding without inventing a narrative
status: contract-only
paths:
  owned:
  - packages/learning/src/
  tests:
  - packages/learning/test/
exports:
- LearningThread
consumes:
- knowledge
- graph
verification:
  check: pnpm --filter @artsy/learning check
  test: 'BLOCKED: no implementation or executable domain test yet'
  build: pnpm build
  architecture: pnpm test:architecture
bar:
  reference: Smarthistory object-led teaching + NGA Art up Close
  property: Can a beginner explain why two works are connected and distinguish evidence
    from interpretation after the thread?
---

# Turn curiosity into understanding without inventing a narrative

Own guided questions, short explanations and optional reflection. Each factual sentence cites claim IDs that resolve to evidence. An educational interpretation must be labelled as interpretation, never stored as a documented influence. Guides can offer off-ramps; free exploration never requires a lesson or quiz. Do not optimize for engagement time or manufacture surprising connections.

Acceptance when implemented: one teacher/workshop thread, one material or technique thread, one non-European regional thread and one comparison across uncertain attributions. Learners can state the connection and uncertainty in their own words. Assess comprehension with a small documented user test; test counts cannot establish learning.

Critic artifact: a guided experience and learner task, compared to a specific accessible Smarthistory or NGA lesson. Smarthistory access failed in this pass, so select a reachable primary reference before judging. Biggest gap: no guided lesson or user comprehension test exists.

## Write gate and review

All `contract.ts`, manifests, lockfiles, root configuration, `.agent/`, `specs/00_engine.md` and architecture tests are PM-owned even if nested in owned paths. The domain SPEC may update exports/consumes/verification, but a boundary or contract change requires a PM ruling. Read both `.agent/workflows/lop.md` and `.agent/workflows/gauntlet.md`. A critic gets the goal, this bar and the built artifact—not the builder report. One largest gap per round; critic never edits implementation. End with changed paths, commands/results, disagreements and remaining defects.
