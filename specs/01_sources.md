# Source acquisition and relationship mapping

Research date: 2026-10-28. `data/sources.json` is the machine-readable registration ledger: 19 entries, with documentary verification separated from blocked or candidate sources. A documentation read is not a successful API call. A registered source is not an installed adapter.

## Acquisition priority

Start with Met + AIC for structured museum records; add the Rijksmuseum's current Linked Art services. Use Getty AAT for vocabulary, ULAN for people/groups and TGN for geographic identities; PeriodO for scoped period definitions; Wikidata for crosswalk candidates. These play different roles and must not be treated as interchangeable authorities. Add Cleveland, V&A and Europeana for collection diversity after their exact selected-dataset rights and access terms are recorded. Institutional object and artist pages can support editorial assertions without permission to republish the catalogue prose.

Current integration corrections matter: Met documentation announces retirement of `/public/collection/v1/search` on 2026-10-01; use `/v1.1/search` with bounded offset/limit or an actual full dataset. Individual object access remains `/public/collection/v1/objects/{id}`. Getty ended XML/relational releases and XML web services; use LOD, not archived 2026-01-30 snapshots as a live feed. Rijksmuseum uses canonical `id.rijksmuseum.nl` identities, data access on `data.rijksmuseum.nl`, and keyless `/search/collection` with `next.id` pagination. Europeana's key registration is account-based. See each primary documentation URL in the registry for the supporting announcement.

## Source fidelity pipeline

Acquire only approved HTTPS provider URLs, respect published budgets and Retry-After, identify the client where supported, and stop on persistent failure. Never send arbitrary record URLs to the server as fetch targets. Record exact request, retrieval time, response, source record ID, adapter version, checksum and provider revision/ETag when supplied. Keep credentials out of URLs, logs, Git and static exports. Raw snapshots go in private object storage (local `.cache/ingest` for the prototype). The prototype checksum is of JSON-normalized response content, not raw transport bytes; production must retain a separate original-byte digest.

Normalize into candidates, not final claims. Track every mapped, preserved-but-unmapped and rejected field. Preserve original date strings, language, contributor roles, attribution qualifiers, external identifiers, record/image rights, deletion signals and update history. Neither a title match nor an image hash is sufficient to merge artworks. Do not treat source-to-source copying as independent corroboration.

For promotion, a reviewer checks source text, subject/predicate/object typing, directness, attribution scope and rights. Store original statement references in an immutable decision log. A raw title or an LLM summary is not evidence for influence, patronage or date. If a source disappears, retain permitted evidence and flag stale citations; if a source corrects a claim, supersede rather than silently rewrite it.

## Relationship mappings to implement

Museum artist/constituent records -> `createdBy`, retaining maker role and qualifier; do not split names on punctuation. Museum date label and valid numeric bounds -> `creationDate`. Explicit period assignment -> `classifiedAs`, scoped to the defining authority. AAT material identity -> `usesMaterial`, with the full medium statement retained. Institutional collection record -> `heldBy`, not legal ownership or present display location. Explicit source text -> `trainedBy`, `patronizedBy`, `commissionedBy`, `influencedBy` with sentence/section locator and qualification. `depictsPlace` never becomes `createdIn`.

Wikidata P170/P571/P135/P180/P195/P276/P136/P186/P737/P1066 are discovery candidates only until each property's current semantics, qualifiers and references are verified during adapter work. No blind batch mapping is authorized by this list. P276 (location) must not be assumed to mean place of creation. Reconcile dates and period assertions only after geographic/cultural scope comparison.

## Rights and accessibility

Metadata licence, object copyright, photograph licence, attribution, digital reproduction status and cultural protocols are distinct. Public access or IIIF support grants no blanket permission. Store a rights URI or policy reference plus observed record-level statement and review date. Unknown/restricted assets are not displayed. Licensed permission support needs a scoped permission record before enabling it. Maintain a removal mechanism and rebuild affected projections. Never use generated images as illustrations of historical works.

The seed is a manual research fixture from six primary pages at three institutions. It is NOT a two-provider API import. Full primary pages were read; no catalogue essays were copied. Alt text authored here is not a substitute for a museum's full visual description. Original claims use short paraphrases and locators. The API attempts in this environment failed, and this is recorded in the review report rather than converted into success.
