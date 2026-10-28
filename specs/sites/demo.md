---
name: site-demo
description: "Thin, evidence-backed exploration harness"
paths:
  owned: [sites/demo/src/, sites/demo/index.html]
  tests: [sites/demo/test/]
exports: [StaticDemo]
consumes: [knowledge.parseAtlas, exploration.mountExplorer]
verification:
  check: "pnpm --filter @site/demo check"
  test: "python ops/browser-smoke.py"
  build: "pnpm --filter @site/demo build"
bar:
  reference: "NGA object page + a referenced Wikidata statement"
  property: "Can a visitor follow six understandable connections, inspect each source, branch, reload and return on mobile without losing the thread?"
---

# One working thread, not a world catalogue

The site selects the starting object, title, locale and dataset revision; packages remain site-neutral. Serve `sites/demo/out` over HTTP. Browser rendering is not evidence of historical truth; validate the input before mounting. All historical facts live in the checked-in seed, not handwritten JSX. The graph remains usable with blocked image hosts. No runtime database, collection API key or account is required.

Required user tasks: start with Botticelli's Washington Adoration; follow its subject to another Adoration; inspect who started and completed the tondo; follow Lippi to Botticelli without conflating his son; opt into probable origin; explain a collection-only bridge to Yukinobu; keep a shareable trail. The golden JSON provides a six-edge teaching/work/subject/location walk whose final edge is qualified. It is not the only possible route.

M0 language is English. The labels contract supports language tags; complete German content is not claimed. Main content is semantic DOM with source links, heading focus on navigation, keyboard controls and visible status messages. Source pages and imagery may be unavailable independently of the static export.

The builder runs smoke checks; a fresh critic separately runs mobile/desktop and screen-reader tasks. No fresh critic has run in this session. Production routing, static no-JavaScript entity pages and accessible deep zoom belong to the next site, not a falsely green M0 release gate.
