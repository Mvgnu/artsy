# Leerraum frontend

The application is a Next.js App Router project using strict TypeScript, Tailwind CSS,
pnpm, ESLint, Prettier, and Vitest.

## Requirements

- Node.js 22 or newer.
- pnpm 11.4 or newer.

The repository's `pnpm-workspace.yaml` records the dependency-build allowlist and strict
package-manager policy. Do not bypass that policy with `--dangerously-allow-all-builds`
or by disabling dependency scripts globally.

## Setup

```bash
cp frontend/.env.example frontend/.env.local
pnpm --dir frontend install
pnpm --dir frontend dev
```

## Release checks

```bash
pnpm --dir frontend format:check
pnpm --dir frontend typecheck
pnpm --dir frontend lint
pnpm --dir frontend test
pnpm --dir frontend test:a11y
pnpm --dir frontend test:performance
pnpm --dir frontend build
```

All checks run for frontend pull requests. The current root page is a non-editorial
foundation shell and the site remains `noindex` until complete, validated editorial
routes are available.

## Route groups

- `src/app/(editorial)/` is reserved for movements, artworks, artists, motifs,
  techniques, and approved comparisons.
- `src/app/(discovery)/` is reserved for search, browsing, and curated discovery.

Do not add placeholder `page.tsx` files. Public routes must satisfy their domain
specification, content validation, metadata, source, and artwork-rights gates.
