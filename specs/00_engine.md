# Artsy engine — relationship-first art exploration

**Status: PM contract baseline, 2026-10-28.** This document supersedes the previous product direction for new work. The existing `frontend/` remains a legacy reference and separate build; no new engine code imports it. This is a staged rebuild, not an assertion that the old application already satisfies this specification.

## The product promise

Start anywhere in art and follow a meaningful connection. Go deeper from a regional period to a maker to an artwork; go sideways through a motif, material, place, workshop, documented relationship, or overlapping time. At every step answer **what connected these things, who says so, and what can I follow next?** Education offers context; curiosity controls the route.

The primary artifact is an evidence-bearing graph. Pages and timelines are views of that graph, never independent lists of facts. A beautiful graph animation without understandable relationships fails the product.

## Vocabulary and non-negotiable semantics

- `Entity` identifies a physical object, visual work, person, collective, place, regional period definition, concept, institution or event. Physical print impressions are not merged with their design or with each other.
- `Claim` is an assertion with a typed object, predicate, evidence, basis, status and optional qualifiers. Dates are claims too. Inverse navigation uses the same claim ID; it does not create another historical assertion.
- `Evidence` cites a provider, canonical record URL, field/passage locator, retrieval time and, where retained, raw-content hash. It supports a particular assertion, not every sentence in an adjacent page.
- `ImageAsset` is a digital representation with its own rights decision. Object metadata, object copyright, photograph copyright, API access and download permission are separate.
- `period` requires a named scheme and spatial scope. Multiple periods and conflicting bounds may coexist. No worldwide Renaissance/Baroque/Modern ladder. No automatic period membership from dates.
- Normalize time to astronomical years only through a documented provider conversion: 1 BCE = 0. Preserve the provider's display text and calendar. An occurrence window is not a continuous duration. Unknown and open-ended bounds are different. Do not invent a tolerance around “circa.”
- Keep production place, depicted place, findspot, institutional custody, ownership and current location distinct. Current geography does not establish historical borders or nationality.
- A museum's attribution is not our certainty: preserve attributed-to, workshop-of, circle-of and after. Anonymous and collective makers remain valid.
- Similarity and co-occurrence can suggest a route. Neither proves historical influence. The contract rejects computed `influenced_by`; editorial links require a visible interpretation label and sources.

## Runtime and data boundary

Use a pnpm workspace, strict TypeScript, Zod at authored/external boundaries, source packages consumed by thin Next.js 16 static-export sites. Start with versioned JSON snapshots and in-memory adjacency indexes. There is no need for a graph database to validate these walks. Reconsider a storage engine only against measured import, indexing and query budgets; the public contracts stay storage-independent.

```
packages/core       canonical schemas, validation, labels and date access
packages/ingest     provider adapters, pinned inputs, reconciliation, coverage
packages/graph      typed neighbors, evidence, paths, search, portable walk state
packages/media      independent image rights decisions and image selection
packages/explorer   reusable accessible exploration surface
packages/learning   RESERVED: cited guided walks and context; no runtime at M0
sites/demo          thin integration/reference site using a bounded real fixture
specs/sites/atlas.md production site specification; implementation deferred
```

Dependencies: core has no sibling dependencies; ingest, graph and media depend on core; explorer depends on core, graph and media; learning may depend on core and graph; sites compose packages. Never import `sites/` or `frontend/` from packages, and never import another package's internal path. The client imports snapshots, not ingestion credentials or Node-only adapters.

## PM-owned contract surfaces

All `packages/*/src/contract.ts`, package manifests, root configuration/lockfile, `next.config.*`, `test/architecture/**`, agent rules/workflows, CI and `specs/00_engine.md` are PM-owned. Domain code must import the contract. A builder reports an inadequate contract; the PM changes it with an explicit ruling before dependent work proceeds.

The initial contract is deliberately smaller than Linked Art/CIDOC CRM. It is informed by those models, **not a claim of standards conformance**. Future acquisition events, ownership transfers, complex time alternatives and embedded IIIF manifests require additive PM-reviewed contracts; do not smuggle them into a generic `related_to` string.

## Vertical and horizontal operations

1. **Focus** an entity from search, a regional chronology or a starter thread.
2. **Descend** from a named period definition to works or associated makers and inspect an artwork.
3. **Pivot** through an explicit node: artwork → material → another artwork; sculpture → gesture → sculpture in another region.
4. **Follow history** via sourced `study_for`, maker/workshop, or explicitly documented influence claims.
5. **Compare** two artworks with their independent dates, attributions, images and evidence. The later full comparator must support detail inspection without synchronizing unlike image scales.
6. **Retrace or branch** at a previous step. Browser back/forward, copied URL and dataset-version checks preserve orientation. Cycles are valid walks; route search bounds its work.

Prefer a focused object, a trail and grouped next steps to an unreadable global network. A force-directed graph is an optional later orientation view. Every directed relationship has a readable inverse label. No “related” cards without an explanation.

## Evidence and editorial policy

Institution records supply claims, not unquestionable truth. Preserve disputes rather than selecting a preferred source silently. Catalogue, scholarship, editorial interpretation and computed suggestions are separate bases. Superseded claims remain addressable for audit but are excluded from default discovery; disputed claims are opt-in and visibly labelled. M0 has no model-generated factual claims, embeddings or recommendation model.

Cite source URLs on every entity and every step. Do not ingest full museum essays under an assumed metadata license. Use short original context and independently recorded text licenses where licensed text is incorporated. Do not invent claims to prevent a dead end; offer return-to-trail or a transparent broader pivot.

## Publishing and build contract

Imports run separately from site builds. Replay pinned inputs without network. A build validates foreign keys, endpoint kinds, evidence, dates, rights and source-specific IDs; it fails on invalid data. The export never queries a museum API at request time. Images may use explicit licensed remote URLs at M0; missing/offline images need an honest placeholder and source link. Offline data replay does not imply offline image availability.

No blank filters or metadata-only combinations become SEO pages. A snapshot manifests schema/dataset version, source retrievals, transformation version, counts, coverage and known exclusions. Raw downloads are bounded, repeatable and have hashes. At scale, large raw data belongs in versioned external storage with a checked-in manifest; do not commit museum-wide dumps.

## Milestones and gates

- **M0, this foundation:** researched source registry; scoped specs and contracts; executable validation; a small real fixture; directional traversal, exact evidence and portable paths in `sites/demo`. The Seurat study/final painting and Gandhara/Gupta shared-gesture routes are the proof. This is not global coverage or a production release.
- **M1, trustworthy import:** actual provider adapters with paginated checkpoints, backoff, raw snapshot replay, conflict/reconciliation queues and measured coverage; Getty/Wikidata/PeriodO enrichment only after preserving references and licenses.
- **M2, exploration:** overlapping regional timeline, distinct-role geography, full comparison, faceted search, bounded path discovery and dataset-version migrations; integration smoothing and the second-site onboarding drill close the milestone.
- **M3, education and breadth:** reviewed guided walks, wider regional source partnerships and ethical/context review. Contemporary art can appear with metadata and permitted media; image scarcity must remain visible.

Technical entry gates: `pnpm spec:check`, `pnpm check`, `pnpm test`, `pnpm test:architecture`, `pnpm build`. A product/domain pass additionally needs a fresh critic inspecting the real artifact against its declared external bar. Planned packages have no executable gate yet and cannot claim green status. See `specs/implementation-status.md` and `.agent/workflows/gauntlet.md`.

## External model references

- [Linked Art model](https://linked.art/model/), especially [production](https://linked.art/model/object/production/) and [provenance](https://linked.art/model/provenance/).
- [PeriodO technical overview](https://perio.do/technical-overview/).
- [Library of Congress EDTF](https://www.loc.gov/standards/datetime/).
- [Next.js static exports](https://nextjs.org/docs/app/guides/static-exports).

Research and exact source acquisition decisions are in `specs/research/`. Source coverage is empirical and reported; “every period” is the expansion ambition, not an attainable completeness claim at this milestone.
