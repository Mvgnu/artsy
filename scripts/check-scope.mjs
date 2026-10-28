import { execFileSync } from 'node:child_process';
import { readSpecs, allowedFor, repoRoot } from './spec-lib.mjs';
const args = process.argv.slice(2);
const value = (key) => { const index = args.indexOf(key); return index >= 0 ? args[index + 1] : undefined; };
const domain = value('--domain'), base = value('--base');
if (!domain || !base) throw new Error('Usage: pnpm scope:check --domain <name> --base <base-sha>');
const spec = readSpecs().find((item) => item.name === domain);
if (!spec) throw new Error(`Unknown domain ${domain}`);
if (!/^[a-f0-9]{7,40}$/i.test(base)) throw new Error('Supply the PM-provided commit SHA, not an option or ambiguous ref');
const git = (...command) => execFileSync('git', command, { cwd: repoRoot, encoding: 'utf8' }).split('\0').filter(Boolean);
const paths = [...new Set([...git('diff', '--name-only', '-z', '--no-renames', base, '--'), ...git('ls-files', '--others', '--exclude-standard', '-z')])];
const denied = paths.filter((path) => !allowedFor(spec, path));
if (denied.length) { console.error(`Outside ${domain}'s write gate:\n${denied.join('\n')}`); process.exitCode = 1; }
else console.log(`${domain}: ${paths.length} changed paths are inside the declared write gate.`);
