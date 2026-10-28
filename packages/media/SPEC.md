---
name: media
description: "Let a visitor inspect real artwork detail while keeping image-specific rights and credit recoverable."
status: foundation
paths:
  owned:
    - packages/media/src/
  tests:
    - packages/media/test/
exports:
  - canDisplay
  - imageFor
consumes:
  - core.ImageAsset
verification:
  check: "pnpm --filter @artsy/media check"
  test: "pnpm --filter @artsy/media test"
  build: "pnpm --filter @site/demo build"
bar:
  reference: "Rijksmuseum Collection Online Comparator"
  property: "Let a visitor inspect real artwork detail while keeping image-specific rights and credit recoverable."
---

# Media

Read `specs/00_engine.md`, `.agent/workflows/lop.md`, and `.agent/workflows/gauntlet.md`. Every `contract.ts` and package manifest is PM-owned even inside an owned directory. Specs describe the target; current status is recorded in `specs/implementation-status.md`.

M0 implements only the bounded foundation slice; full acceptance and Gauntlet tasks are specified below.

## Public behavior

`canDisplay(asset)` returns an explicit allowed/denied decision with a reason; `imageFor(corpus, artworkId)` selects an eligible asset or returns undefined. Selection never deletes the underlying artwork. Metadata, source text, digital image, original object and API access terms are independent.

M0's conservative allowlist covers explicitly reviewed CC0 and public-domain statements, including their recorded canonical URIs. It requires display permission, rights evidence, credit and a secure asset URL. A museum name, public URL, `image_id`, artist death date or open metadata license is insufficient. CC-BY and CC-BY-SA need their obligation handling before expansion; they are not silently assumed equivalent to CC0. Denied does not mean unlawful; it means outside this implementation's recorded publication policy.

Display, caching and derivatives are separate capabilities. Showing a permitted remote original does not authorize creating crops, storing it, or distributing altered files. Preserve record-specific credit and rights URLs. Do not replace culturally restricted/unavailable imagery with generated imitations.

## Viewer contract with explorer

The image is uncropped by default, with useful alt text and credit/rights available near it. The explorer owns controls and layout; media owns eligibility/selection. Loading failure keeps title, relationship navigation and original source link. Metadata-only records remain first-class. A larger view preserves attribution and a path back. Remote image hosts may fail independently of a reproducible data build.

## Future detail/compare work

Support IIIF service/manifest declarations only when discovered in provider data. Respect version/profile, `requiredStatement`, rights and supported sizes; do not fabricate IIIF endpoints from unrelated image URLs. A comparator shows two independently dated/attributed objects and lets users inspect each at useful scale with keyboard/touch controls. Never pretend synchronized zoom creates equivalent physical dimensions. The current native enlargement is not the completed comparator.

## Acceptance

Exercise an allowed Met image, allowed AIC image, missing image, failed network request, restricted asset, unknown rights, unsupported license and independently false display/cache permissions. Rights/credit links remain discoverable. A denied image URL must not be emitted into published `img` markup. No image-generation step belongs to artwork retrieval.

## Gauntlet artifact and task

Reference: https://www.rijksmuseum.nl/en/about-collection-online and https://iiif.io/api/presentation/3.0/ . Inspect actual `canDisplay` output and the rendered static demo at 390×844 and 1440×900. Compare the Seurat study and final work, inspect brushwork, recover both attributions/licenses, then trigger a missing image and continue the thread. A critic must judge actual readable detail and recovery, not just URL presence.

**M0 expected gap:** native enlargement provides a first look but not a two-work detail comparator. This domain cannot receive its full external-bar pass until that property is implemented and inspected. A correct rights-policy check is a narrower technical result.
