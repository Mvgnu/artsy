# artsy relationship model — research and proposed contracts

Prepared 2026-10-28. Design proposal for the PM-owned contracts, not an assertion that the MVP implements the entire model. Sources were checked through official documentation and museum records. Primary observations are cited; product decisions are explicitly recommendations.

## Decision

Make the evidence-backed assertion the unit of meaning. Entities are stable addresses; assertions explain how two things relate, when the relation applies, who says so, and what uncertainty remains. The explorer offers a readable neighborhood and preserves the walk. It never presents every available relationship at once.

M0 needs only a handful of predicates and a small honest corpus. The schema must leave room for disputed attribution, multiple period systems, unnamed makers, works versus impressions, and ownership versus location before ingestion expands. Those distinctions cannot be repaired reliably after collapsing the source data.

## What the standards actually support

- **CIDOC CRM** provides an event-oriented cultural-heritage model. E13 Attribute Assignment can document who asserted a property or relation; E52 Time-Span supports uncertain temporal bounds. Use this as a semantic reference, not a requirement to expose a full RDF ontology to visitors. Version 7.3.2 documentation: https://cidoc-crm.org/html/cidoc_crm_v7.3.2.html .
- **Linked Art** models production as an activity with actors, time and location. Workshop attribution is not equivalent to authorship by a named master. It separately describes former/uncertain attribution and object provenance events. Its guidance warns that explicit attribute-assignment structures increase complexity; artsy's simpler claim ledger is a deliberate application profile, not a claim of automatic Linked Art compliance. https://linked.art/model/object/production/ ; https://linked.art/model/assertion/ ; https://linked.art/model/provenance/ .
- **PeriodO** identifies published definitions of named periods with temporal bounds and geographic associations. The same period name may have competing definitions. A PeriodO authority groups definitions sharing a source; membership in one authority does **not** mean those periods form a coherent, exhaustive partition of history. Broader/narrower links in its authoring model stay within an authority; derivations can cross authorities. https://perio.do/technical-overview/ ; https://perio.do/guide/ .
- **EDTF** offers syntax for approximate/uncertain dates, unspecified digits, intervals, and unknown versus open endpoints. Do not claim full EDTF conformance unless the implemented parser supports the required features of its declared level. Preserve the raw value and enumerate the supported subset. https://www.loc.gov/standards/datetime/ .
- **Wikidata statements** have qualifiers, references and ranks. Flattening them to bare property-value pairs discards meaning. Its date representation includes precision and calendar model; its help notes that before/after fields are not used for uncertainty in the way one might expect. Import qualifiers rather than guessing from a timestamp. https://www.wikidata.org/wiki/Help:Statements ; https://www.wikidata.org/wiki/Help:Dates .

## Contract status

This research informed the frozen contract at `packages/core/src/contract.ts`. Use that file, not the broader proposal below, as the executable type authority. The M0 model deliberately defers nested uncertain start/end bounds, acquisition events and richer design/edition relations. Those require PM-reviewed additions before implementation.

### Predicate registry

The PM-owned registry defines allowed subject/object kinds, forward label, inverse label, whether a relation is symmetric, whether it is traversable, and whether computed claims are allowed. Runtime validation rejects invalid combinations. It is not a free-form tag field.

| Predicate | Meaning and invariant |
|---|---|
| `created_by` | Artwork to agent, with creator role and attribution qualifier; detailed production event can be added without losing the source assertion. |
| `produced_at` | Place of making; cannot be inferred from nationality, institution, or depicted location. |
| `depicts_place` | What the work depicts. This does not assert that the maker went there. |
| `found_at` | Findspot, separate from production place; event/time qualifiers where known. |
| `held_at` | Physical location/custody, explicitly as-of a source observation. Does not establish ownership. |
| `owned_by` | Owner is an agent, not a geographic place; qualify time and source. |
| `classified_in_period` | Source classification within a named period definition/scheme, never manufactured from date overlap. |
| `broader_period` | Authority-scoped period hierarchy, not a universal history tree. |
| `has_material`, `uses_technique` | Controlled concepts with source wording preserved; oil paint and canvas are not one material. |
| `depicts_motif` | Iconography/gesture/subject asserted by a source, not just a computer-vision guess. |
| `study_for`, `after_work`, `part_of_series` | Specific artwork/work relationships with item-level evidence. |
| `influenced_by` | Historical assertion with a named source and attribution of interpretation; never populated by an embedding score. |
| `exemplifies_design` | Physical impression to visual design when evidence supports the identification; crucial for Japanese prints and multiples. |
| `created_during`, `born_during`, `active_during` | Time values; each separate fact needs evidence. An artist's lifetime does not date every work. |

`contemporary_with`, `shares_motif`, `shares_medium`, and `visually_similar` are generated navigation candidates. A candidate carries its witness assertions and derivation version. It must say what was compared. These names do not become historical influence claims. Unknown dates cannot yield a positive contemporaneity result.

### Assertions, status and truth

`asserted` means a source asserts it, not that artsy has established certainty. `disputed` requires evidence of dispute; missing evidence alone is not a dispute. Keep a source's assertion date/revision separate from the historical validity interval. Record conflicting dates and attributions side by side; a display preference may choose a current catalogue claim without deleting the others. No numerical confidence percentages absent a calibrated model and a user-relevant interpretation.

Generated editorial text is a presentation layer over selected claims and cannot mint new assertions. LLM/vision suggestions stay in a nonpublic review queue with method/version until accepted with evidence. Mechanical joins such as identical canonical material IDs can be displayed as computed comparisons, not curatorial intent.

## Temporal invariants

1. Use astronomical integer years internally: 1 BCE is 0; 2 BCE is -1; 1000 BCE is -999. BCE/CE formatting uses human numbering, never shows a historical year 0. Do not use JavaScript `Date` for historical year arithmetic. PeriodO explicitly demonstrates the `1000 BCE` to `-0999` conversion: https://perio.do/guide/ .
2. Store source wording and source calendar. Do not turn a year-precision Wikidata value padded as January 1 into an exact birthday.
3. `open` and `unknown` differ. Unknown is not negative/positive infinity. An open-ended reign is not the same as a missing death date.
4. `circa 1830` stays approximate. Never silently invent ±5 or ±10 years. A provider's explicit index bounds can be stored with its normalization provenance, while display retains the source uncertainty.
5. A painting dated `1830–1832` may mean creation sometime in that window, not a production process lasting three years. Store whether the source supports a duration or only an occurrence window; ambiguous stays ambiguous.
6. For duration spans with uncertain boundaries, possible overlap uses outer bounds. Guaranteed overlap uses inner bounds only when nonempty and documented. Otherwise the result is `possible` or `unknown`, not a boolean fiction.
7. A temporal neighbor means `around the same time` with the matched claims shown. It never asserts contact, mutual awareness, shared culture or influence.
8. Reject earliest > latest, impossible normalized order, missing normalization provenance, and a known-to-unknown conversion caused by parsing failure. Parsing failure should quarantine a record while retaining raw text.

## Geography and periodization

A place entity has historic names and gazetteer identifiers. Source claim dates and geographical scope determine which labels or boundaries apply. Modern countries can be navigation aids, but cannot substitute for historical regions. Coordinates may be uncertain or generalized; do not emit a precise map pin from a modern-country centroid as though it were a findspot.

A period definition must identify its bibliographic/source authority and spatial scope. `Edo period`, `European Baroque`, `Mughal`, and `Gupta` occupy overlapping timelines; they are not sequential steps in one ladder. An undated object can still have a source-asserted period classification. An object dated within an interval need not be a member of that period. Period membership can be many-to-many and source-dependent.

In M0, a separate scheme node may be overkill: a typed `periodDefinition` with sourceId, spatialScopeIds and date-claim IDs is acceptable, provided the PM freezes one canonical shape and no other package forks it.

## Identity and reconciliation

- Mint stable internal IDs. Provider IDs and URLs are external identifiers with evidence, not title-derived canonical identities.
- Same source+native ID is an idempotent upsert, preserving prior record revisions. Cross-source title+artist+year similarity generates a candidate only.
- Auto-link only through a verified explicit equivalence or reviewed match. Keep link type `same entity`, `same design`, `same edition`, `related object`, or `possible match`; these are different assertions.
- Merge is reversible: preserve previous IDs as aliases, original source records and a decision log. Never destroy a disputed source value.
- Two museum impressions of The Great Wave are two physical objects. They may share a design node. An image photograph is never a third duplicate artwork.

## Traversal and reproducible walks

Recommended graph API:

```ts
interface NeighborhoodRequest {
  snapshotId: SnapshotId;
  focus: EntityId;
  direction: 'outgoing' | 'incoming' | 'both';
  lens: 'context' | 'time' | 'place' | 'making' | 'ideas' | 'influence';
  includeDisputed: boolean;
  includeComputed: boolean;
  limit: number;
  cursor?: string;
}
interface TraversalCandidate {
  target: EntityId;
  witnessAssertionIds: AssertionId[];
  traversedDirection: 'forward' | 'inverse';
  basis: Assertion['basis'];
  explanation: string; // deterministic typed template, evidence remains inspectable
  relationKind: string; // validated registry identifier
}
interface Walk {
  version: 1;
  snapshotId: SnapshotId;
  start: EntityId;
  steps: Array<{
    from: EntityId;
    to: EntityId;
    assertionIds: AssertionId[];
    direction: 'forward' | 'inverse';
    lens: NeighborhoodRequest['lens'];
  }>;
  seed?: string; // for repeatable shuffle; never a hidden user identifier
}
```

Each inverse traversal reuses the original assertion ID. Do not duplicate the fact just to support moving backward. A two-hop comparison through a concept includes both witness claims. Back/forward preserves the previous branch and filters; branching creates a new walk branch rather than erasing history.

Deterministic candidate order: apply explicit user constraints; exclude forbidden/unavailable edges; prefer direct sourced relationships appropriate to the chosen lens; diversify relation kind/region/medium among the first suggestions; break ties with stable IDs. A surprise control may favor unfamiliar branches, but it cannot weaken the evidence policy. Show the reason rather than a mysterious relevance score. If only two candidates exist, show two; do not invent more.

The snapshot ID and ranking version pin a reproducible graph. Static pages must not depend on live Wikidata or museum requests at navigation time. Share paths in a URL fragment with a documented bounded serialization, or export a small JSON file. Private notes and inferred user preferences stay out of public URLs. No account is necessary. If the referenced snapshot is unavailable, say so and offer an explicit migration; never silently replay a different story.

Keep the working neighborhood small, keyboard navigable and readable on a phone. A force-directed global graph may be an optional view; it is not the navigation contract. A visitor must be able to answer `why is this next?` before taking a step.

## Three evidence-backed walks

### 1. How an image became a painting: Seurat

`Met study 437658` → **study for** → `AIC finished painting 27992` → **created by** → `Georges Seurat`.

The Met explicitly calls its work Seurat's final study for the monumental Chicago painting. It dates the study 1884 and explains the contrast between its patchy strokes and the tighter dots of the final work. This supports a compelling comparison with a sourced relationship; it does not require a speculative similarity model. The concept branch can expose Pointillism/Divisionism using separate curator-text evidence. Source: https://www.metmuseum.org/art/collection/search/437658 . AIC's official API documentation itself identifies 27992 as La Grande Jatte: https://aggregator-data.artic.edu/docs/ . The AIC artwork page returned 403 in this research session; the experience/source agent should rely on the official API fixture already captured, not treat that failed fetch as proof of unavailability.

### 2. A composition crosses media and places: Hiroshige to Van Gogh

`Met Hiroshige impression 55433` → **exemplifies design** → `Sudden Shower over Shin-Ōhashi Bridge and Atake design` ← **after work** ← `Van Gogh Bridge in the Rain s0114V1962` → **created by** → `Van Gogh`.

The Met identifies its impression as a woodblock print by Hiroshige, 1857, Edo period, and says the image depicts Ōhashi across the Sumida. The Van Gogh Museum explicitly pairs Hiroshige's 1857 design with Van Gogh's 1887 oil copy. Critical identity rule: the Met's particular impression is **not** automatically the one Van Gogh owned. Evidence supports the shared design, not possession of that physical sheet. Sources: https://www.metmuseum.org/art/collection/search/55433 ; https://www.vangoghmuseum.nl/ja/japanese-prints/person/33202/utagawa-hiroshige ; https://www.vangoghmuseum.nl/en/collection/s0114V1962 . The Japanese-language VGM URL exposed English text to search; the English route rendered only a tag-manager shell during direct fetch. Do not claim an image reuse license for VGM from this relationship evidence alone.

### 3. Follow a gesture across centuries: abhaya mudra

`Met Seated Buddha 72381` → **depicts motif** → `abhaya mudra` ← **depicts motif** ← `Met Standing Buddha Offering Protection 38198` → **classified in period** → `Gupta period as defined by this catalogue`.

The first object is from Gandhara, dated first to mid-second century, bronze with traces of gold leaf. The second is from Mathura, late fifth century, red sandstone, classified by the Met as Gupta. Both descriptions explicitly identify the gesture. Visitors can cross geography, centuries and material through a single motif while inspecting the differences. This is a shared-motif comparison, not a claim that one surviving sculpture directly influenced the other. Sources: https://www.metmuseum.org/art/collection/search/72381 ; https://www.metmuseum.org/art/collection/search/38198 . Both pages label their illustrated image Public Domain; ingestion must still attach item-level rights evidence.

## A hard test case: ownership is not location

Smithsonian documentation describes Benin objects whose ownership was transferred in 2022, some subsequently remaining in Washington on loan. The 2024 museum explanation is useful evidence for distinct ownership, custody, loan and historical movement assertions. Its dated statement is not proof of their current status in every future snapshot. This case should prevent a single overloaded `location` field and a naive `museum collection => museum ownership` assumption. Sources: https://www.si.edu/newsdesk/releases/smithsonian-returns-29-benin-bronzes-national-commission-museums-and-monuments ; https://africa.si.edu/exhibitions/benin-bronzes-ambassadors-oba .

## Meaningful acceptance tests

1. **Evidence survives traversal:** the Seurat `study_for` link works in both directions with one claim ID; the explanation opens the same Met locator and source snapshot.
2. **No false source-object identity:** a Hiroshige impression cannot be merged with another institution's impression or attached as Van Gogh's possessed object without separate evidence.
3. **Dates do not classify:** a 1650 Japanese work stays unclassified in a European Baroque scheme unless an independent source makes that assertion.
4. **BCE continuity:** 2 BCE, 1 BCE, 1 CE sort as internal -1, 0, 1 and display without a year 0.
5. **Approximation is visible:** `ca. 1830–32` survives import, search display and export; exact-day queries cannot treat a padded timestamp as exact.
6. **Unknown stays unknown:** a missing death date does not create an infinitely long active period or spurious contemporary links.
7. **Competing claims survive:** two differing creator/date assertions retain separate evidence; selecting a preferred display does not delete one or mark it disputed without evidence.
8. **Relationship types constrain history:** an embedding result cannot be stored or displayed as `influenced_by`; computed peers identify input claims and algorithm version.
9. **Ownership/location/custody separate:** a loaned Benin object can have distinct owner, custodian and physical location without contradictions.
10. **Replay is stable:** serialize a branched six-step walk, reload the same snapshot, and recover the same entities, edge directions, reasons and branch history. An unavailable snapshot yields an explicit error/migration choice.
11. **Identity operations are reversible:** merge a reviewed cross-source duplicate, undo it, and recover source records and old canonical links.
12. **Global corpus honesty:** coverage output counts region × period scheme × medium alongside unknown categories; gaps remain visible and absence is not presented as historical nonexistence.

## Largest structural risks for the PM

1. **A neat false history:** one period ladder, one artist per work, one country per artwork and one `location` field make a usable-looking but historically misleading product. Freeze the distinctions now.
2. **Relation theater:** a dense graph of shared tags can look rich while explaining nothing. Every default recommendation needs a named, inspectable reason, and cross-museum item relations are worth more than raw node counts.
3. **Data-rich institutions become the whole world:** open data volume is a collection/acquisition/documentation artifact. Coverage targets must include missingness and source geography, not promise every period from a few US/European feeds.
4. **Rights become node properties:** a public-domain object can have several photographs with different rights. Asset rights and metadata rights travel independently.
5. **Spec overreach:** ship a small claimed subset, validate it, and add semantic features via PM-owned contracts. Do not claim full CIDOC CRM/Linked Art/EDTF support because the names appear in documentation.
