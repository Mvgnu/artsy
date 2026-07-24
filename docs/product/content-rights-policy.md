# Content and artwork-media rights policy

> Operational product policy, not legal advice. Material uncertainty must be escalated before publication.

## Purpose

Leerraum depends on artwork images, but an old artwork and a photograph or scan of that artwork are not automatically the same rights object. This policy creates a conservative, auditable publication gate for every visual asset.

The default strategy is to publish images that a trustworthy institution explicitly designates as public domain, Public Domain Mark, CC0, or otherwise licensed for the intended use.

“An article discusses the image” is **not** a blanket licence to reproduce it.

## Swiss baseline

The launch domain is Swiss. The current operational baseline is:

- copyright in an artistic work generally expires 70 years after the author's death;
- a photograph with individual character is generally protected for 70 years after the photographer's death;
- a photograph without individual character is protected for 50 years from its creation;
- a published work may be quoted when the quotation serves explanation, reference, or illustration, the extent is justified by that purpose, and the quotation and source are identified;
- simply using an image as decoration is not covered by the quotation exception;
- reporting current events is a separate, purpose-limited exception and is not a general publication strategy for evergreen art history.

Primary references, checked 2026-07-24:

- Swiss Federal Institute of Intellectual Property, copyright basics: https://www.ige.ch/en/protecting-your-ip/copyright/the-basics
- Swiss Federal Institute of Intellectual Property, quoting from works: https://www.ige.ch/en/protecting-your-ip/copyright/using-a-work/permitted-uses/quoting-from-works
- Swiss Copyright Act, especially Articles 25 and 28: https://www.fedlex.admin.ch/eli/cc/1993/1798_1798_1798/en
- Swiss Federal Institute of Intellectual Property, protection for photographs: https://www.ige.ch/en/protecting-your-ip/copyright/using-a-work/protection-for-photographs

Because the website can be accessed outside Switzerland, an explicit open licence from the source institution is safer than relying on a territorial exception.

## Two-layer rights check

Every asset review must answer both questions:

1. **Is the underlying artwork protected?**
2. **Is this particular photograph, scan, crop, restoration, or digital file protected or contractually restricted?**

A public-domain painting does not justify copying an arbitrary contemporary gallery photograph of that painting.

## Rights statuses

Every artwork image must have exactly one publication status.

### `approved-open`

Use is supported by an explicit source designation such as CC0, Public Domain Mark, or institution-specific unrestricted open access.

This is the preferred status for hero images, decorative crops, galleries, discovery pages, social cards, and reusable components.

### `approved-licensed`

Leerraum holds a licence or written permission that covers the intended channels, duration, territories, transformations, and commercial status.

The licence evidence must be retained.

### `quotation-review-required`

The work or reproduction is protected, but a specific editorial use may arguably qualify as a quotation.

This status is not publishable until a human review confirms:

- the image itself is the object of concrete explanation, reference, or illustration;
- the chosen size, resolution, crop, and repetition are no greater than the editorial purpose requires;
- the work has been published previously;
- author and source attribution are present;
- the image is not reused as decorative background, generic card art, social media promotion, or unrelated illustration;
- the page records the rationale for relying on the exception.

This route should be exceptional. It should not be used to populate galleries or compensate for weak asset sourcing.

### `blocked`

The asset is not publishable. Examples:

- unknown or unverifiable source;
- copied from Google Images, Pinterest, a blog, or a social-media repost;
- protected modern artwork used decoratively;
- unclear photographer or reproduction rights;
- source terms prohibit the intended use;
- missing credit or provenance fields;
- an institution provides an image but does not mark it open and no other permission applies.

## Preferred image sources

Initial provider allowlist:

### The Metropolitan Museum of Art

The Met makes public-domain artwork images identified as Open Access available under CC0 and provides collection data and image URLs through its API.

- https://www.metmuseum.org/hubs/open-access
- https://www.metmuseum.org/policies/terms-and-conditions

### Art Institute of Chicago

The Art Institute makes designated open-access images available under CC0 and exposes public-domain flags, image identifiers, API records, and IIIF resources.

- https://www.artic.edu/open-access/open-access-images
- https://api.artic.edu/docs/

The API documentation explicitly recommends filtering for public-domain works. An available IIIF image is not, by itself, proof that the image is public domain.

### Additional providers

A provider may be added only after documenting:

- its rights vocabulary;
- whether status is available per object and per image;
- attribution requirements;
- API or IIIF terms;
- hotlinking and caching rules;
- takedown or correction contact;
- any distinction between noncommercial and commercial use.

## Mandatory provenance record

Each published image must include structured metadata equivalent to:

```ts
interface ArtworkMediaRecord {
  id: string;
  artworkId: string;
  sourceInstitution: string;
  sourcePageUrl: string;
  sourceAssetUrl: string;
  sourceAccessedAt: string;
  underlyingWorkStatus: "public-domain" | "protected" | "unknown";
  reproductionStatus:
    | "cc0"
    | "public-domain-mark"
    | "licensed"
    | "quotation-review"
    | "blocked";
  licenseLabel: string;
  licenseUrl: string | null;
  creditLine: string;
  creatorAttribution: string;
  altText: string;
  width: number;
  height: number;
  editorialPurpose: string;
  reviewNotes: string | null;
  reviewedBy: string;
  reviewedAt: string;
}
```

The final implementation must express this contract as a runtime-validated schema and inferred TypeScript type. This interface is illustrative and must not become a competing manually maintained business-logic type.

## Acquisition workflow

1. Select the artwork for editorial reasons.
2. Find the owning institution or another authoritative object record.
3. Verify the underlying artist's death date and the work's status where relevant.
4. Verify the rights statement attached to the exact image asset.
5. Record source, licence, access date, attribution, and technical metadata.
6. Assign a rights status.
7. Review crops and transformations against the permitted use.
8. Publish only after build-time validation passes.
9. Recheck records when a source changes its terms or an asset is replaced.

## Image handling rules

- Do not ingest search-engine result images.
- Do not infer a licence from the age of the painting alone.
- Do not remove embedded attribution or rights information where retention is required.
- Do not use a quotation-reviewed asset outside the exact approved page and purpose.
- Do not use quotation-reviewed assets in Open Graph images, newsletters, advertisements, or generic recommendation cards.
- Prefer local storage or source-approved IIIF delivery for approved-open images, according to provider terms.
- Store original source dimensions and avoid unnecessary upscaling.
- Record every crop as a derivative of a specific approved source asset.
- Preserve a visible credit line on the page even where the licence does not strictly require attribution.

## Editorial sourcing rules

- Distinguish verifiable facts from interpretation.
- Cite the museum object record or catalogue source for title, date, dimensions, medium, and collection.
- Attribute scholarly interpretations instead of presenting disputed readings as settled fact.
- Never copy museum descriptions or essays beyond lawful quotation limits.
- AI-assisted text must be fact-checked against cited sources before publication.
- Generated prose does not create a source.

## Takedown and correction process

The public site must expose a clear rights and corrections contact. A report should capture:

- affected URL;
- asset or statement at issue;
- claimant identity and relationship to the work;
- supporting evidence;
- requested action.

Credible rights complaints should trigger temporary asset removal while reviewed. The provenance record and resolution must be retained internally.

## Release gate

A page fails publication when any rendered image lacks:

- an approved publication status;
- source page and source asset URLs;
- rights or licence label;
- credit line;
- alt text;
- reviewer and review date.

There is no production fallback that silently renders an unreviewed image.
