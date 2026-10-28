# Specification map

Start with [`00_engine.md`](00_engine.md), then [`implementation-status.md`](implementation-status.md). The latter separates what exists from the target; research is not an implementation claim.

| Decision or task | Authoritative location |
|---|---|
| Product semantics, dependencies and canonical ownership | `specs/00_engine.md` |
| Domain write gate and work cycle | `.agent/workflows/lop.md` |
| Independent artifact judgment | `.agent/workflows/gauntlet.md` |
| Types, normalization and evidence integrity | `packages/core/SPEC.md` |
| Source acquisition, replay and reconciliation | `packages/ingest/SPEC.md` |
| Relationships, query, path and saved state | `packages/graph/SPEC.md` |
| Image eligibility, credit and viewing | `packages/media/SPEC.md` |
| Search, traversal, timeline and comparison interaction | `packages/explorer/SPEC.md` |
| Guided questions and contextual learning | `packages/learning/SPEC.md` (planned) |
| Integration fixture | `specs/sites/demo.md` |
| Public atlas | `specs/sites/atlas.md` (planned) |
| Primary source research | `specs/research/sources.md` and `data/sources/registry.json` |
| Global coverage and expansion | `specs/research/coverage.md` |
| Semantic research and UX references | `specs/research/relationship-model.md`, `specs/research/experience-bars.md` |
| Implementable waves and handoffs | `specs/engine-plan.md` |
| Independent findings and PM stops | `specs/reviews/` |

The prior `frontend/specs/` and `docs/product/` describe the earlier editorial product. They are not competing authorities for the new engine. No old code is silently treated as meeting these contracts.
