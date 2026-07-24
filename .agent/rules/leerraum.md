---
trigger: always_on
---

# Leerraum engineering rules

Leerraum is a German-language, visual art-history publication and discovery product for `leerraum.ch`.

## Product invariants

1. Art-period landing pages are authored experiences, not interchangeable article templates.
2. Shared components exist to raise quality and consistency, not to flatten every period into the same layout.
3. Public pages must be useful without JavaScript whenever practical.
4. Evergreen editorial routes default to static generation; runtime rendering requires a documented reason.
5. Artwork rights and source metadata are product data, not optional caption text.
6. The default image policy is allowlisted public-domain or openly licensed material. A journalistic quotation exception is never treated as blanket permission.
7. Every published page belongs to a clear topical silo and exposes deliberate contextual links within that silo.

## TypeScript and architecture

- TypeScript must run in strict mode.
- Do not use `any`, `z.any()`, or `z.ZodTypeAny` in business logic.
- Use `unknown` at untrusted boundaries and narrow it explicitly.
- Use `Record<string, unknown>` for genuinely dynamic object shapes.
- Prefer Server Components. Add `"use client"` only at the smallest interactive boundary.
- Validate external API and content data at ingestion boundaries.
- Do not duplicate canonical domain types across folders.
- Do not create a database merely because one may be useful later. The MVP should use typed static content until product requirements justify persistence.

## Content and image safety

Every artwork record used by the product must include:

- stable internal identifier;
- title and creator;
- source institution and source URL;
- image URL or local asset reference;
- declared licence or public-domain status;
- attribution text where required;
- review status and review date.

Do not publish an artwork image when its rights state is unknown. Do not use images copied from arbitrary search results as production assets.

## Domain governance

This repository uses the Løp domain workflow in `.agent/workflows/lop.md`.

Before implementation:

1. Identify the domain.
2. Read `specs/<domain>.spec.md`.
3. Modify only the paths owned by that domain.
4. Record new exports and dependencies in the spec.
5. Run every verification command declared by the spec.

Creating domains, changing shared architecture, modifying cross-domain contracts, or changing the rights policy requires PM mode.

## Completion standard

- No silent placeholders in production paths.
- Mark constrained or deferred work with a concrete `TODO` linked to a GitHub issue.
- Typecheck, lint, and relevant tests must pass before implementation work is considered complete.
- When a domain export changes, identify and create follow-up work for consuming domains.
