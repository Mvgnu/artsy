---
name: explorer
description: "Complete a surprising multi-hop walk while knowing where each hop came from and being able to resume it."
status: foundation
paths:
  owned:
    - packages/explorer/src/
  tests:
    - packages/explorer/test/
exports:
  - Explorer
consumes:
  - core.Corpus
  - core.labelFor
  - core.dateClaims
  - core.predicateRegistry
  - graph.GraphIndex
  - graph.WalkState
  - graph.createGraph
  - graph.neighbors
  - graph.explain
  - graph.search
  - graph.encodeWalk
  - graph.decodeWalk
  - media.imageFor
verification:
  check: "pnpm --filter @artsy/explorer check"
  test: "pnpm --filter @artsy/explorer test"
  build: "pnpm --filter @site/demo build"
bar:
  reference: "Google Arts & Culture X Degrees of Separation"
  property: "A visitor can follow a five-step thread across three relationship types, understand every hop, and retrace or resume it without losing the current work."
---

# Explorer

Read `specs/00_engine.md`, `.agent/workflows/lop.md`, and `.agent/workflows/gauntlet.md`. Every `contract.ts` and package manifest is PM-owned even inside an owned directory. Specs describe the target; current status is recorded in `specs/implementation-status.md`.

## What this domain is responsible for

Turn the graph into an inviting visit. The visitor looks at one work or entity,
chooses a named connection, and carries an intelligible trail along. The image
and the user's next choice take visual priority. Every relationship can be
questioned through its evidence; no database terminology is required to navigate.

The interface supports educational looking and open-ended curiosity. It must
not insist on an essay, quiz, account, or prescribed historical order before the
visitor can follow a connection. A global force-directed graph is not the main
interaction.

## Ownership and public surface

Own `src/**` except the PM-owned `src/contract.ts`, this spec, and `test/**`.
Do not edit package manifests, site files, snapshots, rights policies, graph
semantics, or another package's implementation. Import only other packages'
public exports. No source HTTP requests occur inside explorer.

Public component: `Explorer({ corpus, initialEntityId, title? })`. The host
imports `@artsy/explorer/style.css` once. The CSS is scoped under the `ar-`
component classes; the site controls document metadata and global body reset.
`title` changes the brand label. All entities, starter threads, names, artwork
images, counts, relationships, and source facts derive from the supplied corpus.
No museum, artist, or geographic name is embedded in component logic.

## Interaction contract

### Focus and looking

- Display a single H1 naming the current entity. Show its kind and work level
  where relevant. Preserve full provider date display strings; a modification
  date must not disappear behind an approximate integer.
- Render only `media.imageFor`-approved assets, with uncropped `object-fit:
  contain`, descriptive alternative text, and independent image credit/rights.
  A network image failure leaves the identity, source and graph usable.
- Metadata-only art gets an explicit unavailable-image state. Persons, places,
  periods and concepts get a purposeful non-image focus instead of a broken
  artwork placeholder.
- An image may be enlarged in an accessible native dialog; Escape/close returns
  to the visit. The source image opens separately for further inspection.
- Do not add a generated reconstruction or invented factual paragraph to fill
  missing data. Entity descriptions must come from the validated corpus.
- Named period schemes and spatial scope remain visible on period entities.

### Choosing a connection

- Group graph-provided neighbors by meaningful intent: maker, work history,
  subject, material, context, place. Use the canonical forward/inverse label.
  An inverse hop references the same historical claim; explorer invents none.
- Show the destination name and image when available. A separate, keyboard-
  accessible `Why this connection?` control opens that exact claim's evidence.
- Initially show up to three neighbors per group and offer `Show all N` for
  the complete group returned by the graph. Counts are actual counts, not copy.
- Default discovery excludes disputed statements. The visitor can opt in;
  disputed, editorial and computed relations must remain visibly distinguished.
  Superseded claims do not become navigation options.
- A node with no recorded exits says so and offers the trail/other starters.
  It must never manufacture a relationship to remove a dead end.

### Trail and orientation

- Each stop retains its entity ID, entering claim ID and traversal direction.
  Encode the whole walk with the graph codec, including dataset version.
- A normal hop pushes a browser history entry. Back/forward, reload and a copied
  URL reconstruct the same sequence, including reverse hops and cycles.
- Clicking an earlier stop starts a branch there. The former future remains in
  browser history; it is not silently spliced onto the new route.
- Search and starter cards clearly begin a new trail. Modifier-click on real
  navigation links permits opening a separate visit in another tab.
- Invalid, stale, disconnected or oversized shared routes produce a visible
  explanation and an explicit fresh-start action. Do not silently truncate.
  The graph codec owns maximum length and validation; explorer catches errors.
- Following a connection, choosing a starter, returning to an earlier stop,
  or using browser Back/Forward
  moves keyboard focus to the current entity heading and scrolls to the top of
  its artwork/entity section. The new work must not remain above the viewport
  after a choice from a long neighbor list. This scroll is immediate, without
  motion animation, and runs after the restored walk has committed. While
  explorer is mounted, history scroll restoration is manual so the browser
  cannot move the visitor back to a deep neighbor-list offset. Restore the
  previous browser scroll-restoration setting when explorer unmounts.
  Popstate never pushes a history entry. Initial hydration/reload preserves
  the first-load presentation without a forced arrival scroll or focus.
  The visitor can skip directly to the focus and navigate the trail by keyboard.

### Evidence

- For an edge, show the exact claim subject/predicate/object, status, basis,
  attribution qualifier and explanation when present. Computed claims name the
  derivation and input claim IDs.
- Display every supporting source record URL, source name, precise field or
  passage locator, retrieval date, and metadata terms. Date claims have their
  own evidence control. Entity-level sources do not pretend to justify every
  adjacent historical statement.
- Separate metadata attribution from image credit. A source logo or a generic
  homepage is insufficient evidence for a claim.
- Keep the evidence panel usable at 390px without horizontal page overflow;
  long IDs/URLs/locators wrap.

## M0 implemented surface and explicit limits

M0 implements the component above against a bounded real fixture, with dynamic
starter detection for a `study_for` relation and a shared `depicts` concept.
The site labels it a small, sourced first collection. It makes no claim to
represent all periods, cultures, artists, places, or disputed interpretations.

The shared-subject starter selects a concept motif, not a depicted place; this
keeps it a distinct route from a study and final work depicting the same location.
Image failure handling inspects completed images after hydration as well as
handling later load errors, so a failure before event handlers attach is visible.

The current explorer requests a maximum of 200 neighbors and says when that
ceiling is reached. It displays up to 12 search results with a narrowing hint.
Full neighborhood pagination, faceted search, time/place lenses, a full
side-by-side zoom comparator, cross-version route migration, and saved branching
trees are M2 work. A native image enlargement is not that full comparator.
The M0 portable state contains the complete walk; temporary search text,
dispute-filter state, image dialog and evidence-panel selection are not encoded.

No AI historical assertions, embeddings, or visual-similarity edges are added.
Remote images may fail independently of an otherwise valid offline data build.
The immutable snapshot, rather than an external live API, drives navigation.

## Verification and meaningful cases

Run the three frontmatter commands plus `pnpm test:architecture` at integration.
Explorer's unit suite verifies server-rendered user-facing semantics and route
branch/share helpers. Fictional UI specimens are named as fixtures and cannot
be mistaken for imported historical data. These checks do not prove interaction
quality or general accessibility conformance.

Required browser integration observations, owned by the demo/site verification:

1. Follow the sourced preparatory study to its final work, inspect the exact
   evidence, reverse the link and find the maker through another connection.
2. Follow a shared depicted concept between two artworks, and confirm the UI
   calls it a shared subject rather than historical influence.
3. Reload a multi-hop URL, open a copied URL in another tab, then use browser
   back/forward and branch at an earlier stop. Compare every entity and claim
   ID in the restored walk.
4. Open a source record, a date's evidence, and the enlarged image. Close the
   dialog with Escape. Walk the core task using only the keyboard.
5. Exercise metadata-only art, a person/concept node, an unavailable remote
   image, an invalid route token, and a deliberately incompatible dataset
   version. Preserve the rest of the interface in every state.
6. Inspect 390×844 and 1440×900 renderings. Check image containment, H1 wrapping,
   visible focus, touch-operable next/evidence controls, and no page overflow.
7. Scroll to a low neighbor or starter and follow it. Confirm the new artwork
   section begins in the viewport and its title is immediately locatable at
   both widths; repeat with an earlier-stop branch and a metadata-only entity.
   Then use browser Back and Forward and confirm the same visible arrival,
   complete heading, coherent keyboard focus, and exact route in the URL.
   Include a work → period/concept → Back → Forward sequence after scrolling
   deeply into a neighbor list. Confirm initial loads and modifier-clicked
   new tabs still begin normally and no popstate adds a history entry.
   Repeat with reduced motion enabled.

## Gauntlet review

**Reference:** [Google Arts & Culture — X Degrees of Separation](https://artsandculture.google.com/experiment/x-degrees-of-separation/tgHqISGUjQHkGQ?hl=en),
with [the actual experiment](https://artsexperiments.withgoogle.com/xdegrees/).
That experiment links visual features. Its relevance here is inviting,
legible continuity through a surprising route, not evidence for historical
causality. Artsy's historical edges remain source-supported.

**Critic artifact:** the actual static-exported `sites/demo/out/`, served at a
real URL with its pinned snapshot, not the builder's account or a component
diff. Open the named reference as well. Inspect both viewports and interactions.
The critic gets goal/spec/bar/artifact/source references, no builder history or
report, and has no write permission.

**Task:** from a work, choose a five-step route crossing at least three kinds of
connection. For each step, explain why it is offered and identify the supporting
source. Return to an earlier stop, take a different direction, and reopen the
copied trail. The visitor should retain orientation without knowing the dataset
or needing to read long biographies. In a second task, reach a shared subject
in another tradition without mistaking classification for transmission.

The critic must give one largest remaining gap, with observed steps, screenshots
or interaction evidence, and the external property it fails. A pass must be
argued using the actual visit. Repeat without a fixed round count. An unavailable
artifact fails the round; a stopped round records the unresolved gap and PM
decision instead of asserting a pass. A later smoothing critic judges the
composed demo, and a separate-site onboarding drill checks reuse.

**Current judgment status:** pending independent artifact review. Passing type
checks or SSR tests does not change that status.
