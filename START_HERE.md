# Artsy: follow a thread through art

This branch establishes an evidence-first graph programme beside the existing frontend. It includes working TypeScript code and a static exploration harness—not just planning documents.

## Run the prototype

Node 22+ and TypeScript 5.8.3 are required. On a networked machine run `pnpm install`, then:

```sh
pnpm check
pnpm test
pnpm test:architecture
pnpm build
python3 -m http.server 4173 --directory sites/demo/out
```

Open http://localhost:4173. npm runs the same root scripts. This session used a preinstalled TypeScript compiler; a networked PM bootstrap must generate and verify the root pnpm lockfile. The old frontend lockfile and runtime are unchanged.

Search an artist/subject/place, follow a named relationship, expand its evidence, go back along the thread, include or exclude probable links and collection connections, or ask for a bounded path to another node. The share URL retains the exact assertion sequence and data revision. No account is required. JSON trail export is available. Images are remote and have a graceful offline fallback.

The six-hop fixture runs from the Met's Saint Jerome through Botticelli, Fra Filippo Lippi, the Angelico/Lippi Adoration, its subject and Botticelli's Washington Adoration to its **probable** creation in Rome. Every edge has an institutional source and a locator. It is a selected walk, not a claim of six steps of influence.

## Read in order

`specs/00_engine.md`: product contract, architecture, explicit scope and PM rulings. `specs/01_sources.md` and `data/sources.json`: provider research and current integration caveats. `specs/02_coverage.md`: global coverage programme and gaps. `packages/*/SPEC.md`: ownership, exports, dependencies, verification and external Gauntlet bar. `specs/engine-extraction.md`: non-destructive migration. `.agent/assignments.md`: isolated builder and independent critic briefs.

## What is actually present

27 entities, 41 assertions, six primary source pages and a 19-entry source/reference registry. The evidence parser, bounded graph traversal, dates, media guard, acquisition client and interactive exploration are implemented to different depths; status in each domain SPEC is authoritative. Geography, reconciliation and guided-learning packages expose contracts only. No whole-world data, scalable backend or Next production migration is claimed.

The dataset was manually researched from institutional pages. Met/AIC clients exist, but this environment could not capture their live API responses. `npm run compile && node ops/import.mjs met 435728` performs bounded acquisition into `.cache/ingest` in a networked environment; it never publishes to the canonical graph. External search results are not an import fixture.

`reviews/2026-10-28.md` records actual verification and limitations. No independent subagents or critics ran in this session, and no Gauntlet has been marked passed. Build artifacts are generated, not committed. The review branch does not replace or deploy main.
