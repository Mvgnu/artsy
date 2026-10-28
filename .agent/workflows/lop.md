---
description: Package- and site-scoped development with evidence-first Lop boundaries
---

# Lop — Artsy edition

Read `gauntlet.md` too. Lop proves implementation conforms to a spec; it cannot establish that the product is useful or the history sound.

A bubble is one package in `packages/<name>/SPEC.md` or one site in `specs/sites/<id>.md`. Read the spec, its bar, `specs/00_engine.md` and consumed public contracts. `specs/domains.json` is the machine-readable PM ownership/dependency ledger. Work in a separate branch/worktree. Read access to the repo is allowed; write only owned/test paths plus your own SPEC. The PM integrates waves.

## Hard exclusions override ownership

Every `contract.ts`, package manifest, root config and lockfile, `next.config.*`, `.agent/**`, `CLAUDE.md`, `specs/00_engine.md`, `specs/domains.json`, `ops/**`, `test/architecture/**` and governance/review integration files are PM-owned. Generated `.build/`, `out/`, `.next/`, caches and secrets must not be committed. Existing `frontend/` is read-only in this effort. No implicit permission to edit another project exists.

A domain may report a needed contract change but may not cast around it, duplicate a core type or fork another package. Source adapters cannot change canonical data. A critic cannot change implementation. Before a domain merge, PM runs `node ops/scope.mjs DOMAIN BASE_COMMIT` against the actual worktree and reviews deletions/renames as well as additions.

## Cycle

Read spec/contracts/bar. Implement within the bubble. Bring the test with the module. Run the declared check, test, architecture and build commands; blocked commands remain blocked. Update exports/consumes only when approved public surface changes. If the brief or contract is wrong, say so explicitly and ask for a PM ruling in the handoff rather than silently changing intent. Hand the built artifact to an independent critic.

Four-part closeout: changed paths; exact commands and observed results; disagreements; remaining defects. Never report an unrun test or a future command as passed. Report whether sources were actually opened and whether API captures were real or mocks. End a wave with the Gauntlet and a whole-site smoothing review.

## Anti-patterns

No entity IDs or site prose in reusable packages. No names as identity keys. No claim without evidence. No approximate date coerced into an exact day. No source summary converted into influence. No blanket image permission. No copied type shapes or unsafe JSON casts. No inaccessible network canvas as the only navigation. No bulk data acquisition disguised as coverage. No builder judging its own work. Green gates are admission to judgement, not the end.
