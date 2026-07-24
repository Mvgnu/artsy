# Product brief

## Working name

**Leerraum** — `leerraum.ch`

The name is treated as a working brand until visual identity and trademark checks are completed.

## Product thesis

Most art-history pages are either museum collection records, academic references, or interchangeable SEO articles. Leerraum should occupy the space between them: rigorous enough to trust, visual enough to explore, and deliberately authored enough to remember.

The product is not an exhaustive database at launch. It is a growing network of exceptional entry points that compound into a structured art-discovery graph.

## Primary audience

### Curious non-experts

People who encounter a work, artist, or movement and want to understand what they are looking at without being buried in academic language.

### Students and educators

Users who need coherent overviews, reliable terminology, artwork examples, comparison pages, and source trails.

### Creatives and visual researchers

Writers, designers, illustrators, filmmakers, and game developers looking for historically grounded visual references rather than generic generated imagery.

## Core user jobs

- Understand an artwork's subject, composition, symbols, technique, and historical context.
- Learn how to recognise an art movement visually.
- Move from a broad period into relevant artists, works, motifs, and techniques.
- Discover real artworks through visual or thematic concepts.
- Verify where an image and its factual claims came from.
- Save or share a useful visual journey.

## Product principles

### 1. Experiences, not templates

Every flagship period or movement page may have its own route-level TSX composition. Shared primitives provide quality and coherence, but they must not flatten different movements into one article template.

### 2. Structured facts, authored interpretation

Titles, dates, creators, institutions, rights, relationships, and taxonomies are structured data. Explanations, visual pacing, argument, and interpretation are authored editorial work.

### 3. The graph compounds

A single artwork record should strengthen multiple surfaces: its movement hub, artist page, motif pages, comparison pages, discovery collections, and internal recommendations.

### 4. Public-domain first

The editorial roadmap should preferentially select works whose images are explicitly available through public-domain or CC0 museum programmes. Copyright exceptions are a narrow fallback, not the default acquisition strategy.

### 5. No page-count vanity

A page is published only when it satisfies a real search or discovery need and contains meaningful original structure, selection, analysis, or interaction. Thin combinations remain ungenerated or `noindex`.

### 6. German-first, internationally extensible

Launch content, routes, metadata, and editorial voice are German. Data identifiers and domain contracts must remain language-neutral enough to support future localisation.

## Launch content model

The first useful release should demonstrate the whole product loop with limited breadth:

- 3 flagship movement experiences;
- 12 artwork decoders;
- 6 artist profiles;
- 8 motif or symbol pages;
- 4 technique pages;
- 3 comparison pages;
- 6 curated discovery collections;
- one coherent homepage and exploration index.

Recommended first movement set:

1. **Romantik** — emotionally legible, visually distinctive, and especially suitable for atmosphere-led storytelling.
2. **Impressionismus** — broad demand, recognisable visual language, and rich open-access collections.
3. **Surrealismus** — strong discovery and symbol potential, but rights availability must be assessed work by work because many creators remain protected.

If Surrealism cannot meet the media-rights gate, replace it in the MVP with **Barock** or **Niederländisches Goldenes Zeitalter**.

## Initial route families

- `/epochen/...`
- `/werke/...`
- `/kuenstler/...`
- `/motive/...`
- `/techniken/...`
- `/vergleichen/...`
- `/entdecken/...`

Exact routing and ownership are defined in the information architecture and domain specs.

## Differentiation

Leerraum should be recognisable through:

- visual artwork annotation and detail-led explanation;
- bespoke movement journeys;
- contextual symbol interpretation rather than universal symbol dictionaries;
- explicit provenance and rights transparency;
- graph-based internal linking;
- discovery by mood, motif, appearance, and situation;
- editorial voice without sacrificing factual sourcing.

## Non-goals for the MVP

- a complete global art database;
- current art-market news;
- auction price tracking;
- user accounts or social features;
- an AI artwork-identification product;
- a general-purpose image generator;
- a headless CMS;
- automated publication from museum APIs;
- programmatic pages for every possible filter combination;
- monetisation before repeatable audience value exists.

## Potential later products

These are option value, not MVP commitments:

- source-backed visual moodboards for creative teams;
- museum and city route generation;
- public-domain artwork finder with export presets;
- classroom collections and quizzes;
- a provenance-aware artwork API;
- saved collections and collaborative research boards;
- newsletter and editorial sponsorships;
- print, book, or museum-ticket affiliate surfaces where editorially appropriate.

## Success metrics

### Quality and engagement

- percentage of flagship pages passing editorial, factual, rights, accessibility, and performance review;
- median engaged time on artwork and movement pages;
- internal-link click-through from a flagship page into its silo;
- completion rate for annotated artwork journeys;
- return visits within 30 days.

### Organic discovery

- non-branded impressions and clicks by route family;
- number of pages earning impressions without thin-content expansion;
- query diversity per high-quality page;
- indexed-to-published ratio;
- percentage of landing sessions that continue to a second page.

### Operational health

- percentage of published images with complete provenance records;
- rights-review failure rate before publication;
- build-time content validation failures caught before merge;
- broken external source and image links;
- Core Web Vitals by route family.

## Release gates

A release candidate is not launchable until:

- all published images have an approved rights status;
- all factual pages expose citations or source notes;
- metadata, canonical URLs, sitemap entries, and structured data validate;
- keyboard navigation and reduced-motion behaviour are verified;
- the build, typecheck, lint, tests, and link checks pass;
- no placeholder or TODO content is publicly reachable;
- the initial silos contain enough child pages to justify their navigation.
