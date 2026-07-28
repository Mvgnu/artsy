# Editorial Experience Standard

The design unit is the **individual page**, not a template, component family, or page
archetype.

A route is finished only when its visual behavior, pacing, interactions, typography,
artwork treatment, and navigation express something specific about that artist, work,
concept, or period. Components are implementation details. They are not the starting
point of the design process.

## Start with an experience premise

Before implementation, write a short page premise answering:

- What should the visitor do on this page?
- What should they notice that a static article would not make them notice?
- What visual or interactive mechanism belongs specifically to this subject?
- How should the page feel different from its neighboring routes?
- Which moments should be slow, abrupt, dense, quiet, disorienting, repetitive, or open?

Do not begin by selecting existing components.

## Page-specific creation is the default

- Page-local components, styles, interactions, and layout logic are expected when they
  serve the subject.
- A unique page does not need to justify bespoke code.
- Do not extract a shared component merely because two pages both contain an image,
  annotation, timeline, comparison, or interactive control.
- Abstract only after genuinely different pages reveal a common technical behavior and
  only when abstraction does not dictate their composition.
- There is no target number of primitives and no approved catalogue of experience
  patterns.

## Silo cohesion without page sameness

An epoch or artist silo may share a visual atmosphere through typography, color
families, material textures, navigation language, or recurring conceptual motifs. It
should not share a fixed page silhouette.

Cohesion must not become:

- the same hero proportions;
- the same section order;
- the same three-card artwork block;
- the same text-grid rhythm;
- the same navigation cards;
- the same interaction with different labels;
- or the same component tree populated with different data.

A visitor should be able to recognize that two pages belong to the same silo while also
recognizing each page from its silhouette alone.

## Artwork is an active material

Artwork may control scale, crop, movement, sequence, color, spatial division,
annotation, or interaction. It must not be inserted as a decorative gallery between
prose blocks.

Every placement should have a specific job. Examples include following a gesture,
revealing a spatial boundary, comparing two incompatible readings, changing scale to
produce discomfort, or making the visitor reconstruct an image over time. These are
examples, not reusable archetypes.

## Interactions must carry meaning

An interaction is not required merely to create motion. When used, it must expose an
argument that would be weaker without the visitor's action.

A slider, scroll state, toggle, drag, hover, sound cue, or staged reveal must be
designed for the particular page. Reusing the same interaction across unrelated subjects
requires an explicit reason.

Deliberate stillness is valid when it is itself part of the experience, but it must be a
conscious stylistic choice rather than the absence of design.

## Media reliability is non-negotiable

- Verify every image URL before merge.
- Keep attribution visible, readable, and linked to the actual source.
- Do not hide attribution behind hover or place it in incidental low-contrast furniture.
- A failed image must expose a useful source fallback.
- Crops must be intentional and must not erase the part of the artwork discussed by the
  surrounding content.

## Review tests

Reject or redesign the page when any answer below is unfavorable:

1. **Swap test:** Could the title, artist, and artwork data be replaced while leaving
   the composition substantially unchanged?
2. **Silhouette test:** Does the page look recognizably different from neighboring
   routes when viewed without readable text?
3. **Component-first test:** Can the design be explained mainly by listing shared
   components?
4. **Meaning test:** Does each interaction reveal something specific about the subject?
5. **Artwork test:** Does the artwork determine the page structure, or merely decorate
   it?
6. **Journey test:** Does the visitor undergo a sequence of attention rather than scroll
   past alternating content blocks?
7. **Reliability test:** Do every image, source link, contrast state, keyboard control,
   and responsive layout work?

`ArtworkStrip` and similar grid components remain available for minor supporting
contexts. They are not page concepts and may not determine a route's primary experience.
