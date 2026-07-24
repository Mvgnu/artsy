---
name: platform
description: "Application shell, routing infrastructure, metadata, observability, and global failure states"
paths:
  root_layout: frontend/src/app/layout.tsx
  root_page: frontend/src/app/page.tsx
  global_styles: frontend/src/app/globals.css
  route_metadata: frontend/src/app/metadata/
  platform_lib: frontend/src/lib/platform/
  platform_components: frontend/src/components/platform/
  tests: frontend/tests/platform/
exports:
  - SiteConfigSchema
  - SiteConfig
  - buildCanonicalUrl
  - buildPageMetadata
  - JsonLd
  - AppShell
  - GlobalNavigation
  - GlobalFooter
  - RouteErrorBoundary
consumes:
  - design-system.tokens
  - design-system.primitives
verification:
  typecheck: "pnpm --dir frontend typecheck"
  test: "pnpm --dir frontend test -- platform"
  lint: "pnpm --dir frontend lint -- src/app src/lib/platform src/components/platform"
  build: "pnpm --dir frontend build"
---

# Platform domain

## Mission

Provide the stable application frame and web-platform contracts used by every public route without absorbing editorial business logic.

## Responsibilities

- root layout, document language, viewport, and global providers;
- homepage shell and route-family entry points;
- canonical URL creation;
- metadata and social-card contracts;
- sitemap, robots, feeds, and manifest support;
- JSON-LD rendering utilities;
- global navigation and footer;
- global loading, not-found, and error behaviour;
- analytics event transport and consent integration;
- observability hooks;
- security headers and platform-level performance defaults;
- draft/preview isolation at the platform boundary.

## Non-responsibilities

- defining artwork, artist, movement, motif, or media-rights entities;
- rendering movement-specific experiences;
- implementing search ranking or discovery filters;
- deciding image publication rights;
- owning all shared components;
- ingesting museum data.

## Architecture rules

- Use React Server Components by default.
- Add a client boundary only for a documented interaction requirement.
- Static generation is the default for evergreen public routes.
- Request-time rendering must be justified by request-time state.
- Route-domain metadata is supplied to platform builders through typed inputs; the platform domain does not import route pages.
- Social images may use only assets approved by the rights domain for promotional reuse.
- The root layout must not contain movement-specific visual styling.
- Global navigation must remain usable without JavaScript.

## Homepage contract

The homepage is a platform-owned route but consumes curated, typed summaries through domain exports rather than reaching into route implementation folders.

It should include:

- brand proposition;
- one primary featured journey;
- route-family navigation;
- selected discovery collections;
- recently published or substantially updated content;
- rights and editorial transparency links.

It must not degrade into an infinite chronological feed.

## Metadata requirements

Every public page must be able to produce:

- title;
- description;
- canonical URL;
- locale;
- Open Graph and social metadata;
- indexability state;
- substantive modification date;
- structured-data payloads matching visible content.

Missing required metadata must fail validation before production publication.

## Performance budget

Initial targets on representative mobile conditions:

- LCP at or below 2.5 seconds at the 75th percentile;
- CLS at or below 0.1;
- INP at or below 200 milliseconds;
- no unbounded hero-media download;
- no client-side JavaScript for static prose or decorative composition alone.

Route domains may set stricter budgets.

## Accessibility requirements

- German document language at launch;
- visible focus states;
- complete keyboard navigation;
- landmark and heading hierarchy;
- reduced-motion alternatives;
- no information conveyed solely through colour or animation;
- skip navigation;
- error messages associated with their context.

## Escalation boundary

Changes to dependencies, root tooling, deployment, CI, `next.config.*`, or environment contracts remain PM/infrastructure work and are not implicitly granted by this spec.
