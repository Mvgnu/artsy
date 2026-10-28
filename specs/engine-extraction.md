# Integration and extraction plan

1. Keep `frontend/`, its lockfile, old routes and existing CI intact. Do not import any historical prose as factual graph data without re-reading its source.
2. This PR adds root `packages/` + `sites/demo` and PM specs. Root verification applies only to the new engine. It is not a verification of the legacy frontend.
3. Next PM bootstrap runs pnpm in a network-enabled environment, produces the root lockfile and verifies a frozen install. The existing frontend dependency versions are not silently upgraded.
4. Freeze reviewed contracts, then run the source acquisition and canonical identity work before widening scope. Normalize raw snapshots into reviewed candidates. No bridge may read package-private files.
5. Build `sites/atlas` as a thin Next.js 16 export after an ADR proves the route/data boundary. Pages consume the same projection and package APIs. Old route redirects need an audited old-ID/new-ID map; never guess from title slugs.
6. Move only general UI patterns into packages. Per-site copy, initial entity IDs and routing stay in sites. Dataset manifests and source policies stay data-driven. No copied legacy Biolab ownership rules apply to these packages.
7. Each milestone ends in a fresh critic review and an onboarding drill with an Edo-only throwaway configuration. Any necessary package edit is a failed reusability drill, not a permitted site fork.

Next contracts to amend before production: immutable source snapshots/revisions; evidence-backed external-ID mappings; production and custody events; authority-specific period extents with geography; conceptual work/physical object/edition hierarchy; dated and scoped image permissions. The current small graph intentionally does not pretend these are complete.
