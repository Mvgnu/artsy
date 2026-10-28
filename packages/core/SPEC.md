---
name: core
description: "Keep creator attribution, uncertain time, and distinct place roles intact through one normalized round trip."
status: foundation
paths:
  owned:
    - packages/core/src/
  tests:
    - packages/core/test/
exports:
  - CorpusSchema
  - validateCorpus
  - labelFor
  - dateClaims
  - predicateRegistry
consumes:
  []
verification:
  check: "pnpm --filter @artsy/core check"
  test: "pnpm --filter @artsy/core test"
  build: "pnpm --filter @site/demo build"
bar:
  reference: "Linked Art 1.0 production and provenance model"
  property: "Keep creator attribution, uncertain time, and distinct place roles intact through one normalized round trip."
---

# Core

Read `specs/00_engine.md`, `.agent/workflows/lop.md`, and `.agent/workflows/gauntlet.md`. Every `contract.ts` and package manifest is PM-owned even inside an owned directory. Specs describe the target; current status is recorded in `specs/implementation-status.md`.

M0 implements only the bounded foundation slice; full acceptance and Gauntlet tasks are specified below.

## Own and consume

Own schema-adjacent validation, label selection, date-claim selectors and adversarial tests. The canonical Zod schemas and predicate registry in `src/contract.ts` are PM-owned. Export inferred types from that same schema; do not maintain interface copies. Core has no dependency on sources, graph, media, UI, site configuration or a database.

Input is `unknown`; `validateCorpus` returns a discriminated success/failure result with actionable paths. A structurally typed object does not bypass validation. Prefer retaining valid source uncertainty to coercing data until it fits.

## Invariants

1. IDs are stable and unique within their record collections. Every entity, source, evidence, claim, image and derivation reference resolves. Identity is separate from the human label and may carry multiple evidence-bearing external IDs.
2. Every preferred entity label and external identity is backed by entity/identifier evidence. M0 supports one preferred label per language plus aliases; it does not claim full BCP47 validation or transliteration authority.
3. A claim has one registered predicate, typed object, nonempty evidence, status and basis. Subject/object kinds and scalar types are checked. Inverse traversal does not duplicate the claim.
4. `asserted` means a source asserts it, not absolute certainty. `disputed` and `superseded` preserve records. `attribution` distinguishes accepted, attributed-to, workshop-of, circle-of, after and unknown. Missing artist data creates no universal fictional “unknown artist.”
5. Dates preserve display wording, calendar, precision, qualifier and occurrence-window/index-window/duration/lifespan meaning. A provider search interval is typed `index-window`, not historical uncertainty; graph overlap must return unknown for it. Normalized years use astronomical numbering; no JavaScript Date arithmetic for historical bounds. Bounds must be ordered. No automatic parsing of arbitrary EDTF is claimed.
6. A period entity requires a named source scheme and spatial scope. Membership is a sourced claim and is many-to-many. Reject computed membership from date overlap. Do not treat a dynasty, style, culture or movement as identical just because names co-occur.
7. Place predicates retain their roles. `held_by` targets an institution and makes no legal-ownership assertion. `produced_at`, `found_at` and depiction are distinct. No coordinates, modern border assignment or ownership transfer is inferred.
8. Artwork `workLevel` distinguishes a physical object from visual work, edition, series, performance and architecture. An image represents an artwork; it is not its identity. Print impressions remain distinct until an explicit, reviewed equivalence supports a merge.
9. Computed claims identify algorithm/version/input claims. Derivation references must exist and be acyclic. Computed `influenced_by` is rejected. Default public discovery of future computed suggestions requires a separately reviewed contract/UX policy.
10. Image rights evidence is mandatory. Unknown/restricted rights cannot silently opt into open display/cache/derivative flags. Open records name a license/statement; published media uses HTTPS. Exact license eligibility is owned by media, not guessed here.

## M0 implementation and limits

Runtime schemas, referential/predicate/derivation checks, `labelFor` and `dateClaims` exist. `dateClaims` returns all asserted date claims, so a later modification is not silently overwritten by initial production. Source-specific conversion logic belongs to ingest and is versioned there.

`TimeSpan` currently has outer bounds and a qualifier; it cannot fully represent independently uncertain start/end events or every open-versus-unknown case. Source text survives; graph overlap is conservative. Richer boundaries, alternate disjunctive date sets, acquisition/ownership events, units/dimensions and full Linked Art export require PM contract amendments before M1/M2 work that needs them. **Do not claim full CIDOC CRM/Linked Art/EDTF conformance.**

## Acceptance and real artifact

Inspect `data/seed/atlas.json` and actual `validateCorpus` output. The six real objects test BCE, anonymous makers, multiple period contexts, separate source display/index bounds, a modification date and a sourced cross-institution relation. Synthetic tests must also reject a dangling evidence ID, duplicate ID, wrong predicate endpoint, unsupported computed influence, cyclic derivation and unknown-period scheme.

## Gauntlet

External references: https://linked.art/model/object/production/ and https://linked.art/model/provenance/ . A fresh critic reads the normalized objects, compares the exact original provider fields, and uses the demo evidence panel to explain who/when/where without turning custody into ownership or a search range into an exact date. Compare the preserved property, not the breadth of the ontology. Return the single largest loss of meaning or an argued bounded pass. The larger contract remains incomplete even if this six-work round passes.
