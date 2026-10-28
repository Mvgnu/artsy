import type { Corpus, ImageAsset } from "@artsy/core";
import type { ImageDecision } from "./contract";
export type { ImageDecision } from "./contract";

// M0 permits only explicitly reviewed CC0/public-domain records. A later license
// expansion must include enforceable attribution/share-alike obligations.
const openStatements = new Set([
  "CC0", "CC0-1.0", "Public Domain", "PDM-1.0",
  "https://creativecommons.org/publicdomain/zero/1.0/",
  "http://creativecommons.org/publicdomain/zero/1.0/",
  "https://creativecommons.org/publicdomain/mark/1.0/",
  "http://creativecommons.org/publicdomain/mark/1.0/",
]);

export function canDisplay(asset: ImageAsset): ImageDecision {
  if (asset.rights.status !== "open" || !asset.rights.display) return { allowed: false, reason: "Image reuse has not been approved for this record." };
  if (!asset.rights.license || !openStatements.has(asset.rights.license)) return { allowed: false, reason: "This image license is outside the current publication policy." };
  if (!asset.rights.credit.trim() || !asset.rights.evidenceIds.length) return { allowed: false, reason: "Image credit or rights evidence is missing." };
  if (!asset.url.startsWith("https://")) return { allowed: false, reason: "The image requires a secure source URL." };
  return { allowed: true, asset };
}

export function imageFor(corpus: Corpus, artworkId: string): ImageAsset | undefined {
  return corpus.images.find((asset) => asset.artworkId === artworkId && canDisplay(asset).allowed);
}
