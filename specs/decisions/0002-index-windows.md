# 0002 — search bounds are not historical dating

Date: 2026-10-28. Trigger: fresh core/ingest critic, round 1.

The Great Wave's Met display says approximately 1830–32 while its API indexing bounds are 1820–1842. M0 originally preserved that distinction only in an evidence note but typed the normalized bounds as an occurrence window. That could mislead a downstream temporal query even though the rendered explanation was correct.

PM amended `TimeSpan.semantics` with `index-window`. Ingest marks that record and the two century-worded sculpture intervals accordingly. Graph comparisons with an index window return `unknown`; an indexing interval cannot prove historical overlap or disjointness. The raw receipts and source display text remain intact. The corpus moved from `m0-2026-10-28.1` to `.2` so old walks are explicitly versioned.

The independent critic then replayed the corrected data with network disabled, checked byte equality/hash stability, inspected actual comparison results and reopened the rendered source panels. Core and ingest received bounded passes for the six-work preservation/traceability task. See `specs/reviews/m0-core-ingest-round2.md`. This does not establish production ingestion or full temporal-model conformance.
