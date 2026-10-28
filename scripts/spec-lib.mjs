import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { resolve, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'yaml';

export const repoRoot = fileURLToPath(new URL('../', import.meta.url));
export function readSpecs(root = repoRoot) {
  const paths = readdirSync(resolve(root, 'packages'), { withFileTypes: true })
    .filter((entry) => entry.isDirectory()).map((entry) => `packages/${entry.name}/SPEC.md`);
  paths.push(...readdirSync(resolve(root, 'specs/sites')).filter((name) => name.endsWith('.md')).map((name) => `specs/sites/${name}`));
  return paths.map((path) => {
    const body = readFileSync(resolve(root, path), 'utf8');
    const frontmatter = body.match(/^---\n([\s\S]*?)\n---\n/);
    if (!frontmatter) throw new Error(`${path}: missing YAML frontmatter`);
    return { ...parse(frontmatter[1]), specPath: path, body };
  });
}

export function isPmOwned(path) {
  return /^(?:package\.json|pnpm-workspace\.yaml|pnpm-lock\.yaml|tsconfig\.base\.json|vitest\.config\.ts|README\.md|AGENTS\.md)$/.test(path)
    || /(?:^|\/)(?:contract\.ts|package\.json|next\.config\.[^/]+)$/.test(path)
    || /^(?:test\/architecture\/|scripts\/|\.agent\/|\.github\/|specs\/(?:00_engine\.md|engine-plan\.md|implementation-status\.md|decisions\/|reviews\/))/.test(path);
}

export function checkSpecs(specs = readSpecs(), root = repoRoot) {
  const errors = [];
  const owners = [];
  const names = new Set();
  for (const spec of specs) {
    const fail = (message) => errors.push(`${spec.specPath}: ${message}`);
    if (!spec.name || names.has(spec.name)) fail('missing or duplicate domain name');
    names.add(spec.name);
    if (!['planned', 'foundation', 'active'].includes(spec.status)) fail('declare planned/foundation/active status');
    if (!spec.description || typeof spec.description !== 'string') fail('missing description');
    if (!spec.bar?.reference || !spec.bar?.property) fail('bar requires a named reference and compared property');
    if (!Array.isArray(spec.exports) || !Array.isArray(spec.consumes)) fail('exports and consumes must be arrays');
    for (const key of ['owned', 'tests']) {
      if (!Array.isArray(spec.paths?.[key]) || !spec.paths[key].length) { fail(`missing paths.${key}`); continue; }
      for (const path of spec.paths[key]) {
        if (typeof path !== 'string' || path.startsWith('/') || path.includes('..') || path.includes('*')) { fail(`unsafe/nonliteral ownership path ${path}`); continue; }
        if (isPmOwned(path)) fail(`direct ownership of PM file ${path}`);
        owners.push({ domain: spec.name, path });
      }
    }
    for (const command of ['check', 'test', 'build']) if (typeof spec.verification?.[command] !== 'string' || !spec.verification[command]) fail(`missing verification.${command}`);
    if (spec.status !== 'planned') {
      const manifestPath = spec.specPath.startsWith('packages/') ? `packages/${spec.name}/package.json` : `sites/${spec.name}/package.json`;
      if (!existsSync(resolve(root, manifestPath))) fail('implemented domain has no package manifest');
      else {
        const manifest = JSON.parse(readFileSync(resolve(root, manifestPath), 'utf8'));
        for (const command of ['check', 'test']) if (!manifest.scripts?.[command]) fail(`implemented domain has no ${command} script`);
      }
    }
  }
  for (let i = 0; i < owners.length; i++) for (let j = i + 1; j < owners.length; j++) {
    const a = owners[i], b = owners[j];
    if (a.domain !== b.domain && (within(a.path, b.path) || within(b.path, a.path))) errors.push(`overlapping ownership: ${a.domain}:${a.path} and ${b.domain}:${b.path}`);
  }
  for (const spec of specs) for (const dependency of spec.consumes ?? []) if (!names.has(dependency.split('.')[0])) errors.push(`${spec.specPath}: unknown consumed domain ${dependency}`);
  return errors;
}

export function within(path, owned) { return path === owned || (owned.endsWith('/') && path.startsWith(owned)); }
export function allowedFor(spec, path) {
  if (isPmOwned(path) || /(?:^|\/)(?:out|\.next|node_modules)\//.test(path)) return false;
  return path === spec.specPath || [...spec.paths.owned, ...spec.paths.tests].some((owned) => within(path, owned));
}
export function repoRelative(path) { return relative(repoRoot, path).replaceAll('\\', '/'); }
