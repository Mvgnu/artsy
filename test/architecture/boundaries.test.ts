import { describe, expect, it } from 'vitest';
import { readFileSync, readdirSync } from 'node:fs';
import { resolve, relative } from 'node:path';
import ts from 'typescript';
import { readSpecs, checkSpecs, allowedFor, repoRoot } from '../../scripts/spec-lib.mjs';

function files(path: string): string[] {
  return readdirSync(path, { withFileTypes: true }).flatMap((entry) => entry.isDirectory() ? files(resolve(path, entry.name)) : /\.tsx?$/.test(entry.name) ? [resolve(path, entry.name)] : []);
}
const permitted: Record<string, string[]> = { core: [], ingest: ['core'], graph: ['core'], media: ['core'], explorer: ['core', 'graph', 'media'] };

describe('domain boundaries', () => {
  it('has real bars, commands and non-overlapping write bubbles', () => expect(checkSpecs(readSpecs())).toEqual([]));
  it('keeps PM contracts and another domain outside a package bubble', () => {
    const graph = readSpecs().find((spec) => spec.name === 'graph');
    expect(allowedFor(graph, 'packages/graph/src/index.ts')).toBe(true);
    expect(allowedFor(graph, 'packages/graph/src/contract.ts')).toBe(false);
    expect(allowedFor(graph, 'packages/graph/package.json')).toBe(false);
    expect(allowedFor(graph, 'packages/core/src/index.ts')).toBe(false);
    expect(allowedFor(graph, 'test/architecture/boundaries.test.ts')).toBe(false);
  });
  it('rejects upward, internal-path, legacy and undeclared imports', () => {
    const violations: string[] = [];
    for (const [domain, dependencies] of Object.entries(permitted)) for (const path of files(resolve(repoRoot, `packages/${domain}/src`))) {
      const source = ts.createSourceFile(path, readFileSync(path, 'utf8'), ts.ScriptTarget.Latest, true);
      const inspect = (node: ts.Node) => {
        if ((ts.isImportDeclaration(node) || ts.isExportDeclaration(node)) && node.moduleSpecifier && ts.isStringLiteral(node.moduleSpecifier)) {
          const name = node.moduleSpecifier.text;
          if (/frontend|(?:^|\/)sites\//.test(name)) violations.push(`${path}: legacy/site import ${name}`);
          if (name.startsWith('@artsy/')) {
            const target = name.slice('@artsy/'.length).split('/')[0];
            if (!target || !dependencies.includes(target) || name.includes('/src/') || name.slice('@artsy/'.length).includes('/')) violations.push(`${path}: invalid package surface ${name}`);
          } else if (name.startsWith('.')) {
            const local = relative(resolve(repoRoot, `packages/${domain}`), resolve(path, '..', name));
            if (local.startsWith('..')) violations.push(`${path}: escaping relative import ${name}`);
          }
        }
        if (node.kind === ts.SyntaxKind.AnyKeyword) violations.push(`${path}: explicit any`);
        ts.forEachChild(node, inspect);
      };
      inspect(source);
    }
    expect(violations).toEqual([]);
  });
  it('keeps provider networking outside the browser engine', () => {
    const violations: string[] = [];
    for (const domain of ['core', 'graph', 'media', 'explorer']) for (const path of files(resolve(repoRoot, `packages/${domain}/src`))) {
      const code = readFileSync(path, 'utf8');
      if (/\bfetch\s*\(|from ["']node:(?:fs|http|https|crypto)/.test(code)) violations.push(path);
      if (/leerraum\.ch|met:437658|artic:27992/.test(code)) violations.push(`${path}: site-specific fixture identity`);
    }
    expect(violations).toEqual([]);
  });
});
