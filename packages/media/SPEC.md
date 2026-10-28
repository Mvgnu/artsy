---
name: media
description: View the correct image under the correct rights
status: implemented-partial
paths:
  owned:
  - packages/media/src/
  tests:
  - packages/media/test/
exports:
- canDisplay
- MediaDecision
consumes:
- knowledge
verification:
  check: pnpm --filter @artsy/media check
  test: pnpm --filter @artsy/media test
  build: pnpm build
  architecture: pnpm test:architecture
bar:
  reference: IIIF Presentation 3 rights/requiredStatement + NGA object image credit
  property: Can a visitor identify which physical work the image depicts, inspect
    its reuse basis, and continue when it is unavailable?
---

# View the correct image under the correct rights

Own object-image binding, rights eligibility, descriptive alternatives, derivatives and future IIIF handling. Metadata rights do not grant image rights. A public-domain painting does not automatically make every photograph free. Unknown/restricted assets fail closed. The v0.1 permission enum remains blocked until permission scope/expiry is implemented.

Acceptance: work and rights-source references resolve; safe URL, alt and credit required; unknown and restricted images never render; remote load failure leaves title and traversal available. Future tests cover missing canvas, wrong object/version, multi-page manuscripts, deep zoom with keyboard fallback, revocation and culturally restricted images.

Critic artifact: rendered work, original institutional image and record-specific rights evidence. Compare correct binding and credit with the NGA source. Largest gap: this seed references remote images and does not include a rights-audited, offline media cache or full visual descriptions.

## Write gate and review

All `contract.ts`, manifests, lockfiles, root configuration, `.agent/`, `specs/00_engine.md` and architecture tests are PM-owned even if nested in owned paths. The domain SPEC may update exports/consumes/verification, but a boundary or contract change requires a PM ruling. Read both `.agent/workflows/lop.md` and `.agent/workflows/gauntlet.md`. A critic gets the goal, this bar and the built artifact—not the builder report. One largest gap per round; critic never edits implementation. End with changed paths, commands/results, disagreements and remaining defects.
