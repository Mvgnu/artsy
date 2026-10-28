import { defineConfig } from 'vitest/config';
import { fileURLToPath } from 'node:url';
export default defineConfig({ test: { root: fileURLToPath(new URL('.', import.meta.url)), include: ['packages/*/test/**/*.test.ts', 'test/architecture/**/*.test.ts'], environment: 'node' } });
