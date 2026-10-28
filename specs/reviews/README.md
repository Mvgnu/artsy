# M0 review record

These are independent artifact reviews, not builder reports or test summaries. Read [implementation status](../implementation-status.md) for technical results, the actual delivery boundary and explicit PM stops.

| Review | Result |
|---|---|
| [Core / ingest round 1](m0-core-ingest-round1.md) | Gap: provider search-index date bounds were typed as historical occurrence windows |
| [Core / ingest round 2](m0-core-ingest-round2.md) | Bounded pass after actual replay, source, rendering and temporal-query reinspection |
| [Graph round 1](m0-graph-round1.md) | Bounded pass against reciprocal relationship/evidence clarity |
| [Experience round 1](m0-experience-round1.md) | Gap: changed records can arrive above the viewport; full media comparator absent |
| [Experience round 2](m0-experience-round2.md) | Direct arrivals corrected; browser Back still leaves the restored record's focused title off-screen |
| [Experience round 3](m0-experience-round3.md) | Bounded explorer/demo pass after direct and history arrival, exact route and first-load reinspection; full media comparator stays open |

The experience reviews and rebuilt-artifact reinspections are recorded separately. A full media-comparator pass remains explicitly open. Planned learning/atlas domains and the second-site onboarding drill have not run.

Reports retain artifact hashes, commands, source URLs, viewports, observations and limitations. Absolute temporary screenshot paths identify the review session's evidence; they are not promised as repository files. The repeatable browser suite produces fresh screenshots and observations under `artifacts/browser/`, and the new CI workflow uploads them with the static export.

Two actual viewport captures from the independent third experience round are retained here:

- [Desktop, first load at 1440×900](assets/m0-desktop.png).
- [Mobile, current work after browser Back at 390×844](assets/m0-mobile-history-back.png).

These document the exported artifact identified in that report; they are not mockups. Museum image credit/rights remain part of the rendered page.
