# Artsy: an evidence graph you can wander

Status: PM foundation, v0.1. The shipped artifact is a research prototype, not an exhaustive catalogue or a production migration. This specification supersedes the old frontend specifications **for new packages and sites only**. Existing frontend content remains untouched and untrusted until remapped with evidence.

## Product contract

Start anywhere. Every entity can become the centre of a new exploration. Move vertically through scoped periods, artists, works and details; horizontally through subjects, teachers, collaborators, patrons, materials, places, collections and documented influence. Preserve the route and the reason for each step. Educational paths and unguided curiosity use the same graph.

The initial interface is an accessible list of intelligible directions, not a force-directed hairball. A future graph diagram is a second view of the same keyboard/screen-reader-operable data. A visitor must be able to answer: what am I looking at, why is this connected, how certain is it, what else can I follow, and how do I return?

## Authority and truth

`packages/knowledge/src/contract.ts` is the canonical v0.1 type surface. All `contract.ts` files are PM-owned. Unknown input is validated by construction in `parseAtlas`; TypeScript types alone never validate external JSON. Relationships and scalar facts are assertions with their own sources, selectors, certainty and publication status. Conflicting dates remain separate assertions. There is no global numeric confidence score masquerading as truth.

Entity IDs are immutable local identifiers, not names or inferred identities. External IDs belong to source-specific identity mappings. A painting, another version, an edition, a physical impression, a photograph of it and a IIIF canvas are different things. A v0.1 `work` means the museum-catalogued physical object in this seed; conceptual-work/edition/object decomposition is a PM contract amendment before print-series ingestion.

A supported assertion means its source supports that wording, not that scholarship cannot change. Candidate/retracted claims do not enter ordinary traversal. Probable/possible claims require explicit opt-in. Disputed claims need a separate query option and visible disagreement. Shared subject, similar appearance, date overlap and collection proximity NEVER imply influence. Reverse traversal retains the original directed assertion and exposes its inverse label.

## Time, geography and worldview

There is no universal list of non-overlapping periods. Store regional, author-specific definitions; polyhierarchy and overlap are normal. Do not project Renaissance/Medieval categories onto unrelated cultures. A dynasty, culture, period, movement and technique are not interchangeable. Dates retain the original label; null bounds stay unknown. v0.1 numeric years use astronomical numbering (0 = 1 BCE) and proleptic Gregorian calendar. A source with an ambiguous conversion is quarantined rather than guessed.

Creation place, depicted place, artist activity, findspot and holding institution are different relations. Current city/country names must not be asserted as historical borders. Coordinates need precision, time scope, evidence and sensitivity review. The initial site has no geographic map and does not claim this feature complete.

## Architecture

`raw source snapshots -> source candidates -> reviewed identity mapping -> assertions -> versioned projection -> graph queries -> exploration/learning -> thin site`.

Production direction: PostgreSQL for entities, assertions, provenance and ingest jobs; immutable raw objects in object storage; deterministic materialized adjacency/search projections. Do not introduce a graph database until representative path queries demonstrate the need. In v0.1 a small checked-in JSON projection is enough; no database is deployed. Queries are bounded BFS over this projection, not scalable whole-world search.

Packages: knowledge, chronology, geography, sources, reconciliation, graph, media, exploration, learning. Dependency edges must follow `specs/domains.json`; only another package's `src/index.ts` or `src/contract.ts` is public. No package imports a site, frontend, data file, or another package's private implementation. Data and per-site settings are injected.

The target production site is a thin Next.js 16 static export. The existing Next frontend is not silently replaced. **PM ruling M0-01:** this milestone uses a dependency-light static TypeScript harness to prove the graph offline. This is an explicitly scoped test/demo artifact, not a fake Next build. **M0-02:** validators are hand-written construction functions with adversarial tests; adoption of Zod must preserve this contract and validation semantics. **M0-03:** npm runs equivalent root scripts in the current environment because pnpm and registry networking are unavailable. Create and verify a pnpm lockfile in a networked PM bootstrap before production integration.

## Gate and staged delivery

M0: frozen types, manual source-backed seed, query engine, uncertainty/rights checks, trail replay, responsive static demo, tests and review handoffs. M1: two actual provider snapshots, loss-accounting adapters, reviewed cross-provider mappings, a regional institution, and expanded non-European/anonymous/collective-object samples. M2: typed Next static routes, search shards, timeline/place views, compare, accessible image viewer and guided learning. M3: independent domain Gauntlets, cross-site onboarding drill and production release.

M1 is not complete merely because an HTTP client exists. The raw acquisition client stores evidence but never publishes a candidate. Tests must be offline; live canaries are a separate opt-in job with budgets. Builds do not call collection APIs. No automatic publishing, crawling schedules, accounts, analytics, ranking promises or LLM-authored historical claims are part of M0.

Definition of done: check + tests + architecture + build + source/rights review + fresh critic inspecting the real artifact, or a recorded PM stop. Green tests alone are never a product-quality pass.

Model references: [Linked Art](https://linked.art/model/), [PeriodO](https://perio.do/en/), [IIIF](https://iiif.io/api/presentation/3.0/). Provider documentation and access observations are recorded in `data/sources.json`.
