# 0003 — returning along a thread is an arrival

Date: 2026-10-28. Trigger: independent experience critic, rounds 1 and 2.

The first review found that explicit navigation could replace the current entity while leaving its artwork/title above the viewport. Moving keyboard focus alone did not reliably move the view. The correction brought the entity section into view after hops, search results, earlier-stop branches and starters.

The second review verified those cases but found the same problem after browser Back. Native scroll restoration returned to a prior deep relationship-list position while the focused heading and restored work were out of sight. Exact route state survived; orientation did not.

PM chooses one arrival convention for this explorer: when navigation changes the current stop, the new entity section and heading must be visible, including on Back/Forward. This matters more here than restoring the old list position. The explorer temporarily owns `history.scrollRestoration`, restoring its previous setting on unmount. A shared effect requests arrival only after the new walk commits. Popstate does not push another entry or rewrite its URL.

Initial hydration, reload and opening a copied URL restore the walk without an unsolicited arrival focus/scroll request. Modifier-clicks retain normal browser behavior. Movement is immediate, including reduced-motion contexts. The package spec and actual browser assertions cover this convention; independent review determines whether it works in the exported artifact.
