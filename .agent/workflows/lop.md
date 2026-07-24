---
description: Domain-scoped development using the Løp bubble-agent pattern
---

# Løp workflow

Løp keeps product domains independently understandable and limits accidental cross-domain edits. The repository is not divided into isolated copies of world state; it contains routing rules that tell each task what it owns, exports, and consumes.

## Operating modes

### PM mode

Use PM mode when:

- bootstrapping the product or creating a new domain;
- defining or changing cross-domain contracts;
- changing shared architecture, project configuration, or the image-rights policy;
- splitting work into implementation issues.

PM mode may create and update files under `specs/`, `docs/`, `.agent/`, and shared infrastructure. It must leave explicit domain ownership behind for implementation agents.

### Domain mode

Use domain mode for a scoped implementation task within one existing domain. A domain agent has full repository read access but may only write to paths declared by its domain spec.

## Spec location and structure

Each domain has a spec at `specs/<domain>.spec.md`.

```yaml
---
name: period-experiences
description: "Handcrafted art-period landing experiences and their shared composition primitives"
paths:
  routes: src/app/epochen/
  components: src/components/experience/
  tests: src/components/experience/__tests__/
exports:
  - PeriodExperienceShell
  - StickyChapterNav
consumes:
  - content.period-records
  - artwork-catalog.artwork-records
verification:
  typecheck: "npm run typecheck"
  test: "npm test -- period-experiences"
  lint: "npm run lint"
---
```

The prose below the frontmatter defines purpose, user outcomes, requirements, non-goals, interfaces, acceptance criteria, and known risks.

## Hard write gate

A domain agent may write only to:

- files and directories listed under `paths.*` in its spec;
- its own spec file when exports or consumes change;
- test files inside its owned test path.

A domain agent may not write to:

- paths owned by another domain;
- `.agent/`, root configuration, or shared infrastructure unless explicitly owned;
- another domain spec;
- rights-policy documents;
- a persistence schema or migration outside its declared ownership.

When work requires an out-of-domain change, stop that part of the implementation and create a GitHub issue describing the required contract or shared change. Do not quietly broaden the task.

## Domain workflow

1. Read `specs/<domain>.spec.md` in full.
2. Read the canonical types or records referenced by `paths.types` or `consumes`.
3. Confirm the exact writable paths.
4. Implement only the issue acceptance criteria.
5. Run every command in `verification`.
6. Update `exports` and `consumes` when contracts changed.
7. Create dependent-domain issues when an exported contract changes.

## Type and content saturation

Before changing implementation, load the canonical domain records and schemas. Do not infer field names from component usage or duplicate a type locally. External museum and content data must be validated at its ingestion boundary before becoming canonical product data.

## Event propagation

A spec export is a contract. When it changes:

1. search specs for consumers of `<domain>.<export>`;
2. assess whether each consumer remains compatible;
3. create an issue for every required consumer update;
4. link those issues from the originating pull request.

## Issue handoff template

Every implementation issue should include:

- **Domain:** exact spec name;
- **Writable paths:** copied from that spec;
- **Outcome:** user-visible or operational result;
- **Acceptance criteria:** verifiable statements;
- **Consumes:** contracts the implementation must read;
- **Verification:** exact commands;
- **Out of scope:** adjacent work that must not leak into the issue.

## Completion standard

Implementation is complete only when:

- acceptance criteria are met;
- typecheck, lint, and relevant tests pass;
- new unfinished work is represented by linked issues rather than silent placeholders;
- changed exports and consumers are reflected in specs;
- artwork rights metadata remains complete for every added image.
