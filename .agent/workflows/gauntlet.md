---
description: Build, inspect the real artifact against an external bar, and repeat; the quality loop around Artsy's Lop domains.
---

# Gauntlet — the quality loop

Lop asks whether a domain built its spec. Gauntlet asks whether the result is worth using. Tests prove properties of our implementation; they cannot establish that the intended experience is good. No number of passing tests substitutes for looking at the artifact.

## The bar

Every package and site spec declares `bar.reference` and `bar.property`: a named external work and one observable property. A reference alone is a mood board. A property alone is self-assessment. Each spec also names the actual artifact, source/reference URLs, a decisive task and an adversarial state.

For example:

```yaml
bar:
  reference: "Getty AAT hierarchy and associative relationships"
  property: "Understand why an edge exists, follow it in either direction, and recover the same evidence."
```

We compare that property, not the entire museum's resources or collection size. Do not lower a bar to whatever the implementation happens to do.

## The loop

1. The PM defines one independently judgeable visitor/data task and assigns its write bubble.
2. The builder implements and runs technical gates.
3. The PM spawns a **fresh critic with no builder history**. Provide the goal, spec, contract, rules, build/snapshot identity, artifact location, external bar and task. Do not send the builder's report, reasoning or self-evaluation.
4. The critic inspects the real artifact and external reference. If the reference wins, return **one largest remaining gap** with reproducible evidence.
5. The builder fixes that gap within its gate. The PM handles contract/ownership changes. Repeat without a preset round count.
6. At a milestone, a fresh smoothing critic uses the whole demo. Once two sites exist, inspect them side by side for coherent interaction conventions.
7. A separate fresh engineer stands up a throwaway site from the demo and specs. Every edit needed under `packages/` is an onboarding gap; a successful single demo does not prove reuse.

Stop with an argued pass, when gains no longer matter to the defined goal, or on an explicit PM stop. **A PM stop with a recorded gap is not a pass.** A narrower M0 diagnostic is not a completed production Gauntlet.

## Inspect the artifact appropriate to the domain

| Domain | Required real artifact |
|---|---|
| core | Serialized adversarial specimens, actual validation output and their evidence rendering |
| ingest | Pinned input bytes/hashes, normalized corpus, import/rejection/reconciliation/coverage output and an actual replay |
| graph | Real query/explanation/path/codec output and the served demo using it |
| media | Actual permitted and denied image decisions, rendered images, attribution and failed-image behavior |
| explorer | Served static export driven with pointer and keyboard, including restored URL and empty/error states |
| learning | Rendered cited guided walk and the underlying existing claim IDs |
| site | Whole exported site, representative routes, coverage and integration states |

`pnpm --filter @site/demo build` exports `sites/demo/out/`. Serve it with `python3 -m http.server 4173 --directory sites/demo/out`. The tested artifact is the static export, not the development server. Next development behavior can conceal static-routing defects.

For UI domains inspect **390×844** and **1440×900**, including actual interactions. Screenshots document the observation; they do not replace walking the page. Inspect HTML titles/headings/links and keyboard focus. Trigger missing image, stale walk, disputed attribution and no-match states as relevant. Check at least one plain-server deep link.

For data domains inspect records and run the relevant transformation. A good screenshot cannot prove preservation of uncertain dates or the difference between two print impressions. Synthetic tests are useful admission gates; the external bar uses real source records.

## Critic rules

- Read-only. A critic who edits is now a builder and a different critic is needed.
- Inspect the actual artifact first. No grading a summary, diff, report or screenshot alone.
- If the artifact cannot be reached, **fail the round as artifact unavailable**. Record the actual attempted path/command/error.
- Open the external reference. If unavailable, record the checked URL/error; the PM may name an equivalent external reference or defer the comparison. Never silently count a failed comparison as a win.
- Use blind A/B where practical. Evidence attribution may make anonymity impossible; say so.
- Return one gap per domain round. A long wishlist diffuses judgment.
- A pass must be argued using observable behavior, source evidence and the defined property.
- Do not claim every period, complete accessibility, museum-wide data correctness or live source health from a tiny fixture.

## Report format

Store critic results under `specs/reviews/<milestone>-<domain>-<round>.md` through the PM (critic returns text, PM records it). Include artifact/build/snapshot IDs, reference URL, viewport/tasks or data commands, observed result, verdict (`pass`, `gap`, `artifact-unavailable`, `comparison-unavailable`), the one gap, evidence paths and any PM stop decision. Technical test output and quality judgment stay separate.

At M0, scaffolded/planned domains must say **not run**. Source documentation review is research; schema tests are validation; neither is a product Gauntlet pass. A source license does not grant rights to every image linked in its record. A checked blind spot is a limitation; an untried capability is not.

## Definition of done

`check`, `test`, `test:architecture`, data validation and static build pass; the spec is satisfied; an independent critic inspected the actual artifact and argued that it meets the named bar. Alternatively the PM explicitly stops with the gap retained in the domain spec and release status. Never mark a paused foundation as production-ready.
