# Frontend domain specs

These specs implement the repository's Løp governance model for Leerraum.

## Domain map

| Domain | Purpose | Primary consumers |
|---|---|---|
| `platform` | Application shell, metadata, routing infrastructure, observability, and global failure states | all route domains |
| `design-system` | Tokens and reusable presentational primitives | platform and route domains |
| `rights` | Artwork-media provenance, licensing state, credits, and publication gate | content-model and route domains |
| `content-model` | Runtime-validated entities, relations, content loaders, and registries | all editorial route domains |
| `editorial-entities` | Repeatable artwork, artist, motif, technique, and comparison pages | art-experiences and discovery via links |
| `art-experiences` | Bespoke period and movement journeys | users entering a movement silo |
| `discovery` | Search, filters, curated collections, and graph exploration | users browsing across silos |

## Dependency direction

```text
rights ───────────────┐
                     v
               content-model
                     |
       ┌─────────────┼────────────────┐
       v             v                v
editorial-entities  art-experiences  discovery
       ^             ^                ^
       └──── design-system + platform ┘
```

`platform` and `design-system` must not import route-domain code.

`rights` must not import authored content or route-domain code.

`content-model` may consume rights schemas, but rights review decisions must not depend on page rendering.

## PM-owned cross-cutting files

The following files or concerns are not granted to a single bubble domain and require PM or infrastructure escalation until a dedicated infrastructure spec exists:

- `frontend/package.json` and lockfiles;
- `frontend/next.config.*`;
- root TypeScript, lint, test, and formatting configuration;
- deployment configuration;
- CI workflows;
- environment-variable contracts;
- creation of a new domain;
- changes that move ownership between domains.

The initial scaffold issue may modify these in PM mode. After scaffolding, cross-cutting changes should be isolated and documented.

## Shared rules

- TypeScript strict mode is mandatory.
- Do not use `any`, `z.any()`, or `z.ZodTypeAny` for business logic.
- Runtime schemas own external and authored-data validation; infer TypeScript types from those schemas.
- Do not create generic catch-all shared types folders.
- A domain exports only the contracts listed in its spec.
- A new cross-domain dependency must be added to `consumes` before merge.
- Every published image must pass the rights-domain publication gate.
- Verification commands in each spec are release requirements once the relevant tooling exists.
- Unfinished production work must be visible as a scoped TODO with an issue reference or remain unreachable from production routes.
