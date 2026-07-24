import { describe, expect, it } from "vitest";

import { foundationAccessibility } from "@/lib/platform/release-gates";

describe("foundation accessibility contract", () => {
  it("uses German as the launch document language", () => {
    expect(foundationAccessibility.documentLanguage).toBe("de");
  });

  it("defines a stable skip-link target and visible label", () => {
    expect(foundationAccessibility.mainContentId).toBe("main-content");
    expect(foundationAccessibility.skipLinkLabel.trim().length).toBeGreaterThan(0);
  });
});
