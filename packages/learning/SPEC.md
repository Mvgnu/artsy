---
name: learning
description: "Explain one cross-cultural thread with cited context and a useful next question without inventing a historical link."
status: planned
paths:
  owned:
    - packages/learning/src/
  tests:
    - packages/learning/test/
exports:
  - GuidedWalk
  - ContextNote
consumes:
  - core.Corpus
  - graph.GraphIndex
verification:
  check: "pnpm --filter @artsy/learning check"
  test: "pnpm --filter @artsy/learning test"
  build: "pnpm --filter @site/demo build"
bar:
  reference: "The Met Heilbrunn Timeline of Art History"
  property: "Explain one cross-cultural thread with cited context and a useful next question without inventing a historical link."
---

# Learning

Read `specs/00_engine.md`, `.agent/workflows/lop.md`, and `.agent/workflows/gauntlet.md`. Every `contract.ts` and package manifest is PM-owned even inside an owned directory. Specs describe the target; current status is recorded in `specs/implementation-status.md`.

Reserved domain: no executable package exists yet. Verification commands are required targets for its provisioning milestone, NOT passing checks.

## Purpose and ownership

Make a route understandable without taking away the user's choice of direction. Own authored/contextual learning content and composable guided-walk logic; consume the existing graph. Do not own factual entities, source acquisition, edge creation, ranking, image rights or site branding. No runtime dependency from graph to learning is allowed.

## Planned contract to freeze before implementation

A guided walk names its language, educational question, starting entity, ordered steps, each step's existing claim IDs/directions, short original context, supporting evidence IDs, optional close-looking prompt and alternative branch anchors. The full route is pinned to a dataset version. A context note identifies whether it restates a catalogue claim, summarizes scholarship or offers an editorial interpretation. Translation does not change the claim.

If an intended lesson cannot be connected with supported claims, revise the route or label an editorial comparison explicitly. Never fabricate a teacher, influence or causal chain to make a neat ending. Generated draft prose stays unpublished until a human/editorial review confirms evidence and wording; no unsupported facts are minted into the graph.

## First two exercises

1. **How did this painting develop?** Met study → Chicago final painting → maker/material. Prompt a comparison of brushwork using the Met's documented relationship, with evidence available at the moment it matters.
2. **What changes when a gesture travels?** Gandharan sculpture → abhaya mudra → Gupta sculpture. Ask the visitor to compare medium, posture, time and regional context. Explicitly say that shared iconography alone does not establish direct transmission between these surviving objects.

The user can leave either route, explore an unplanned edge and recover the guided return point. No mandatory quiz, login, completion streak or gamification gate is required.

## Acceptance

Reject invalid/dangling route steps, evidence absent from the snapshot, silent snapshot substitution, unsourced factual context and references to denied images. Render terms on demand rather than blocking exploration with a long lecture. Text links, keyboard traversal and readable mobile layout match the explorer's conventions. A reader can explain both why two objects connect and what the evidence does not establish.

## Gauntlet

Reference: https://www.metmuseum.org/essays/timeline-of-art-history . Actual artifact: a built cited route and its validated route data, not the spec or a proposed outline. A fresh critic follows the gesture route, branches into material, returns, and explains the historical claim versus the broader comparison using the cited sources. Record one largest comprehension/context gap. **No artifact or review exists at M0; status is not run.**
