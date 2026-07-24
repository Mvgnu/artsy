---
name: design-system
description: "Visual tokens and reusable accessible primitives that support distinct editorial experiences without templating them"
paths:
  tokens: frontend/src/styles/tokens/
  primitives: frontend/src/components/ui/
  editorial_primitives: frontend/src/components/editorial/
  stories: frontend/src/components/__stories__/
  tests: frontend/tests/design-system/
exports:
  - designTokens
  - Container
  - Section
  - Prose
  - Heading
  - Link
  - Figure
  - ArtworkImage
  - ArtworkCredit
  - Citation
  - SourceNote
  - DetailViewer
  - Timeline
  - RelationshipMap
  - ReducedMotionBoundary
consumes: []
verification:
  typecheck: "pnpm --dir frontend typecheck"
  test: "pnpm --dir frontend test -- design-system"
  lint: "pnpm --dir frontend lint -- src/components src/styles"
  accessibility: "pnpm --dir frontend test:a11y -- design-system"
---

# Design-system domain

## Mission

Create a compact set of high-quality visual and interaction primitives that make bespoke editorial pages cheaper to build without forcing every art movement into the same visual system.

## Principles

### Shared mechanics, variable expression

Accessibility, responsive behaviour, image loading, credits, citations, spacing logic, and interaction mechanics should be reusable. Colour, pacing, composition, layering, and movement-specific atmosphere may vary by experience.

### Primitive before pattern library

Do not pre-build dozens of speculative sections. Add a shared abstraction only after at least two real pages demonstrate the same underlying need.

### Content remains semantic

Editorial pages should not encode meaning through presentation-only component names such as `BigRedBox`. Components express semantic or interaction roles.

## Initial token groups

- typography families and scales;
- spacing scale;
- content and wide-container widths;
- border and radius scale;
- elevation and overlay scale;
- motion durations and easing;
- focus-ring contract;
- neutral surface and text roles;
- semantic success, warning, and error roles;
- responsive breakpoints.

Movement-specific palettes are experience-owned themes composed from documented token extension points. They are not added to global tokens by default.

## Initial primitives

### Structural

- `Container`
- `Section`
- `Stack`
- `Cluster`
- `Grid`
- `FullBleed`

### Typography and navigation

- `Heading`
- `Prose`
- `Link`
- `Breadcrumbs`
- `TableOfContents`

### Artwork and evidence

- `Figure`
- `ArtworkImage`
- `ArtworkCredit`
- `Citation`
- `SourceNote`
- `DetailViewer`
- `ImageAnnotation`

### Editorial visualisation

- `Timeline`
- `RelationshipMap`
- `ComparisonFrame`
- `EntityCard`

### Behaviour

- `ReducedMotionBoundary`
- accessible disclosure and dialog primitives where native HTML is insufficient;
- focus and scroll-restoration helpers only where platform behaviour does not suffice.

## Artwork image contract

`ArtworkImage` must require a rights-approved media object rather than an arbitrary string URL.

It owns:

- responsive image sizing;
- intrinsic dimensions;
- alt text rendering rules;
- optional zoom or detail behaviour;
- visible credit linkage;
- focal point support;
- loading priority controls;
- failure fallback.

It does not determine whether an image is legally publishable.

## Motion rules

- Motion must communicate spatial or editorial relationships, not merely decorate scrolling.
- Essential content cannot depend on animation completion.
- Every substantial transition requires a reduced-motion form.
- Scroll-linked effects must avoid main-thread work where possible.
- No route may ship a large animation dependency without measured justification and PM approval.

## Accessibility rules

- Primitives expose correct native semantics by default.
- Components do not suppress focus outlines without an equivalent replacement.
- Interactive image annotations are keyboard reachable and have text equivalents.
- Carousels, if introduced, require explicit controls and must not auto-advance by default.
- Colour contrast is tested across default and movement-specific themes.

## Non-responsibilities

- editorial content schemas;
- rights decisions;
- route metadata;
- movement-specific narrative sequence;
- museum API integration;
- search or discovery business logic.

## Abstraction gate

A proposed shared component must answer:

1. Which two or more concrete pages need this?
2. Which behaviour is genuinely invariant?
3. Which styling must remain configurable?
4. Does sharing reduce accessibility or performance risk?
5. Can the component remain independent of a specific movement or entity record?

If these questions cannot be answered, keep the composition local to its owning route domain.
