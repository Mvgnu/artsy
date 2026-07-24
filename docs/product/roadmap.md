# Product roadmap

## Planning assumptions

- The repository is empty apart from agent governance.
- One person may act as product owner, editor, and developer during the first phase.
- The first objective is a compelling, technically sound proof of the content system—not maximum catalogue size.
- Public-domain and explicitly open-access imagery is the default media strategy.
- The first production release is German-only.

## Phase 0 — PM bootstrap

**Outcome:** implementation can begin without inventing product boundaries during coding.

Deliverables:

- product brief;
- information architecture;
- rights and provenance policy;
- domain specs;
- initial implementation issues;
- documented launch gates.

Exit criteria:

- every implementation area has an owner and write boundary;
- cross-domain dependencies are explicit;
- the first movement silo is selected;
- no unresolved decision blocks repository scaffolding.

## Phase 1 — Foundation

**Outcome:** a deployable Next.js shell with validated content contracts and no editorial content debt.

Scope:

- create the Next.js App Router application;
- enable strict TypeScript, linting, formatting, tests, and CI;
- establish Tailwind tokens and baseline typography;
- implement the global shell, metadata, sitemap, robots, and error states;
- implement validated entity and artwork-media schemas;
- implement content registries and build-time validation;
- implement citation, source-note, and image-credit primitives;
- establish an approved remote-image allowlist or local asset workflow;
- add preview/draft separation;
- add accessibility and performance checks.

Explicitly excluded:

- database;
- authentication;
- CMS;
- broad museum API ingestion;
- search service;
- user-generated content.

Exit criteria:

- production build, typecheck, lint, and tests pass;
- an example fixture for each entity type validates;
- an unreviewed artwork image fails the build;
- deployment preview is reachable;
- the empty shell does not expose thin public routes.

## Phase 2 — First flagship silo: Romanticism

**Outcome:** demonstrate the full editorial and visual product proposition.

Scope:

- `/epochen/romantik/` bespoke experience;
- four to six artwork decoders;
- two artist pages;
- two motif pages;
- one technique page;
- one comparison page;
- one curated discovery collection;
- complete source and rights records;
- contextual internal linking across the silo.

Suggested initial works, subject to rights and source review:

- *Der Wanderer über dem Nebelmeer*;
- *Kreidefelsen auf Rügen*;
- *Der Mönch am Meer*;
- *Das Eismeer*;
- one work by J. M. W. Turner;
- one work that exposes the movement's geographic or conceptual boundaries.

Exit criteria:

- movement silo acceptance criteria from the information architecture are met;
- the experience works with keyboard and reduced motion;
- images, citations, and structured data validate;
- performance budget passes on representative mobile hardware;
- the page provides a distinctive journey unavailable from a generic article template.

## Phase 3 — Repeatability test

**Outcome:** prove that the architecture supports another movement without copying the first experience.

Scope:

- build Impressionism as a second bespoke silo;
- reuse content contracts and primitives;
- add primitives only where the second experience demonstrates a general need;
- compare authoring effort, performance, and content reuse against Romanticism;
- refine the domain specs based on observed friction.

Exit criteria:

- the second movement has a visibly different experience;
- no Romanticism-specific assumptions leaked into shared contracts;
- shared primitives remain understandable and bounded;
- authoring a structured child page is materially faster than creating the first fixture.

## Phase 4 — Discovery MVP

**Outcome:** turn the growing entity graph into a browseable product.

Scope:

- searchable entity index;
- curated mood, motif, subject, and visual collections;
- filter state for user utility without automatic indexation;
- related-artwork and continue-exploring modules;
- basic analytics for search use and internal-link progression.

Potential filters:

- movement;
- date range;
- artist;
- motif;
- technique;
- dominant colour family;
- orientation;
- setting;
- weather or time of day;
- collection institution;
- rights availability.

Exit criteria:

- discovery works from structured records rather than scraping rendered pages;
- empty combinations are handled gracefully;
- only approved curated collections are indexable;
- analytics can distinguish search, filter, and editorial collection usage.

## Phase 5 — Editorial scale

**Outcome:** increase publication speed without flattening quality.

Scope candidates:

- third and fourth movement silos;
- editorial checklists and content preview tooling;
- automated source-link health checks;
- museum API import assistant that creates drafts only;
- review queue for rights and factual provenance;
- internal graph diagnostics for orphaned pages;
- reusable annotated-image authoring tools.

The import pipeline must never auto-publish museum records or generated prose.

## Phase 6 — Product experiments

Run only after organic discovery and repeat engagement exist.

Candidates:

- saved collections;
- classroom mode and quizzes;
- museum route planning;
- public-domain image export presets;
- source-backed creative moodboards;
- newsletter;
- sponsorship and affiliate experiments;
- API access to curated, provenance-rich records.

## Prioritisation framework

Score candidate work against:

1. user value;
2. organic discovery potential;
3. editorial distinctiveness;
4. graph compounding value;
5. open-image availability;
6. implementation cost;
7. ongoing maintenance burden;
8. legal and factual risk.

High search volume alone is not sufficient.

## Deferred decisions

These should not block Phase 1:

- final brand identity and logo;
- database vendor;
- CMS vendor;
- user account model;
- paid product packaging;
- multilingual URL strategy beyond preserving language-neutral IDs;
- full-text search provider;
- image CDN beyond the initial deployment platform;
- whether to store approved images locally or use source-approved IIIF delivery per provider.

Each deferred decision must be revisited only when a concrete feature creates the requirement.
