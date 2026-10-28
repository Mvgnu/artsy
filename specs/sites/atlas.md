---
name: site-atlas
description: "Future public Next.js 16 static-export atlas"
status: planned
paths:
  owned: [sites/atlas/src/, sites/atlas/data/]
  tests: [sites/atlas/test/]
exports: [AtlasSite]
consumes: [knowledge, graph, chronology, geography, media, exploration, learning]
verification:
  check: "BLOCKED: site bootstrap not created"
  test: "BLOCKED: route and accessibility suites not created"
  build: "BLOCKED: Next static export not implemented"
bar:
  reference: "NGA Art up Close + PeriodO period browsing"
  property: "Can a novice move between object, maker, period, place and theme while retaining an understandable, source-backed route?"
---

# Production acceptance, not implemented status

PM first adds site manifest, approved Next version, configuration and frozen lockfile. Export stable entity routes and durable redirect aliases; never put graph traversal in server actions or make a static page depend on a live provider API. Route scope: `/explore/`, `/works/[id]/`, `/people/[id]/`, `/periods/[id]/`, `/places/[id]/`, `/themes/[id]/`, `/threads/` and `/sources/`. Search/path state is client-side against versioned shards. Duplicate path permutations are not millions of SEO pages.

Entity HTML must contain the core title, facts, attribution, source references and ordinary internal links before JavaScript. Every map/network/timeline lens has equivalent list access. Mobile and screen-reader visitors can branch and restore trails. No production migration until the old-route map, source rights, coverage caveats and independent Gauntlet evidence are reviewed.
