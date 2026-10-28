---
name: ingest
description: "Trace each published fixture claim to a specific provider field or cited passage and reproduce the import from pinned inputs."
status: foundation
paths:
  owned:
    - packages/ingest/src/
    - data/raw/
    - data/seed/
    - data/sources/
    - specs/research/sources.md
    - specs/research/coverage.md
  tests:
    - packages/ingest/test/
exports:
  - buildSeed
  - ImportResult
  - ImportReport
  - serializeCorpus
  - parseMetRecord
  - parseArticRecord
  - metYearToAstronomical
consumes:
  - core.Corpus
  - core.validateCorpus
verification:
  check: "pnpm --filter @artsy/ingest check"
  test: "pnpm --filter @artsy/ingest test"
  build: "pnpm --filter @site/demo build"
bar:
  reference: "The Met Collection API and Art Institute of Chicago object records"
  property: "Trace each published fixture claim to a specific provider field or cited passage and reproduce the import from pinned inputs."
---

# Ingest

Read `specs/00_engine.md`, `.agent/workflows/lop.md`, and `.agent/workflows/gauntlet.md`. Every `contract.ts` and package manifest is PM-owned even inside an owned directory. Specs describe the target; current status is recorded in `specs/implementation-status.md`.

M0 implements only the bounded foundation slice; full acceptance and Gauntlet tasks are specified below.

## Outcome and boundaries

A reader can trace a published fact to a specific provider field or a cited curatorial passage. The same pinned inputs produce the same bytes without requesting an upstream service. Ingest owns acquisition/normalization and reports gaps; it does not define new canonical types, grant image rights implicitly, invent historical links, or design the explorer.

All files outside the frontmatter paths are read-only. Every `contract.ts` and manifest remains PM-owned even under an owned directory. Shared contracts are imported from core; this package's Zod schemas describe external provider payloads, not alternate core entities.

## Current M0 implementation

- Five Met objects, one AIC artwork, one AIC artist and one Wikidata entity are genuine HTTP-200 snapshots. Receipts retain exact request URLs, retrieval times and SHA-256 hashes.
- `buildSeed(root?) -> Promise<ImportResult>` verifies snapshot hashes, validates provider payloads, combines reviewed context, then calls `core.validateCorpus`. It fails the build on malformed data or unreviewed identities.
- `serializeCorpus(corpus)` is stable two-space JSON with a final newline; rows are sorted by stable IDs. `cli.ts` writes the corpus and import report. No live acquisition occurs during replay or a site build.
- The 27 entities / 46 claims / six image URLs are a bounded demonstration. The generated JSON is an output; change pinned input or the reviewed transformation, then regenerate it.
- Only named, explicitly reconciled makers are joined. Q34013's P6295 statement links AIC artist 40810; its revision/rank/reference count remain visible. Unnamed artists do not become a shared “Anonymous” person.
- Dataset `m0-2026-10-28.2` supersedes `.1` after independent review found that prose-only date caveats were insufficient. The previous version must not silently resolve under the new semantics.
- Met search bounds and display dates remain independent. Great Wave and the two century-worded sculpture dates have machine-readable `index-window` semantics: their numeric endpoints cannot establish historical temporal overlap. Seurat’s explicit 1884 and William’s explicit BCE range retain `occurrence-window` semantics, with circa preserved where supplied. Met's negative historical BCE values are converted to astronomical years; zero is rejected as ambiguous. AIC's later border addition is a separate dated claim.
- Image publication requires the provider's open flag, an image URL and no conflicting rights text. Metadata alone remains publishable when an image is withheld. The media domain applies its independent publication checks.
- Full museum essays are not copied. Artwork description fields subject to a different license are excluded from the AIC request. Hand-authored notes are original short paraphrases with exact locators.

M0 is not a full adapter suite: no pagination, refresh scheduling, resumable crawling, automatic entity resolution, Getty/PeriodO imports, or global coverage is implemented. Research-only sources are explicitly marked as such.

## Future adapter contract and M1 acceptance

Acquire provider data into immutable bounded snapshots before normalization. A run manifest must record provider/request/version, retrieval time, response status, payload hash, schema/adapter version, page/cursor position, received/accepted/rejected counts and a resumable checkpoint. Keep credentials out of URLs, logs, fixtures and client bundles. Respect the provider's own header/rate requirements, use capped concurrency, honor Retry-After, and back off with jitter for transient errors. Do not endlessly retry schema errors or 401/403 responses.

Large imports use documented bulk exports when appropriate. An API timeout, incomplete page or empty response must not replace the published snapshot with an empty corpus. Stage a candidate, run validation/rights/coverage gates, then atomically promote it. Retain enough immutable input to reproduce accepted data within source-specific retention terms. Rights removals invalidate published media derivatives without erasing the audit record.

Each adapter supplies explicit mappings for IDs, languages, creators and attribution qualifiers, work level, dates/calendar conventions, locations with roles, institutions, periods with source schemes, media rights and provenance. Preserve the original display values. Missing is not zero; uncertain is not exact; interval overlap is not membership. A partial date must not be silently expanded into an invented “circa” tolerance.

Reconciliation first uses exact source IDs and supplied authority links. A potential match stays a candidate until evidence is recorded. Same title/artist/medium cannot auto-merge print impressions, casts or editions. Conflicting dates and attributions remain separate claims with a documented display-selection policy. Unsupported historical influence is never synthesized from visual similarity, shared material, proximity or embeddings.

## Required failure and adversarial cases

- Corrupted raw payload fails its receipt check.
- Malformed booleans, date bounds or image URLs fail the provider boundary.
- Rights changing from open to restricted removes the image while preserving allowed object metadata.
- Same design at two museums remains two physical objects unless identity evidence proves otherwise.
- Missing maker on two sculptures produces no shared maker node.
- Findspot at Meir never becomes production place; modern collection never becomes origin.
- “Ca. 1830–32” and provider indexing bounds 1820–1842 remain distinct through `index-window` semantics, not just explanatory text. The same rule applies to exact numeric indexing endpoints supplied for century-worded dates.
- The standing Buddha's missing hand remains visible in the gesture claim; the comparison does not create influence.
- PeriodO's year zero must not receive the Met BCE conversion when that adapter is introduced.
- Partial pagination, repeated cursor, record disappearance and a changed source schema leave the previous published snapshot intact (M1).

## Gauntlet task

The external bar is the **Met's own records for objects 437658, 72381, 38198 and 544227, plus AIC 27992**. The compared property is preservation and inspectability of the evidence for an actual next step.

Give a fresh critic the served demo, raw receipts and exact source URLs. Ask them to follow the study-to-painting route and the shared-gesture route, open each edge's evidence, inspect the date/rights qualifiers, then reconstruct the corpus with the documented command. The critic must inspect the actual corpus and rendered panels, not this spec or a builder's claim. The largest information loss is the single gap for that round. A technical pass is not a Gauntlet pass.

A pass requires an argued demonstration that a visitor can locate why the step exists, which source asserts it and which caveat still matters. If the critic cannot reach the artifact or supporting source, record the failed review; do not grade the plan. Global breadth is explicitly unjudged at M0.

## Verification and report

Run `pnpm --filter @artsy/ingest check`, `pnpm --filter @artsy/ingest test`, `pnpm fixtures:build`, and `pnpm test:architecture`; the PM runs the integrated site build. Inspect `specs/research/coverage.md` and the import report for the declared limitations. Report changed paths, actual command results, disagreements and remaining gaps. No production connector or quality pass may be claimed from documentation verification alone.
