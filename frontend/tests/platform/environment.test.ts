import { describe, expect, it } from "vitest";

import { parseEnvironment } from "@/lib/platform/environment";

describe("parseEnvironment", () => {
  it("accepts the documented production environment", () => {
    const result = parseEnvironment({
      NODE_ENV: "production",
      NEXT_PUBLIC_SITE_URL: "https://leerraum.ch",
      VERCEL_ENV: "production",
    });

    expect(result).toEqual({
      NODE_ENV: "production",
      NEXT_PUBLIC_SITE_URL: "https://leerraum.ch",
      VERCEL_ENV: "production",
    });
  });

  it("uses safe defaults for the currently optional environment", () => {
    const result = parseEnvironment({});

    expect(result.NODE_ENV).toBe("development");
    expect(result.NEXT_PUBLIC_SITE_URL).toBe("https://leerraum.ch");
    expect(result.VERCEL_ENV).toBeUndefined();
  });

  it("rejects a malformed canonical origin", () => {
    expect(() =>
      parseEnvironment({ NEXT_PUBLIC_SITE_URL: "leerraum dot ch" }),
    ).toThrow();
  });

  it("rejects unknown deployment environment labels", () => {
    expect(() => parseEnvironment({ VERCEL_ENV: "staging" })).toThrow();
  });
});
