---
name: discovery
description: "Search, filtering, curated collections, and graph-based artwork exploration"
paths:
  routes: frontend/src/app/(discovery)/entdecken/
  search_route: frontend/src/app/(discovery)/suche/
  components: frontend/src/components/discovery/
  index: frontend/src/discovery/index/
  ranking: frontend/src/discovery/ranking/
  tests: frontend/tests/discovery/
exports:
  - DiscoveryQuerySchema
  - DiscoveryQuery
  - DiscoveryResultSchema
  - DiscoveryResult
  - buildDiscoveryIndex
  - searchEntities
  - getCuratedCollection
  - RelatedEntityRail
  - DiscoveryFilters
consumes:
  - platform.buildPageMetadata
  - platform.JsonLd
  - design-system.primitives
  - rights.assertPublishableMedia
  - content-model.EditorialCollection
  - content-model.getEntityById
  - content-model.getRelatedEntities
verification:
  typecheck: "pnpm --dir frontend typecheck"
  test: "pnpm --dir frontend test -- discovery"
  lint: "pnpm --dir frontend lint -- 'src/app/(discovery)' src/components/discovery src/discovery"
  build: "pnpm --dir frontend build"
---

# Discovery domain

## Mission

Help users find and continue exploring real artworks through editorial concepts, structured filters, and graph relationships without creating an indexable wasteland of arbitrary URL combinations.

## Owned routes

- `/entdecken/`
- `/entdecken/[slug]`
- `/suche/`

The discovery index may expose interactive filters inside these routes. Filter state does not imply a canonical indexable page.

## Discovery modes

### Curated collections

Authored, indexable pages built from a validated `EditorialCollection` record.

A curated collection requires:

- a specific editorial thesis;
- an ordered and justified selection;
- a minimum viable number of approved works;
- per-item annotation or grouping logic;
- unique title, description, and canonical slug;
- approved promotional media;
- explicit indexability approval.

Examples:

- moonlight and night;
- solitary figures in landscapes;
- ruins and decay;
- women reading;
- storms at sea;
- artworks dominated by blue where colour is an authored selection criterion rather than an automatic thin page.

### Search

Search helps users locate known entities and concepts.

Initial searchable fields:

- canonical and alternative titles;
- artist names and aliases;
- movement names and aliases;
- motifs;
- techniques;
- institutions;
- curated collection titles and summaries.

The MVP may use a build-time local index. A hosted search service is not required until corpus size or ranking needs justify it.

### Filters

Initial utility filters may include:

- entity type;
- movement;
- date range;
- artist;
- motif;
- technique;
- institution;
- image orientation;
- dominant colour family;
- setting;
- time of day or weather where explicitly tagged;
- public-domain or reuse availability.

Filters operate only on reviewed structured data. They do not infer sensitive or interpretive attributes from images at request time.

### Related exploration

Related entities should be explainable through graph relations, curated links, or transparent ranking factors.

Examples:

- shared movement;
- shared motif;
- shared technique;
- direct influence relation;
- inclusion in the same curated collection;
- explicit editorial relation.

Avoid opaque “you may also like” recommendations during the MVP.

## Indexability rules

Indexable:

- approved curated collection routes;
- the discovery landing page when complete.

Not indexable by default:

- search-result pages;
- filter query strings;
- sort states;
- empty or near-empty combinations;
- auto-generated colour, motif, or date combinations;
- result pagination that duplicates collection intent.

Canonical URLs for interactive states point to the owning landing route unless an approved curated collection exactly represents the state.

## Query contract

`DiscoveryQuerySchema` must validate:

- allowed filter keys;
- bounded arrays and date ranges;
- supported sort values;
- pagination or result limits;
- locale;
- safe free-text length.

Unknown query keys are rejected or ignored deterministically. No unvalidated query object reaches ranking logic.

## Ranking principles

Initial ranking may combine:

- exact title or name match;
- alias match;
- editorial prominence;
- relation strength;
- collection membership;
- publication completeness;
- optional text relevance.

Rights availability may be exposed as a filter but must not silently imply artistic relevance.

Ranking rules should be testable and stable enough that editorial pages do not reorder unexpectedly on every build.

## Performance

- Build the initial index at build time from published records.
- Keep client payload bounded; do not ship every full record to the browser.
- Search interaction may use a small client component backed by a compact index or server endpoint.
- Artwork thumbnails require publication eligibility for `discovery-result` context.
- Empty states and filter changes must not trigger layout instability.

## Accessibility

- Search and filters are usable by keyboard and screen reader.
- Applied filters are announced and removable.
- Result counts update accessibly.
- Visual colour filters have text labels.
- Infinite scroll is not the default; users retain navigable position and explicit loading control.

## Analytics events

Initial event contract should distinguish:

- search submitted;
- result opened;
- filter applied or removed;
- curated collection opened;
- related entity followed;
- zero-result state;
- continuation to a second page.

Queries containing personal data must not be sent to analytics unredacted.

## Non-responsibilities

- defining canonical entity data;
- publishing arbitrary API records;
- movement experience composition;
- rights decisions;
- user accounts and saved collections;
- machine-vision classification in the MVP.

## Test expectations

- exact and alias search;
- invalid query rejection;
- stable ranking fixture;
- no unpublished records in results;
- rights-ineligible thumbnail rejection;
- empty state;
- canonical and robots behaviour for filter states;
- keyboard and screen-reader filter interaction;
- curated collection minimum-completeness gate.
