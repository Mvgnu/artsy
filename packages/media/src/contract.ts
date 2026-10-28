import type { ImageAsset } from "@artsy/core";
export type ImageDecision = { allowed: true; asset: ImageAsset } | { allowed: false; reason: string };
