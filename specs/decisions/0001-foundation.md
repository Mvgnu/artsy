# 0001 — rebuild around sourced relationships

Date: 2026-10-28. Owner: PM integration.

## Decision

The user's new direction prioritizes meaningful mappings and free exploration over the existing custom editorial pages. Create a new root pnpm source-package workspace and thin demo, retaining the old `frontend/` as reference. No migration of historical assertions is assumed correct without evidence review.

Adopt `core`, `ingest`, `graph`, `media`, `explorer` now; reserve `learning` and the public atlas site until they have real artifacts. Start with six independently sourced artworks and two meaningful threads, not generated global coverage. Pin JSON data and build offline; a graph database is premature until measured scale requires one.

## Bootstrap execution

The root acted as PM to define packages/contracts/governance. Research was delegated in parallel, followed by three explicitly scoped implementation assignments. In this initial bootstrap, those assignments used disjoint paths in the PM's integration checkout rather than separately merged worktrees. This is recorded as a bootstrap limitation, **not claimed as a completed per-agent worktree Lop cycle**. All subsequent scoped cycles use the separate-branch/worktree workflow. No builder was permitted to change its own contract or another domain.

Fresh critics are spawned without conversation history and receive the real artifacts, specs, external bars and tasks. Their reports are recorded separately; a technical test result or builder self-report is not a Gauntlet pass. Foundation-level judgment cannot establish the full production bar for comparison, regional timeline, large-scale imports or learning.

## Deliberate limits

The initial time model preserves source text and outer search bounds but does not implement every EDTF/CRM temporal distinction. There is no automatic interpretation of ownership, cultural affiliation, influence or nationality. `held_by` records a catalogue collection association as observed, not legal title. Complex time/provenance requires a contract amendment before broadening intake.

The demo stores a complete path but not all transient UI state; the full comparator, map, regional lanes and branch tree are later requirements. M0 imagery is linked to explicit provider URLs; deterministic metadata replay does not imply offline media availability. Production deployment and merging the PR are outside this foundation delivery.
