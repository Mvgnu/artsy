---
name: content-model
description: "Runtime-validated editorial entities, relations, authored content loaders, and canonical registries"
paths:
  schemas: frontend/src/content/schemas/
  registries: frontend/src/content/registries/
  loaders: frontend/src/content/loaders/
  relations: frontend/src/content/relations/
  authored_content: frontend/content/
  fixtures: frontend/src/content/fixtures/
  tests: frontend/tests/content-model/
exports:
  - MovementRecordSchema
  - MovementRecord
  - ArtworkRecordSchema
  - ArtworkRecord
  - ArtistRecordSchema
  - ArtistRecord
  - MotifRecordSchema
  - MotifRecord
  - TechniqueRecordSchema
  - TechniqueRecord
  - InstitutionRecordSchema
  - InstitutionRecord
  - SourceRecordSchema
  - SourceRecord
  - EditorialCollectionSchema
  - EditorialCollection
  - ComparisonRecordSchema
  - ComparisonRecord
  - EntityReferenceSchema
  - EntityReference
  - getEntityById
  - getEntityBySlug
  - getRelatedEntities
  - validateContentGraph
consumes:
  - rights.ArtworkMediaRecordSchema
  - rights.ArtworkMediaRecord
verification:
  typecheck: "pnpm --dir frontend typecheck"
  test: "pnpm --dir frontend test -- content-model"
  lint: "pnpm --dir frontend lint -- src/content content"
  validate_content: "pnpm --dir frontend content:validate"
---

# Content-model domain

## Mission

Provide one canonical, runtime-validated representation of the factual and editorial graph used across Leerraum.

This domain owns entity identity, relationships, authored-content loading, and graph integrity. It does not own page composition.

## Initial entities

### Movement

Required concepts:

- stable ID and German slug;
- display name and aliases;
- approximate start and end boundaries with uncertainty notes;
- geographic centres;
- concise orientation;
- defining visual characteristics;
- predecessor, reaction, and influence relationships;
- featured artworks and artists;
- source references;
- publication state.

### Artwork

Required concepts:

- stable ID and German slug;
- canonical and alternative titles;
- artist reference;
- creation date or range with uncertainty;
- medium, dimensions, and current institution where verified;
- movement associations;
- motifs and techniques;
- approved artwork-media references;
- factual sources;
- interpretive claim references;
- publication state.

### Artist

Required concepts:

- stable ID and German slug;
- canonical name and aliases;
- birth and death dates with uncertainty support;
- places and movement associations;
- teacher, student, peer, patron, and influence relationships where sourced;
- featured artworks;
- factual sources;
- publication state.

### Motif

Required concepts:

- stable ID and German slug;
- literal subject;
- contextual interpretations;
- period or culture applicability;
- counterexamples and ambiguity notes;
- artwork examples;
- related motifs;
- sources;
- publication state.

### Technique

Required concepts:

- stable ID and German slug;
- concise definition;
- visual effect;
- process or material notes;
- artwork examples;
- related techniques and movements;
- sources;
- publication state.

### Editorial collection

Required concepts:

- stable ID and German slug;
- title and authored thesis;
- ordered artwork references;
- per-item editorial annotation;
- explicit indexability decision;
- selection rationale;
- rights-approved promotional image;
- sources where factual claims are made.

### Comparison

Required concepts:

- stable ID and German slug;
- compared entity references;
- real user distinction or question;
- comparison dimensions;
- examples;
- authored conclusion;
- sources;
- publication state.

## Identity rules

- IDs are stable and language-neutral.
- Slugs are locale-specific presentation identifiers.
- Relationships use stable IDs, never route strings.
- Renaming a slug requires an alias and redirect record.
- Titles from institutions remain source metadata; editorial display titles may be localised without overwriting them.

## Source and claim model

The model must distinguish:

- object metadata facts;
- general historical facts;
- attributed interpretations;
- Leerraum editorial synthesis.

A source record must include enough information to identify and revisit the source. An interpretive claim should reference the source or author to whom it is attributed.

The first implementation may store claim references at section level rather than sentence level, but it must not flatten all sources into one undifferentiated bibliography.

## Authored content storage

MVP content lives in the repository.

Permitted formats may include:

- TypeScript records for strongly structured entities;
- MDX for authored prose embedded within a validated frontmatter contract;
- local JSON generated from a reviewed import process, provided it is validated and not manually treated as authoritative without review.

The implementation should choose the smallest set of formats that supports bespoke experiences and repeatable entity pages. It must avoid maintaining the same field in multiple files.

## Publication states

Initial states:

- `draft`;
- `review`;
- `published`;
- `archived`.

Only `published` records may appear in production registries, sitemaps, public search, or related-content modules.

A published entity must satisfy its completeness contract and all referenced media must pass the rights gate for their rendered contexts.

## Graph validation

`validateContentGraph` must detect at least:

- duplicate IDs or canonical slugs;
- missing relationship targets;
- unpublished targets referenced from published navigation;
- circular relations where the relation type forbids them;
- missing redirect aliases after slug changes;
- published entities without sources;
- artwork records without eligible media where the route requires imagery;
- curated collections below their minimum item count;
- orphaned published entities with no orientation path;
- invalid date ranges.

## Import policy

Museum APIs may produce draft candidates only.

An import must preserve:

- provider identity;
- provider object ID;
- raw source snapshot or retrievable source reference;
- import date;
- mapped fields;
- unmapped fields requiring review.

No imported record becomes `published` automatically.

## Non-responsibilities

- route layout and visual composition;
- rights adjudication;
- fetching live search results at request time;
- analytics;
- CMS workflow;
- user accounts;
- arbitrary AI enrichment.

## First fixture set

The foundation phase must include validated fixtures for:

- one movement;
- two artworks;
- one artist;
- one motif;
- one technique;
- one institution;
- one source;
- one editorial collection;
- one comparison;
- one rejected broken graph.
