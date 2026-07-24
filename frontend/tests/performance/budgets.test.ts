import { describe, expect, it } from "vitest";

import { performanceBudgets } from "@/lib/platform/release-gates";

describe("foundation performance budgets", () => {
  it("matches the platform Core Web Vitals targets", () => {
    expect(performanceBudgets.largestContentfulPaintMs).toBeLessThanOrEqual(2500);
    expect(performanceBudgets.cumulativeLayoutShift).toBeLessThanOrEqual(0.1);
    expect(performanceBudgets.interactionToNextPaintMs).toBeLessThanOrEqual(200);
  });
});
