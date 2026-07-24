---
name: rights
description: "Artwork-media provenance, licensing state, attribution, and publication eligibility"
paths:
  schemas: frontend/src/rights/schemas/
  policy: frontend/src/rights/policy/
  provider_rules: frontend/src/rights/providers/
  validation: frontend/src/rights/validation/
  fixtures: frontend/src/rights/fixtures/
  tests: frontend/tests/rights/
exports:
  - RightsStatusSchema
  - RightsStatus
  - ArtworkMediaRecordSchema
  - ArtworkMediaRecord
  - ProviderRightsRuleSchema
  - ProviderRightsRule
  - evaluatePublicationEligibility
  - assertPublishableMedia
  - buildArtworkCredit
consumes: []
verification:
  typecheck: "pnpm --dir frontend typecheck"
  test: "pnpm --dir frontend test -- rights"
  lint: "pnpm --dir frontend lint -- src/rights"
---

# Rights domain

## Mission

Make it impossible for an unreviewed or insufficiently sourced artwork image to reach a production page silently.

This domain translates the operational policy in `docs/product/content-rights-policy.md` into runtime-validated records and deterministic publication rules.

## Canonical statuses

The implementation must expose statuses equivalent to:

- `approved-open`;
- `approved-licensed`;
- `quotation-review-required`;
- `blocked`.

The names may change only through a spec update and migration plan.

## Required record fields

An artwork-media record must capture at least:

- stable media ID;
- linked artwork ID;
- source institution;
- authoritative object page URL;
- exact asset URL or local asset reference;
- source access date;
- underlying artwork rights status;
- reproduction or photograph rights status;
- licence label and licence URL where applicable;
- complete credit line;
- creator attribution;
- intrinsic width and height;
- alt text;
- editorial purpose;
- reviewer identity and review date;
- review notes;
- permitted reuse contexts;
- derivative or crop relationship where applicable.

Types must be inferred from runtime schemas. Do not create a parallel handwritten interface.

## Publication contexts

Eligibility must be evaluated for a specific context rather than as one global boolean.

Initial contexts:

- `inline-editorial`;
- `hero-editorial`;
- `gallery`;
- `recommendation-card`;
- `discovery-result`;
- `open-graph`;
- `newsletter`;
- `advertising`.

An asset approved through quotation review may be eligible only for the exact `inline-editorial` use that was reviewed. It must not automatically become eligible for promotional or decorative contexts.

## Deterministic gate

`assertPublishableMedia(record, context)` must fail when required data is missing or the status does not permit the requested context.

There is no production fallback to rendering the URL anyway.

Expected failure examples:

- status is `quotation-review-required` with no completed review;
- status is `blocked`;
- source page is missing;
- credit line is empty;
- licence evidence is required but absent;
- context is `open-graph` but approved reuse is editorial-inline only;
- a crop references no approved parent asset;
- the source provider rule has changed and requires re-review.

## Provider rules

Provider-specific rules should be small data or policy modules, not scattered conditionals in route code.

A provider rule may describe:

- recognised rights labels;
- required attribution fields;
- whether hotlinking is preferred or prohibited;
- allowed image URL patterns;
- API fields carrying public-domain status;
- caching guidance;
- terms URL;
- date last reviewed.

Initial provider candidates:

- The Metropolitan Museum of Art;
- Art Institute of Chicago.

Adding a provider requires policy review and fixtures covering an approved and rejected record.

## Security and integrity

- Treat external URLs and API metadata as untrusted input.
- Validate protocols and hostnames.
- Do not allow arbitrary HTML in credit lines.
- Do not infer approval from filename, age text, or image availability.
- Preserve the original source record when normalising fields.
- Rights state changes must be reviewable in version control.

## Non-responsibilities

- determining factual artwork metadata beyond fields needed for rights review;
- downloading or transforming images;
- rendering image UI;
- editorial interpretation;
- route-level layout;
- providing legal advice.

## Test matrix

Tests must cover:

- each status in each publication context;
- missing mandatory provenance fields;
- an open-access provider record;
- a provider image whose artwork is public domain but whose exact asset lacks an open designation;
- quotation-reviewed inline use;
- attempted quotation asset reuse in a card or social image;
- blocked and unknown sources;
- crop inheritance and restriction;
- stale provider-policy review dates.
