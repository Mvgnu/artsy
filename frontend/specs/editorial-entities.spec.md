---
name: editorial-entities
description: "Repeatable, high-quality routes for artworks, artists, motifs, techniques, and approved comparisons"
paths:
  routes: frontend/src/app/(editorial)/
  renderers: frontend/src/components/entities/
  annotations: frontend/src/components/artwork-annotations/
  tests: frontend/tests/editorial-entities/
exports:
  - ArtworkPage
  - ArtistPage
  - MotifPage
  - TechniquePage
  - ComparisonPage
  - ArtworkDecoder
  - EntitySourceList
  - EntityContinueExploring
consumes:
  - platform.buildPageMetadata
  - platform.JsonLd
  - design-system.primitives
  - design-system.editorial-primitives
  - rights.assertPublishableMedia
  - content-model.ArtworkRecord
  - content-model.ArtistRecord
  - content-model.MotifRecord
  - content-model.TechniqueRecord
  - content-model.ComparisonRecord
  - content-model.getRelatedEntities
verification:
  typecheck: "pnpm --dir frontend typecheck"
  test: "pnpm --dir frontend test -- editorial-entities"
  lint: "pnpm --dir frontend lint -- 'src/app/(editorial)' src/components/entities src/components/artwork-annotations"
  build: "pnpm --dir frontend build"
---

# Editorial-entities domain

## Mission

Render structured editorial entities as useful, visually literate pages without reducing them to database dumps or generic blog templates.

## Owned route families

- `/werke/[slug]`
- `/kuenstler/[slug]`
- `/motive/[slug]`
- `/techniken/[slug]`
- `/vergleichen/[slug]`

Movement routes belong to `art-experiences`. Discovery collections belong to `discovery`.

## Shared page requirements

Every public entity page must:

- load a published canonical record by slug;
- return a real not-found state for absent or unpublished records;
- produce canonical metadata and appropriate structured data;
- expose a visible source trail;
- render only media approved for the requested context;
- provide meaningful orientation and continuation links;
- preserve heading hierarchy and keyboard usability;
- avoid client-side fetching for static authored content;
- avoid generic filler sections whose only purpose is word count.

## Artwork decoder

The artwork route is the product's highest-value repeatable page.

A complete decoder should provide equivalents of:

1. **Orientation** — what the viewer is looking at and why the work matters.
2. **Look first** — a guided visual prompt before interpretation.
3. **Composition** — focal points, eye movement, scale, framing, and spatial structure.
4. **Details** — annotated regions tied to accessible text.
5. **Motifs and symbols** — contextual meanings and uncertainty.
6. **Technique and material** — how the visual effect was made.
7. **Historical situation** — only context that changes understanding of the work.
8. **Interpretations** — attributed readings and points of disagreement.
9. **Object record** — title, creator, date, medium, dimensions, collection, and source.
10. **Continue exploring** — movement, artist, motifs, comparison, or curated collection.

Not every artwork needs the same number or visual order of sections, but omissions must be editorial decisions rather than missing data hidden by a renderer.

## Image annotation requirements

- Each annotation has a stable ID, label, coordinates or region data, and text equivalent.
- Hotspots are keyboard reachable.
- The full explanation is available without precise pointer input.
- Zoom and pan do not trap focus.
- Annotation content does not exist only inside hover states.
- Crops inherit and display the approved source asset's credit and restrictions.

## Artist page requirements

An artist page should emphasise:

- the visual or intellectual problems the artist pursued;
- changes across the body of work;
- relationships to movements without forcing a simplistic label;
- a small set of representative works with reasons for their inclusion;
- sourced relationships to teachers, peers, patrons, students, and influences;
- where boundaries or attributions are disputed.

A year-by-year biography is optional and subordinate.

## Motif page requirements

- Interpretations are scoped by period, culture, genre, and work.
- The route explicitly acknowledges ambiguity and literal uses.
- Artwork examples are annotated and selected, not merely listed.
- Universal dream-dictionary wording is prohibited.

## Technique page requirements

- Demonstrate the visual result with approved artwork examples.
- Distinguish process, material, and visual effect.
- Use diagrams only when sourced or created specifically for Leerraum.
- Explain adjacent terms users commonly confuse.

## Comparison page requirements

- A comparison must answer an approved user question.
- The compared entities and dimensions are explicit.
- Examples support each distinction.
- The conclusion may acknowledge overlap and contested boundaries.
- No automatic Cartesian product of entity pairs is permitted.

## SEO and indexability

A page is indexable only when:

- its record is published;
- required media and sources pass validation;
- the rendered page meets the domain completeness threshold;
- it has unique explanatory value;
- it is reachable through a meaningful internal path.

## Non-responsibilities

- movement flagship routes;
- discovery search and filters;
- rights status determination;
- defining canonical entity schemas;
- global shell;
- user comments or accounts.

## Test expectations

- one successful render fixture for each route family;
- unpublished and unknown slug behaviour;
- missing media eligibility failure;
- structured data matches visible records;
- keyboard test for artwork annotations;
- reduced-motion behaviour;
- no orphaned continuation modules;
- snapshot or semantic tests for source and credit rendering.
