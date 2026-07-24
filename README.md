# Leerraum

Leerraum is a German-language visual art-history publication and discovery product for [leerraum.ch](https://leerraum.ch).

The product combines handcrafted art-period experiences with structured pages about artworks, artists, symbols, techniques, and comparisons. The editorial foundation is intended to compound into a searchable art-discovery layer rather than become another flat archive of generic biographies.

## Product thesis

Museum databases are excellent when a visitor already knows what to search for. Leerraum should help people who ask less structured questions:

- What defines Romanticism visually?
- Why does this painting feel unsettling?
- What does the mirror, dog, skull, or storm signify here?
- Which works connect one movement to the next?
- Where can I find real, reusable historical art matching a mood or motif?

Each major art period is a topical silo with a bespoke `page.tsx` journey. Shared components provide craft and accessibility without forcing every period into the same layout.

## Planned stack

- Next.js App Router
- React and TypeScript in strict mode
- Tailwind CSS
- Server Components by default
- Static generation and revalidation for evergreen editorial pages
- Typed static content for the MVP; persistence only when product requirements justify it
- Open-access museum sources with explicit rights metadata

## Repository workflow

This repository is spec-first and uses the Løp domain workflow:

1. Product and architecture are defined in `docs/`.
2. Domain ownership and contracts are defined in `specs/*.spec.md`.
3. Implementation work must stay inside the writable paths declared by its domain spec.
4. Cross-domain changes return to PM mode or become linked GitHub issues.

Read `.agent/rules/leerraum.md` and `.agent/workflows/lop.md` before implementation.

## Initial product domains

- `platform`: Next.js foundation, global shell, metadata, observability, and quality gates.
- `content`: canonical editorial records, MDX/content loading, taxonomy, and link graph.
- `artwork-catalog`: artwork metadata, image sources, rights review, and museum ingestion adapters.
- `period-experiences`: bespoke period landing pages and reusable visual-storytelling primitives.

## MVP direction

The first release should prove one complete vertical slice rather than maximize page count:

1. production-grade platform shell;
2. one deeply built pilot silo;
3. several linked artwork, artist, symbol, and technique pages;
4. a rights-safe artwork registry;
5. sitemap, structured data, internal links, and basic analytics.

Recommended pilot: **Romantik**, with Caspar David Friedrich as the central connective thread. It offers strong visual identity, public-domain source availability, recognizable search demand, and natural links into landscape, the sublime, symbolism, Gothic revival, and later movements.
