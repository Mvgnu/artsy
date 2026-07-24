# Leerraum

`leerraum.ch` is a German-language visual art-history publication and discovery product.

The project is built around a simple thesis:

> Art history should feel like entering a visual world, not reading a stack of interchangeable encyclopedia pages.

Each major period, movement, or editorial topic is treated as a deliberately composed experience. Shared navigation, typography, media, citations, and accessibility primitives keep the product coherent; the flagship pages themselves may use custom TSX compositions, pacing, interactions, and visual language.

## Product pillars

1. **Period and movement experiences** — bespoke long-form entry points into Romanticism, Impressionism, Surrealism, and later topics.
2. **Artwork decoders** — visual explanations of composition, symbols, technique, context, and interpretation.
3. **Artists, motifs, and techniques** — structured child pages that deepen each editorial silo.
4. **Discovery** — browse real artworks by subject, mood, colour, place, period, and visual relationship.
5. **Provenance-first media** — every published image carries a source, rights status, credit line, and review record.

## Current phase

The repository is in **PM bootstrap mode**. No application implementation exists yet.

The first deliverables are:

- product brief and success criteria;
- content and information architecture;
- image-rights policy;
- domain specs following the repository's Løp governance model;
- sequenced implementation backlog.

Implementation must not begin in a domain until its spec exists and the owning paths, exports, dependencies, and verification commands are understood.

## Proposed stack

- Next.js App Router
- React Server Components by default
- TypeScript in strict mode
- Tailwind CSS
- Zod validation at authored-content and external-data boundaries
- Static generation for evergreen editorial pages; server rendering only where request-time behaviour is genuinely required
- First-party content stored in the repository for the MVP

The stack is deliberately database-free until a validated feature requires mutable user or editorial state.

## Documentation

- [`docs/product/product-brief.md`](docs/product/product-brief.md)
- [`docs/product/information-architecture.md`](docs/product/information-architecture.md)
- [`docs/product/content-rights-policy.md`](docs/product/content-rights-policy.md)
- [`docs/product/roadmap.md`](docs/product/roadmap.md)
- [`frontend/specs/`](frontend/specs/)

## Working rules

- German is the launch language.
- Editorial usefulness outranks page count.
- No arbitrary Google Images ingestion.
- No image is publishable without provenance and rights metadata.
- Flagship experiences may be custom-built; factual entities remain structured and reusable.
- Shared primitives must not force every movement into the same visual template.
- Empty, thin, or generated combinations are not indexable.
- Accessibility and performance are release requirements, not later polish.
