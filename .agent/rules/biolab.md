---
trigger: always_on
---

# Artsy rules entry point

The former Biolab-specific rules are superseded by the user's art-atlas direction.
Read `AGENTS.md`, `specs/00_engine.md`, `.agent/workflows/lop.md` and `.agent/workflows/gauntlet.md`.

This application has no Prisma database at the foundation milestone. Canonical runtime schemas and inferred types live in `packages/core/src/contract.ts`; do not invent a database dependency or a parallel type system.

The PM controls contracts and workspace structure. Builders have disjoint spec-owned paths. Critics inspect actual artifacts read-only. Record incomplete capabilities in the implementation status and domain spec, never imply that scaffolding is a product pass.
