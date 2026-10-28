---
name: atlas
description: "Public educational and curiosity-led atlas of overlapping art histories"
status: planned
paths:
  owned:
    - sites/atlas/app/
    - sites/atlas/public/
    - sites/atlas/config/
  tests:
    - sites/atlas/test/
exports:
  - ArtAtlas
consumes:
  - core.Corpus
  - explorer.Explorer
  - learning.GuidedWalk
verification:
  check: "pnpm --filter @site/atlas check"
  test: "pnpm --filter @site/atlas test"
  build: "pnpm --filter @site/atlas build"
bar:
  reference: "The Met Heilbrunn regional chronologies"
  property: "Change time and geography while retaining historical context, the chosen thread, and an honest account of represented data."
---

# Public atlas — planned

This spec reserves ownership; no site package or passing commands exist at M0. The PM provisions manifests/configuration only after the explorer's essential tasks and source replay gates pass. No deployment is part of this foundation PR.

## Visitor journeys

- Choose a regional period scheme, then descend into sourced works or associated makers. Overlapping dynasties, movements, schools and traditions keep their distinct labels and authorities.
- Hold a time window and switch region. The available periods and works come from the imported snapshot; show unknown and missing coverage separately.
- Start with any artwork, place, motif or material and follow a supported relationship in either direction. Explore all eligible neighbors, not just ranked suggestions.
- Compare images and metadata; follow a documented historical connection or an explicitly marked editorial/computed comparison.
- Start a cited guided walk and freely branch away. Keep the route, sources and return point.

## Routes and state

Statically generate meaningful `/entity/<stable-id>/`, `/periods/`, `/coverage/`, `/sources/` and `/about/` entry pages. IDs have canonical redirects/aliases after reviewed merges. Queries/fragments store validated lens, filters and snapshot-pinned walks. Arbitrary filter combinations are not generated/indexed pages. Deep links work on a plain static server. Broken/stale links offer explicit repair without silently replacing the route.

## Honest scope and performance

Coverage exposes source, region, temporal band, object/agent/relationship counts, image availability and gaps. It never reports “no art existed” when nothing is imported. Broadening coverage requires meaningful connections and local expertise, not only higher object totals. Modern/contemporary works remain discoverable with metadata when images cannot be licensed.

At M2 measure production payloads on a documented 390px/mobile throttling profile: initial compressed application JS target ≤200KiB excluding lazy optional map/zoom, no whole museum dump in the browser, neighborhood target p95 ≤100ms on a published 50k-node/250k-edge fixture. These are provisional engineering budgets to measure and revise by PM ruling, not observed results. Source APIs are never in the user interaction path. Use static index shards when measured corpus size requires them.

## Gauntlet task

Reference: https://www.metmuseum.org/essays/timeline-of-art-history . A fresh critic keeps one time window, compares at least two regional period schemes, enters an artwork, crosses a material or motif into a second tradition, opens claim evidence, and returns to the original context. Inspect mobile/desktop, keyboard, restricted image, unknown date, sparse region and disputed claim. Pass only with observed orientation and accurate contextual explanation. No artifact exists yet: status **not run**.
