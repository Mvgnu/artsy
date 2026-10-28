# Artsy — an explorable atlas of art

Pick a thread and follow it through artworks, makers, periods, subjects, patrons, materials and places. The relationship and its evidence are the product—not a pile of generated biography pages.

**Start with [START_HERE.md](START_HERE.md).** It contains run commands, the working seed, scope limits and the agent handoff.

This branch adds an evidence-first TypeScript engine, a static exploration prototype, researched source registry, and package/site-scoped Lop + Gauntlet specifications. The existing `frontend/` and `docs/product/` are preserved as legacy reference; their editorial-page model is not the architecture of the new engine.

Read [the engine contract](specs/00_engine.md), [source research](specs/01_sources.md), [global coverage programme](specs/02_coverage.md) and [verification record](reviews/2026-10-28.md). Domain specifications live in `packages/*/SPEC.md`; independent critic instructions live in `.agent/workflows/gauntlet.md`.

**Status:** implemented foundation and small researched seed. Not an exhaustive art-history catalogue, not independently reviewed, not a production replacement. The prototype is English; multilingual labels are supported by the data model. No claim is made that the legacy German frontend has been rebuilt or tested by these new checks.
