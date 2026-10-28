import { encodeWalk } from "@artsy/graph";
import type { Neighbor, WalkState } from "@artsy/graph";

/** Serialize the complete route through the graph's canonical codec. */
export function walkHref(walk: WalkState): string {
  return `?walk=${encodeURIComponent(encodeWalk(walk))}`;
}

export function extendWalk(walk: WalkState, neighbor: Neighbor): WalkState {
  return {
    ...walk,
    steps: [...walk.steps, {
      nodeId: neighbor.entity.id,
      viaClaimId: neighbor.claim.id,
      direction: neighbor.direction,
    }],
  };
}

/** A new branch starts at an existing stop; browser history retains the old future. */
export function branchWalk(walk: WalkState, index: number): WalkState {
  if (!Number.isInteger(index) || index < 0 || index >= walk.steps.length) {
    throw new RangeError("Choose an existing stop in this trail.");
  }
  return { ...walk, steps: walk.steps.slice(0, index + 1) };
}
