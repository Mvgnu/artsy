# Information architecture

## Objective

The site should behave as a connected art-history graph while remaining legible to users and search engines. Flagship experiences create memorable entry points; structured child entities make the network reusable and navigable.

## Route model

### Homepage

`/`

Responsibilities:

- state the product promise;
- feature one current editorial journey;
- expose the principal route families;
- provide visual discovery entry points;
- surface recently published or substantially updated work;
- avoid becoming a generic feed.

### Periods and movements

`/epochen/[slug]`

Flagship movement pages are intentionally **not** generated from one universal article template.

Preferred implementation for launch movements:

```text
src/app/(editorial)/epochen/romantik/page.tsx
src/app/(editorial)/epochen/impressionismus/page.tsx
src/app/(editorial)/epochen/barock/page.tsx
```

Each route may compose unique sections and interactions from shared primitives. A structured movement record still supplies canonical metadata, dates, relationships, navigation, citations, and graph links.

A movement page should answer:

- What changed, and why did it matter?
- How can the movement be recognised visually?
- Which earlier ideas did it reject or inherit?
- Which places, artists, and works define it?
- Where are its boundaries disputed?
- Which child pages deepen the journey?

### Artworks

`/werke/[slug]`

Artwork decoders are structured editorial pages with room for bespoke visual annotation.

Required sections or equivalents:

- artwork identity and verified object metadata;
- an immediate visual orientation;
- composition and eye movement;
- relevant motifs and symbols;
- technique and material;
- historical context;
- interpretations and disagreements;
- relationship to the parent movement and artist;
- source, provenance, image rights, and collection information.

### Artists

`/kuenstler/[slug]`

Artist pages should not be chronology dumps. They should explain the artist's visual problems, development, relationships, important works, and position within or against movements.

### Motifs and symbols

`/motive/[slug]`

A motif page must be contextual rather than universal. A skull, mirror, dog, lily, window, storm, or ruin can carry different meanings across periods, cultures, genres, and individual works.

Minimum structure:

- literal subject;
- possible meanings by context;
- changes across periods;
- counterexamples where the object is probably literal;
- annotated artworks;
- related motifs and movements.

### Techniques and concepts

`/techniken/[slug]`

Examples include chiaroscuro, sfumato, impasto, linear perspective, glazing, collage, and automatic drawing. Pages should demonstrate a concept through visual examples rather than definition alone.

### Comparisons

`/vergleichen/[slug]`

Comparison pages answer a genuine distinction query, such as:

- Romanticism versus Realism;
- Impressionism versus Post-Impressionism;
- Baroque versus Renaissance;
- sfumato versus chiaroscuro.

The route slug represents an editorially approved comparison, not an automatically generated pair.

### Discovery collections

`/entdecken/[slug]`

Curated, indexable collections may organise real artworks by subject, visual atmosphere, colour, setting, weather, composition, or historical situation.

Examples:

- `/entdecken/mondlicht-und-nacht/`
- `/entdecken/frauen-beim-lesen/`
- `/entdecken/ruinen-und-verfall/`
- `/entdecken/einsame-figuren-in-landschaften/`

A collection is indexable only when it includes an authored thesis, meaningful selection, sufficient works, and internal context. Raw filter states are not automatically indexable.

## Silo model

Each flagship movement owns an editorial cluster while entities may participate in multiple clusters.

Example:

```text
/epochen/romantik/
  -> /werke/der-wanderer-ueber-dem-nebelmeer/
  -> /kuenstler/caspar-david-friedrich/
  -> /motive/ruine/
  -> /motive/mond/
  -> /techniken/rueckenfigur/
  -> /vergleichen/romantik-vs-realismus/
  -> /entdecken/einsame-figuren-in-landschaften/
```

The movement is the editorial entry point, not an ownership prison. An artwork can link into multiple motifs, techniques, places, and comparisons.

## Canonical entity graph

Initial entity types:

- `Movement`
- `Artwork`
- `Artist`
- `Motif`
- `Technique`
- `Place`
- `Institution`
- `Source`
- `ArtworkMedia`
- `EditorialCollection`
- `Comparison`

Initial relation types:

- artwork `createdBy` artist;
- artwork `associatedWith` movement;
- artwork `depicts` motif;
- artwork `uses` technique;
- artwork `heldBy` institution;
- artist `associatedWith` movement;
- artist `influencedBy` artist or movement;
- movement `precededBy`, `reactsAgainst`, or `influences` movement;
- collection `contains` artwork;
- comparison `compares` two or more entities;
- factual or interpretive claim `supportedBy` source;
- artwork media `represents` artwork and `providedBy` institution.

## URL principles

- German, lowercase, stable, readable slugs.
- No dates or mutable taxonomy in canonical artwork URLs.
- Transliterate umlauts in slugs (`künstler` → `kuenstler`).
- One canonical route per entity.
- Aliases redirect permanently to the canonical route.
- Route families remain stable even when navigation labels change.
- Pagination and filter parameters are canonicalised or excluded from indexing.

## Navigation

Global navigation should remain small:

- Epochen
- Werke
- Künstler
- Motive
- Entdecken
- Suche

The global shell should not expose every taxonomy. Contextual navigation inside a movement or artwork carries most of the depth.

## Internal-link rules

Every published page must provide at least:

- one parent or orientation link;
- two contextually explained child or related links;
- one route to continue visually exploring;
- breadcrumbs where the route hierarchy is meaningful.

Links should be editorially motivated. Repeating a generic “related posts” grid on every page is insufficient.

## Search and indexing

Indexable:

- complete entity pages;
- complete movement experiences;
- editorially approved comparisons;
- curated discovery collections with unique explanatory value.

Not indexable by default:

- raw search results;
- arbitrary filter combinations;
- empty taxonomies;
- pages below the minimum content and rights thresholds;
- preview and draft routes;
- duplicate collection states.

## Metadata and structured data

Every route must produce:

- unique title and description;
- canonical URL;
- social metadata using approved-open or approved-licensed media only;
- breadcrumb metadata where applicable;
- modification date based on substantive editorial updates;
- locale and language alternates when localisation exists.

Candidate schema.org types:

- `Article`
- `VisualArtwork`
- `Person`
- `DefinedTerm`
- `CollectionPage`
- `BreadcrumbList`

Structured data must reflect visible page content and must not invent missing object metadata.

## Content composition model

### Bespoke route composition

Used for flagship experiences and selected artwork decoders. The route imports structured records and shared visual primitives, then defines its own composition in TSX.

### Structured editorial renderer

Used for repeatable child pages where the information structure is stable. Content remains authored, but the renderer ensures consistent accessibility, citations, credits, metadata, and related-entity navigation.

### Curated collection composition

Used for discovery pages. A collection record selects entities and defines the editorial ordering, introduction, annotations, and indexability decision.

## First silo acceptance criteria

A movement silo is ready to publish when it has:

- one complete flagship experience;
- at least four approved artwork pages;
- at least two linked artists;
- at least two motif or technique pages;
- one comparison or curated discovery page;
- complete image provenance for all rendered assets;
- no dead-end child page;
- validated metadata and internal links.
