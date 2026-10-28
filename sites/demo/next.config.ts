import type { NextConfig } from 'next';
const config: NextConfig = { output: 'export', trailingSlash: true, images: { unoptimized: true }, transpilePackages: ['@artsy/core', '@artsy/graph', '@artsy/media', '@artsy/explorer'] };
export default config;
