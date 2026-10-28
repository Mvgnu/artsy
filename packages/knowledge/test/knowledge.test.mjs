import test from 'node:test';import assert from 'node:assert/strict';import {readFileSync} from 'node:fs';
import {parseAtlas,safeUrl} from '../../../.build/packages/knowledge/src/index.js';
const raw=JSON.parse(readFileSync(new URL('../../../data/seed.json',import.meta.url)));
test('seed has a validated evidence graph',()=>{const a=parseAtlas(raw);assert.equal(a.entities.length,27);assert.equal(a.claims.length,41);assert.equal(a.sources.length,6);});
for(const [name,change] of [
 ['duplicate entity',a=>a.entities.push(a.entities[0])],
 ['dangling object',a=>a.claims[0].object.id='person:missing'],
 ['dangling source',a=>a.claims[0].evidence[0].sourceId='source:missing'],
 ['empty evidence',a=>a.claims[0].evidence=[]],
 ['wrong relation types',a=>a.claims[0].object.id='material:wood'],
 ['unsafe source URL',a=>a.sources[0].url='javascript:alert(1)'],
 ['invalid year',a=>a.claims.find(c=>c.object.kind==='time').object.earliest=1.5],
 ['reversed interval',a=>{const t=a.claims.find(c=>c.object.kind==='time').object;t.earliest=1500;t.latest=1400;}],
 ['false exact date',a=>{const t=a.claims.find(c=>c.object.kind==='time').object;t.precision='exact';}],
 ['unknown schema version',a=>a.schemaVersion=2],
 ['unsafe media URL',a=>a.media[0].url='data:text/html,evil'],
 ['unlicensed media evidence',a=>a.media[0].rightsSourceId='source:missing'],
 ['invalid source date',a=>a.sources[0].readAt='2026-02-30'],
 ['unknown predicate',a=>a.claims[0].predicate='vibesWith']
])test(`rejects ${name}`,()=>{const a=structuredClone(raw);change(a);assert.throws(()=>parseAtlas(a));});
test('same subject and similar names never collapse objects or people',()=>{const a=parseAtlas(raw);assert.equal(a.entities.filter(e=>e.id==='person:filippo-lippi'||e.id==='person:filippino-lippi').length,2);assert.equal(a.entities.filter(e=>e.kind==='work'&&e.id.startsWith('work:nga-')).length,2);});
test('competing date statements survive ingestion',()=>{const a=parseAtlas(raw);assert.equal(a.claims.filter(c=>c.subject==='person:botticelli'&&c.predicate==='birthDate').length,2);});
test('credentials and insecure URLs cannot leak to links',()=>{assert.throws(()=>safeUrl('https://user:pass@example.org'));assert.throws(()=>safeUrl('http://example.org'));});
