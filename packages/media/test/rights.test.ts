import { describe, expect, it } from "vitest";
import { ImageAssetSchema } from "@artsy/core";
import { canDisplay } from "../src/index";
const asset = () => ImageAssetSchema.parse({ id: "image", artworkId: "work", url: "https://example.org/image.jpg", alt: "Synthetic test image", rights: { status: "open", license: "CC0", rightsUrl: "https://example.org/rights", credit: "Test museum", verifiedAt: "2026-10-28T00:00:00Z", evidenceIds: ["rights-evidence"], display: true, cache: false, derivatives: false } });
describe("image publication policy", () => {
  it("uses a record-level positive rights decision", () => expect(canDisplay(asset()).allowed).toBe(true));
  it("does not treat a reachable image or open metadata as permission", () => {
    const candidate = asset(); candidate.rights.status = "unknown";
    expect(canDisplay(candidate).allowed).toBe(false);
  });
  it("requires explicit display permission independent of caching", () => {
    const candidate = asset(); candidate.rights.display = false; candidate.rights.cache = true;
    expect(canDisplay(candidate).allowed).toBe(false);
  });
  it("fails closed on licenses whose obligations are not implemented", () => {
    const candidate = asset(); candidate.rights.license = "CC-BY-SA-4.0";
    expect(canDisplay(candidate).allowed).toBe(false);
  });
});
