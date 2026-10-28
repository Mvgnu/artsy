import test from 'node:test';import assert from 'node:assert/strict';import {readFileSync} from 'node:fs';import {canDisplay} from '../../../.build/packages/media/src/index.js';
const a=JSON.parse(readFileSync(new URL('../../../data/seed.json',import.meta.url)));const m=a.media[0];
test('object-level public domain evidence allows a remote image',()=>assert(canDisplay(m,a).display));
for(const rights of ['unknown','restricted','permission'])test(`fails closed for ${rights}`,()=>assert(!canDisplay({...m,rights},a).display));
test('missing alt or rights source blocks image',()=>{assert(!canDisplay({...m,alt:''},a).display);assert(!canDisplay({...m,rightsSourceId:'missing'},a).display);});
