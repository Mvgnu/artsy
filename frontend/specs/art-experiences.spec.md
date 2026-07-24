---
name: art-experiences
description: "Bespoke period and movement journeys built around real editorial material"
paths:
  routes: frontend/src/app/(experiences)/epochen/
  components: frontend/src/components/experiences/
  themes: frontend/src/styles/experiences/
  tests: frontend/tests/art-experiences/
exports: []
consumes:
  - platform.root-layout
  - design-system.foundation-tokens
verification:
  typecheck: "pnpm --dir frontend typecheck"
  lint: "pnpm --dir frontend lint -- 'src/app/(experiences)/epochen'"
  build: "pnpm --dir frontend build"
---

# Art-experiences domain

## Mission

Create memorable, movement-specific editorial journeys. The experience and its content are the product; shared infrastructure exists only to make repeated work easier.

## Route strategy

Flagship movements receive explicit routes rather than one universal article renderer:

```text
frontend/src/app/(experiences)/epochen/romantik/page.tsx
frontend/src/app/(experiences)/epochen/impressionismus/page.tsx
```

The public URL remains `/epochen/<slug>/`.

## Content-first rule

Build the first coherent version of a page before inventing general systems around it.

For an early movement route it is acceptable to:

- keep authored copy directly in the route;
- keep a small typed artwork list beside the route;
- create local CSS and local section components;
- publish a useful static experience before every planned child page exists;
- refactor only when a second real use case demonstrates repetition.

The route does **not** need a universal entity registry, graph engine, approval workflow, provider policy engine, or generic movement schema before it can exist.

## Minimum useful artwork note

Every rendered artwork needs enough nearby information for readers to understand what they are seeing and where the image came from:

- title and artist;
- date and medium where verified;
- institution or collection;
- source page;
- the source's stated rights label;
- visible credit;
- useful alt text.

This may be represented by a small route-local typed object. More elaborate records require demonstrated reuse.

## Visual depth and artwork selection

Art history pages should not become long text pages decorated by one repeated hero image.

- A movement pillar should normally show several distinct works across its full narrative, not recycle the same artwork as hero, section image and card art.
- Artist profiles and broad concept pages should generally contain a deliberate sequence of three to four relevant works when suitable public-domain or openly licensed material is available.
- Focused artwork decoders should keep the primary work dominant, but add one to three contextual images when comparisons, studies, alternate versions or related works materially sharpen the reading.
- Every image must earn its place by supporting the nearby argument. Do not add unrelated gallery filler merely to satisfy a count.
- Prefer direct museum or collection source pages and their stated public-domain or open-access images. Wikimedia Commons may be used when the file page clearly identifies the work, source and rights status.
- Avoid showing the same small set of works across many routes. Repetition is acceptable only when the repeated image is itself the subject of analysis and the page also supplies distinct contextual material.
- Image sequences should vary scale and role: hero, full-width close looking, comparison pair, study sheet, detail or compact reference image.
- Preserve artwork proportions unless a crop is editorially intentional and does not remove the feature being discussed.

## Experience principles

Every movement experience should:

- establish a clear editorial thesis;
- teach users how to recognise or think through the movement visually;
- use real sourced works for concrete analysis;
- acknowledge that movements vary across places and artists;
- keep image credits and sources visible;
- remain useful without client-side JavaScript;
- work with keyboard navigation and reduced motion;
- stay within the normal site performance budget.

## Bespoke composition boundary

Experience-owned files may define:

- section order and narrative pacing;
- movement-specific palette and typography accents;
- spatial composition;
- local artwork layouts and annotations;
- small decorative effects.

They must not compromise global navigation, focus visibility, text readability, source visibility, or responsive behaviour.

## Romanticism direction

The first Romanticism slice should prioritise a coherent journey over catalogue completeness:

1. an atmosphere-led threshold;
2. the break from rational order;
3. visual cues such as scale, weather, solitude and the sublime;
4. close looking at a few strong works;
5. evidence that Romanticism was not one uniform look;
6. a conclusion that gives the movement contemporary resonance.

Artwork decoders, artists, motifs and comparisons can be added after the flagship route establishes which branches are genuinely valuable.

## Abstraction gate

Keep a component local unless at least two concrete pages or sections need the same behaviour.

Before exporting a shared component, answer:

1. What repeated problem does it solve?
2. Which behaviour is actually invariant?
3. Does the abstraction make the next page faster to author?
4. Is the shared version easier to understand than two local implementations?

If not, leave it local.

## Testing

Do not write tests for prose, obvious static markup, or every source field.

Add tests when they protect behaviour that could realistically regress, such as:

- keyboard interaction;
- a non-trivial responsive component;
- reduced-motion behaviour;
- metadata or image rendering logic shared across routes.

Typecheck, lint and production build remain the baseline checks for a static first slice.

## Publication

A coherent and responsibly sourced movement page may be reachable while its wider silo is still growing. It should clearly avoid links to nonexistent routes, but it does not need four artwork pages, two artist pages and a complete graph before publication.