import { fetchRecord } from '../.build/packages/sources/src/index.js';
import { mkdirSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
const [provider,...ids]=process.argv.slice(2);
if(!['met','aic'].includes(provider)||!ids.length||ids.length>20)throw new Error('Usage: npm run compile; node ops/import.mjs met|aic ID [ID...] (maximum 20)');
mkdirSync('.cache/ingest',{recursive:true});
for(const id of ids){
  const record=await fetchRecord(provider,id);const json=JSON.stringify(record.body);const sha=createHash('sha256').update(json).digest('hex');
  writeFileSync(`.cache/ingest/${provider}-${id}-${sha}.json`,JSON.stringify({...record,sha256:sha},null,2)+'\n');
  console.log(`${provider}:${id} captured; canonical promotion requires review`);
  await new Promise(resolve=>setTimeout(resolve,1000));
}
