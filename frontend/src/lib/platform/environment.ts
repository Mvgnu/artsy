import { z } from "zod";

export const EnvironmentSchema = z
  .object({
    NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
    NEXT_PUBLIC_SITE_URL: z.string().url().default("https://leerraum.ch"),
    VERCEL_ENV: z.enum(["development", "preview", "production"]).optional(),
  })
  .strict();

export type Environment = z.infer<typeof EnvironmentSchema>;

export function parseEnvironment(
  source: Record<string, string | undefined>,
): Environment {
  return EnvironmentSchema.parse({
    NODE_ENV: source.NODE_ENV,
    NEXT_PUBLIC_SITE_URL: source.NEXT_PUBLIC_SITE_URL,
    VERCEL_ENV: source.VERCEL_ENV,
  });
}

export const environment = parseEnvironment(process.env);
