---
name: art-experiences
description: "Bespoke period and movement journeys composed from structured content and shared primitives"
paths:
  routes: frontend/src/app/(experiences)/epochen/
  components: frontend/src/components/experiences/
  themes: frontend/src/styles/experiences/
  tests: frontend/tests/art-experiences/
exports:
  - MovementExperienceShell
  - MovementSectionNavigation
  - MovementEntityRail
  - MovementExperienceTheme
consumes:
  - platform.buildPageMetadata
  - platform.JsonLd
  - design-system.primitives
  - design-system.editorial-primitives
  - rights.assertPublishableMedia
  - content-model.MovementRecord
  - content-model.ArtworkRecord
  - content-model.ArtistRecord
  - content-model.getRelatedEntities
verification:
  typecheck: "pnpm --dir frontend typecheck"
  test: "pnpm --dir frontend test -- art-experiences"
  lint: "pnpm --dir frontend lint -- 'src/app/(experiences)/epochen' src/components/experiences src/styles/experiences"
  build: "pnpm --dir frontend build"
  accessibility: "pnpm --dir frontend test:a11y -- art-experiences"
---

# Art-experiences domain

## Mission

Create memorable, movement-specific editorial journeys while preserving factual consistency, accessibility, performance, and graph connectivity.

## Route strategy

Flagship launch movements receive explicit route files rather than one dynamic universal renderer.

Examples:

```text
frontend/src/app/(experiences)/epochen/romantik/page.tsx
frontend/src/app/(experiences)/epochen/impressionismus/page.tsx
frontend/src/app/(experiences)/epochen/barock/page.tsx
```

The public URLs remain `/epochen/<slug>/`; route groups do not appear in URLs.

A future generic fallback for minor movements requires a separate PM decision. It must not replace bespoke flagship pages.

## Experience contract

Every movement experience must:

- load one published movement record;
- use structured entity references rather than duplicate factual metadata;
- establish a clear editorial thesis;
- teach users how to recognise the movement visually;
- situate the movement against predecessors, reactions, and influences;
- feature approved artworks and artists with reasons for inclusion;
- deep-link into complete child pages;
- present uncertainty and disputed boundaries honestly;
- provide source notes and image credits;
- remain useful with reduced motion and without pointer input;
- pass the route-level performance budget.

## Bespoke composition boundary

Experience-owned files may define:

- section order;
- narrative pacing;
- movement-specific colour and type accents;
- scroll or transition behaviour;
- spatial composition;
- local illustration and annotation arrangements;
- custom combinations of shared primitives.

They may not redefine:

- canonical artwork or artist facts;
- rights eligibility;
- global navigation semantics;
- source record formats;
- accessibility fundamentals;
- route metadata contracts.

## Recommended Romanticism journey

This is a direction, not a frozen wireframe.

1. **Threshold** — atmosphere-led introduction using an approved open-access work.
2. **The rupture** — what Romanticism reacted against and why the change mattered.
3. **How to see it** — visual cues such as scale, nature, ruins, weather, solitude, the sublime, and the Rückenfigur.
4. **Enter the landscape** — guided artwork detail sequence.
5. **Not one Romanticism** — geographic and ideological variation.
6. **Artists in tension** — selected artists and differing approaches.
7. **Motif constellation** — moon, ruin, storm, mountain, sea, window, wanderer.
8. **Afterlife** — influence on Symbolism, cinema, fantasy, environmental imagination, or later visual culture where sourced.
9. **Continue** — artwork decoders, artist pages, motifs, comparison, and discovery collection.

## Shared experience components

Only genuinely repeated mechanics should be exported:

- route-level experience shell;
- sticky or sectional navigation;
- entity rails;
- artwork detail transitions;
- citation and credit integration;
- reduced-motion wrappers;
- theme contract.

A component should remain local until a second movement proves the abstraction.

## Theming

Movement themes may extend documented CSS custom properties or typed theme contracts.

They must preserve:

- contrast requirements;
- focus visibility;
- readable prose widths;
- reduced-motion support;
- print and text-selection usability;
- global navigation legibility.

A movement theme must not mutate global styles outside its route boundary.

## Performance rules

- Prioritise one clear hero asset, not a preload cascade.
- Below-fold media is lazy-loaded.
- Large images use responsive sizes and intrinsic dimensions.
- Avoid shipping animation libraries for effects achievable with CSS or platform APIs.
- Interactive sections are isolated client components.
- The core narrative and links render on the server.
- Decorative effects degrade without blocking content.

## Content readiness gate

A movement route must not be publicly reachable until its silo includes:

- the flagship experience;
- at least four approved artwork pages;
- at least two linked artist pages;
- at least two motif or technique pages;
- one approved comparison or discovery collection;
- complete source and media records;
- no dead-end child pages.

## Non-responsibilities

- generic entity route rendering;
- search and filter implementation;
- canonical content schemas;
- rights review decisions;
- homepage ownership;
- automated movement-page generation.

## Test expectations

- one route-level test per movement;
- no duplicate canonical entity metadata inside route fixtures;
- keyboard access to all interactive sections;
- reduced-motion rendering;
- image-credit completeness;
- route metadata and structured-data validation;
- mobile overflow and text scaling checks;
- performance measurement for the heaviest representative route.
