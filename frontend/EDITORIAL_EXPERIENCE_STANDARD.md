# Editorial Experience Standard

Every editorial route must be designed as an authored visual argument, not assembled
from a default page shell.

## Required before merge

1. **A page-specific journey**
   - State the page's visual and interpretive sequence before implementation.
   - At least one section must use the artwork itself as the explanatory structure:
     details, spatial divisions, sequencing, comparison, annotation, or changing scale.
   - Reusing the same hero → card strip → text grid → link cards sequence is not
     acceptable.

2. **Artwork integrated with the argument**
   - Images cannot appear as unrelated galleries between prose sections.
   - Every image placement must answer a specific question raised immediately before or
     after it.
   - Cropping, scale, position, and sequence must be intentional and documented in the
     page copy.

3. **Distinct visual language**
   - Layout, pacing, color, typography scale, and interaction should respond to the
     artist, work, motif, or period.
   - Shared primitives are allowed; shared page compositions are not the default.

4. **Reliable media**
   - Every artwork requires a visible, working source link.
   - Failed images must expose a usable source fallback rather than an empty rectangle.
   - Image URLs must be verified before merge.
   - Attribution may not depend on hover, low contrast, or incidental footer placement.

5. **Readable contrast**
   - Text and links must remain readable against their immediate background.
   - A component's color mode must not be inferred incorrectly from a distant parent
     section.
   - Light text on ochre, beige, yellow, or other light backgrounds is a release
     blocker.

6. **No generic card-strip dependency by default**
   - `ArtworkStrip` is a legacy migration component.
   - New pages must justify its use explicitly in review.
   - It must not be the primary visual experience of a page.

7. **Review questions**
   - What does this page make the reader do or notice that no neighboring page does?
   - Where does the artwork change the structure of the page?
   - Could the artist and title be swapped without redesigning the layout? If yes, the
     experience is still too generic.
   - Do all images and attribution links work?
   - Is every section readable on light and dark backgrounds?
