---
name: graph
description: "Show why a connection exists and let a visitor traverse either direction without changing its meaning."
status: foundation
paths:
  owned:
    - packages/graph/src/
  tests:
    - packages/graph/test/
exports:
  - createGraph
  - neighbors
  - explain
  - findPath
  - encodeWalk
  - decodeWalk
  - compareTime
  - search
consumes:
  - core.Corpus
  - core.Claim
  - core.TimeSpan
  - core.validateCorpus
  - core.labelFor
  - core.predicateRegistry
verification:
  check: "pnpm --filter @artsy/graph check"
  test: "pnpm --filter @artsy/graph test"
  build: "pnpm --filter @site/demo build"
bar:
  reference: "Getty Art & Architecture Thesaurus — concept records, broader/narrower and associative relationships"
  property: "From an object or concept, distinguish the kind and direction of each connection, inspect its source, and traverse back without changing the underlying assertion."
---

# Graph

Read `specs/00_engine.md`, `.agent/workflows/lop.md`, and `.agent/workflows/gauntlet.md`. Every `contract.ts` and package manifest is PM-owned even inside an owned directory. Specs describe the target; current status is recorded in `specs/implementation-status.md`.

## Visitor task and ownership

A visitor should be able to follow an interesting connection, understand why it exists, inspect the evidence, and retrace it. The graph domain owns the semantics of that operation. It does not own page layout, editorial interpretation, source acquisition, images or the canonical data model.

Writes are limited to the owned implementation, graph tests and this specification. Every `contract.ts`, all manifests, root configuration, architecture tests and workflow files remain PM-owned. Import canonical types from `@artsy/core`; do not fork them or use assertions/casts to make mismatches disappear. `packages/graph/src/contract.ts` is the frozen public API.

The package has no site names, browser storage, network calls, source credentials or Node-only production dependencies. The site supplies a versioned corpus; the graph never fetches live data during a visitor's walk.

## Public behavior

| Export | Contract |
|---|---|
| `createGraph(corpus)` | Calls `core.validateCorpus`; throws a clear validation error on invalid input. Produces entity/claim lookup maps plus outgoing and incoming claim indexes from one parsed snapshot. Scalar claims remain in outgoing/audit indexes but cannot become neighbor entities. |
| `neighbors(graph, id, options?)` | Returns actual entity-valued claims in either direction. An inverse uses the same claim ID and the registry's inverse label. Options filter predicates, opt into disputes and bound output. Missing entities return an empty list. |
| `explain(graph, claimId)` | Returns that claim's exact evidence records and their source records, including disputed or superseded claims for audit. It does not attach every citation on a nearby entity. Missing claims return `undefined`. |
| `findPath(graph, from, to, options?)` | Stable breadth-first search over asserted claims. Returns a shortest available route within the limits. A route means the displayed sequence of relations, never a new direct influence claim between endpoints. |
| `encodeWalk(walk)` | Strict version-1 state validation, then UTF-8/base64url serialization. Returns only the URL-safe token, without `#walk=`. Throws a readable error rather than truncating or silently restarting. |
| `decodeWalk(token, graph)` | Treats all input as untrusted. Returns a typed failure instead of throwing for malformed, oversized, unsupported-version, stale-dataset or invalid-continuation input. Checks every entity, claim, direction and adjacent pair. |
| `compareTime(left, right)` | Returns only `possible-overlap`, `disjoint` or `unknown`. It neither establishes actual contemporaneity nor generates a historical claim. |
| `search(graph, term)` | Deterministic lookup across labels, aliases and identifiers, with Unicode normalization and diacritic folding. Matches exact values, prefixes, substrings and query words. It does not infer thematic or historical connections. |

Graph contract types are re-exported from the public package entry point.

### Discovery and evidence invariants

- Default discovery and route search include `asserted` claims. `neighbors(..., { includeDisputed: true })` additionally includes disputes. Superseded claims are never discovery edges.
- A historical source's assertion is not certainty. The returned `Claim` retains its basis, status, qualifiers and evidence; the explorer must not flatten them away.
- Explicitly stored disputed steps can be replayed, since choosing their claim IDs is deliberate. The explorer must display their status. A stored superseded step fails with an explicit reason.
- No `related_to` escape hatch, undocumented reverse assertion, date-based period assignment, automatic identity merge or computed influence is permitted.
- The same target can appear through multiple distinct claims; competing assertions are not collapsed into one synthetic certainty. A self-edge is shown once, in its forward direction.
- Shared-motif traversal is two real steps through a concept. The engine does not invent a direct edge between the objects.
- No path does not mean no historical relationship. `not-found` means the reachable asserted subgraph was exhausted; limits that prevented exhaustion yield `budget-exceeded`.

### Stable order and limits

Neighborhoods sort by registry group, normalized target label, target ID, claim ID and direction. Route expansion uses claim-ID order within outgoing then incoming indexes. Reordering source arrays does not change the result. There is no random or personalized ranking at M0.

| Operation | Default | Hard limit / behavior |
|---|---|---|
| Neighbor output | 50 | 200; zero requests no output. An empty predicate filter matches nothing. |
| Search output | 100 maximum | Query length 200 characters; empty/oversized queries return no matches. |
| Path depth | 8 edges | 63 edges so a found path fits a 64-step walk. |
| Path visited nodes | 1,000 | 10,000; includes the initial node. Zero returns budget exceeded. |
| Path edge examination | — | 100,000 eligible adjacency visits, then budget exceeded. |
| Portable walk | — | 1–64 steps and at most 8,192 encoded characters; every ID at most 200 characters. |

Public neighbor display limits must not hide a path from the route search. Depth truncation is reported distinctly from absence. Cycles are valid in a user-authored walk; breadth-first search tracks visited nodes to avoid looping. Budgets constrain this in-memory foundation, not a claim of production-scale performance.

## Portable walk protocol

`WalkState` contains schema version `v: 1`, exact dataset version and an ordered step array. The initial step has only its node ID. Every continuation must carry the real claim ID and `forward` or `reverse` direction. It cannot teleport, use a scalar claim as an edge, or use the correct claim in the wrong direction. Unicode entity IDs round-trip.

The site owns storing the token in a URL fragment, browser back/forward integration, branch UI and copying it. Private notes and user identifiers are absent from the protocol. The decoder never evaluates input as HTML, a URL or code, and rejects unknown fields. It does not load another dataset automatically. A version mismatch requires an explicit product-level restore or migration flow, which is deferred beyond M0.

## Time semantics and explicit M0 limits

Use normalized astronomical integers supplied by core/ingest: `0` is 1 BCE, not missing data. Date rendering belongs to core/explorer. Overlapping known historical bounds yield only **possible** overlap because an occurrence window is not a continuous duration. Missing bounds, unknown semantics and unsupported before/after cases yield `unknown`. Provider search bounds marked `index-window` always yield `unknown`, in either operand: they support retrieval, not an assertion about when an object was made. For example, an indexing range of 1820–1842 alongside the display date “ca. 1830–32” cannot establish contemporaneity with an event in 1825. Non-overlapping nominal circa ranges also yield `unknown`: the graph cannot invent an uncertainty tolerance to establish separation.

The M0 `TimeSpan` contract has nullable outer bounds, a qualifier and semantics. It does not yet encode independent earliest/latest start and end bounds, full EDTF alternatives, or every distinction between open and unknown endpoints. The conservative result is intentional and recorded here; packages must not add a second temporal representation. A future PM contract amendment is required for richer temporal reasoning.

`held_by` means the source's institutional collection/custody relationship. It cannot prove legal ownership. Full ownership-transfer histories, a map of historically changing borders, inferred visual similarity and authority reconciliation are outside this runtime slice.

## Acceptance cases

1. Follow the Met Seurat study to Chicago's finished painting and back. Both views identify the same `study_for` claim and exact supporting source passage; the reverse says `has study`.
2. Follow a Gandharan Buddha through the named gesture to a Gupta-period Buddha. Each hop has its own evidence; no direct influence claim is added.
3. A date or description remains inspectable as a scalar claim and never appears as a fabricated entity in neighbors.
4. Invalid evidence/node references fail index creation before a visitor can encounter a plausible but unsupported link.
5. Disputed claims require deliberate discovery opt-in, superseded claims stay out of discovery, and both remain auditable by exact claim ID.
6. Reorder fixture arrays and obtain the same neighborhood and route order. A route beyond the first 200 display neighbors is still searchable.
7. Exhaust the path budget and receive `budget-exceeded`; do not describe it as a missing historical connection. Cyclic graphs terminate.
8. Round-trip a Unicode/cyclic walk; reject malformed UTF-8/JSON, unknown fields, wrong versions, missing nodes, wrong directions, nonadjacent claims and length/character overflow without a decoder crash.
9. Compare a BCE range across internal year zero without treating it as null. Distinguish possible overlap from guaranteed contemporaneity; incomplete/circa evidence remains uncertain. A provider indexing range produces `unknown` even when its numeric bounds overlap another date, and cannot establish separation either.
10. Search an accented name, alias or non-Latin label with stable results. Empty and unrelated queries do not return invented semantic matches.

Synthetic fixtures in `test/` exercise these semantics and are explicitly labelled nonhistorical. Real-history acceptance uses the pinned corpus rendered by the demo. Neither category substitutes for the other.

## Verification and real artifact

Run the frontmatter commands, then `pnpm test:architecture`. `pnpm --filter @site/demo build` writes the integration artifact to `sites/demo/out/`. Serve it with `python3 -m http.server -d sites/demo/out 4173` for browser inspection. The graph implementation alone is not the judged artifact; the critic follows its relationships through the rendered demo and opens their evidence.

Technical checks are entry gates. This spec does not record an independent Gauntlet pass. Record the actual command results and critic decision in the milestone review/status files, including a PM stop if the integration artifact or external comparison cannot be inspected.

## Gauntlet task: understandable, reversible connections

**Reference:** [Getty AAT concept records and relation structure](https://www.getty.edu/research/tools/vocabularies/aat/about.html). Getty's documentation distinguishes broader/narrower, equivalence and associative relations, with contextual notes and sources. The comparison is the ability to understand the kind and direction of a connection, not the reference's visual styling or corpus size. A specific linked concept record can be selected by the critic from the official AAT interface.

**Fresh critic brief:** receive only this goal/bar, the frozen rules, the served demo URL and the pinned data version. Do not receive the builder's report, reasoning or conversation. Inspect the real export on mobile and desktop. Start at the Seurat study, identify why the Chicago painting is offered, open its supporting passage, follow it and reverse it. Then repeat through the Buddha gesture concept. Compare the visibility and meaning of relationship types and source context to the reference.

The critic must explain which artifact better lets an unfamiliar visitor answer all three questions: **what is the relation, who says so, and what does reversing it mean?** A pass requires concrete observed behavior and source locators. If the reference wins, name the single largest remaining gap and return it to this domain or to the PM if its ownership lies elsewhere. The critic cannot edit. Repeat without a fixed round count until an argued pass or an explicit PM stop.

If the export or required comparison cannot be reached, report a failed/unjudged round with the actual attempted access. Do not substitute this specification, a test report or the builder's screenshot for independent artifact inspection. Whole-site smoothing and the second-site onboarding drill belong to the milestone Gauntlet, after the relevant UI exists.

## Later cycles

- Cursor-based neighborhoods and measured import/index/query budgets on a materially larger corpus.
- Faceted and multilingual search beyond name lookup, with explicit ranking and coverage explanations.
- Time lenses after an additive PM temporal contract, without automatic movement membership.
- Reviewed snapshot migrations and branch-preserving shared histories.
- Explicit computed comparison candidates with derivation witnesses, separate from historical assertions.

None of these is implied by the M0 function names or by green checks.
