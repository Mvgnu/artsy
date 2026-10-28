---
name: reconciliation
description: Reconcile identity without destroying difference
status: contract-only
paths:
  owned:
  - packages/reconciliation/src/
  tests:
  - packages/reconciliation/test/
exports:
- IdentityKey
- ReconciliationProposal
- MergeDecision
consumes:
- knowledge
- sources
verification:
  check: pnpm --filter @artsy/reconciliation check
  test: 'BLOCKED: no implementation or executable domain test yet'
  build: pnpm build
  architecture: pnpm test:architecture
bar:
  reference: OpenRefine reconciliation workflow + Getty ULAN identifiers
  property: Can a reviewer reject a plausible false match and undo a merge without
    losing any original assertions?
---

# Reconcile identity without destroying difference

Own identity candidate scoring and review queues. Exact authority IDs may propose matches only after namespace/type checks. Names, titles, date overlap and image similarity do not authorize merges. Distinguish replicas, casts, prints, editions, parts and physical instances. Anonymous artist records must not all merge into a global Unknown Artist.

Acceptance when implemented: Filippo/Filippino rejection; two Adoration paintings kept distinct; a bilingual artist alias correctly linked by evidence; workshop/master separation; source-ID collision quarantine; reversible merge/split with alias redirects. Keep native IDs and every incoming assertion provenance.

Critic artifact: actual candidate diff/review queue, decision log and replayed split. No UI exists in M0; critic round is blocked. Biggest gap: reviewable, reversible canonicalization is not implemented.

## Write gate and review

All `contract.ts`, manifests, lockfiles, root configuration, `.agent/`, `specs/00_engine.md` and architecture tests are PM-owned even if nested in owned paths. The domain SPEC may update exports/consumes/verification, but a boundary or contract change requires a PM ruling. Read both `.agent/workflows/lop.md` and `.agent/workflows/gauntlet.md`. A critic gets the goal, this bar and the built artifact—not the builder report. One largest gap per round; critic never edits implementation. End with changed paths, commands/results, disagreements and remaining defects.
