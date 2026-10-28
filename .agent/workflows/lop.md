---
description: Package- and site-scoped development using Lop bubbles in the Artsy pnpm monorepo
---

# Lop workflow — package- and site-scoped development

Lop ("Loop" in Norwegian) gives each domain a spec and scoped write permissions. An Artsy domain is a source package under `packages/<name>/` or a thin static-export site under `sites/<id>/`. An agent reconstructs its local intent from its spec and read-only context. It does not rewrite the repo's world state.

The engine contract lives at `specs/00_engine.md`; package specs at `packages/<name>/SPEC.md`; site specs at `specs/sites/<id>.md`; work sequencing at `specs/engine-plan.md`.

## Lop is half the process

**Read `gauntlet.md` too.** Lop establishes conformance to a description. Gauntlet compares the real artifact to an external standard using a fresh critic. Green technical gates are entry conditions for judgment, not completion.

## When to use this workflow

Use a bubble for one known package/site task inside its ownership and contracts. Creating/redefining domains, changing contracts, cross-package refactors and PM-owned files are PM work: update the engine/specs first, then split implementation into independent cycles.

## Spec format

```yaml
---
name: graph
description: "Evidence-bearing bidirectional traversal and reproducible walks"
status: foundation
paths:
  owned:
    - packages/graph/src/  # except every contract.ts
  tests:
    - packages/graph/test/
exports:
  - neighbors
  - explain
consumes:
  - core.Corpus
verification:
  check: "pnpm --filter @artsy/graph check"
  test: "pnpm --filter @artsy/graph test"
  build: "pnpm --filter @site/demo build"
bar:
  reference: "Getty AAT hierarchy and associative relationships"
  property: "Explain an edge and follow it either way without changing its evidence."
---
```

`status: planned` means no executable package/site exists yet. Its commands are targets for provisioning and **cannot count as passing**. `foundation` marks an implemented, bounded slice; full acceptance still applies to later release. Every body names inputs/outputs, invariants, adversarial cases, real artifacts and the concrete Gauntlet task.

## Hard write gate

Allowed: files under the current spec's `paths.owned`, its `paths.tests`, and the domain spec itself to update exports/consumes/verification and record gaps.

Forbidden even inside an owned directory:

- Root `package.json`, `pnpm-workspace.yaml`, `pnpm-lock.yaml`, `tsconfig.base.json`, `vitest.config.ts` and shared test/tool configuration.
- Every package/site `package.json`, `next.config.*`, and `contract.ts`.
- `test/architecture/**`, `scripts/**`, `.github/**`, `.agent/**`, `AGENTS.md`, root `README.md`, `specs/00_engine.md`, `specs/engine-plan.md`, PM rulings and review records.
- Another domain's paths; output (`out/`, `.next/`, generated bundles); the legacy `frontend/` unless the PM explicitly assigns a separate legacy task.

Read access: the repository and its references. Do not import from legacy code or neighboring repositories. Root `data/` is not shared mutable space: the ingest spec explicitly owns its raw/source/seed subdirectories. Shared write directories are a structural defect, not a convenient shortcut.

A domain may request a contract change; it may not quietly widen its ownership or weaken the bar. Generated outputs are produced by their commands, never hand-edited to make tests pass.

## Cycle

1. Read the domain spec, its bar, `specs/00_engine.md`, relevant PM rulings and consumed contracts. Identify the real artifact and adversarial state before building.
2. Work in a separate git branch/worktree. The PM supplies the base commit and merges at milestones. Use disjoint write scopes even when two agents need the same read-only source.
3. Implement within the gate. Keep meaningful regression tests with the domain. Validate external JSON at the boundary; import canonical types.
4. Run the spec's check, test and integration build plus `pnpm test:architecture` and `pnpm spec:check`. Run `pnpm scope:check --domain <name> --base <base-sha>` for the bubble's changes. Missing scripts, fixtures or tests are failures, not successful no-ops.
5. Update exports/consumes when the public surface changes; PM approves any contract or ownership change first.
6. Report disagreements plainly. If a contract cannot express the needed truth, stop that affected work and describe the missing capability. Do not fork the type or fake a passing fixture. Continue unaffected scoped work.
7. End with four parts: **changed paths; actual commands/results; disagreements; remaining breakage**. Never claim a check you did not run.
8. Hand the built artifact to a fresh read-only critic using the Gauntlet packet. Builder prose is not part of that packet.

PM integration checks may span domains. A bootstrap that creates package/contract ownership is a PM task, not evidence of a completed independent bubble/worktree cycle. The foundation's execution exceptions are recorded in `specs/decisions/0001-foundation.md`.

## Anti-patterns

| Failure | Required response |
|---|---|
| Write outside a bubble | Split work; ask the PM to change the spec before editing |
| Site identity/data embedded in reusable code | Pass configuration or validated corpus through the public surface |
| Parallel shapes of core facts | Import the lower contract; request the missing capability |
| Module singleton with site-specific state | Pass an instance, slice or factory |
| Unchecked JSON, `any`, unsafe casts | Parse at the boundary and narrow the result |
| Date overlap becomes period/influence | Preserve separate semantics and evidence |
| Title-based object merging | Use source IDs and reviewed identity links |
| Reachable image treated as licensed | Require the asset's explicit rights evidence and capability decision |
| Counts/facts typed into UI prose | Derive them from the pinned corpus |
| No tests / missing domain filtered out | Fail the gate; planned domains stay visibly planned |
| Builder grades itself | Spawn a fresh critic without builder history |
| Twelve critical gaps in one round | Pick the largest independently fixable gap |
