import type { Provider, RawRecord } from './contract.js';
export function recordUrl(provider:Provider,remoteId:string):string {
  if (!/^[1-9][0-9]*$/.test(remoteId)) throw new Error('Expected a positive numeric collection ID');
  switch(provider) {
    case 'met':return `https://collectionapi.metmuseum.org/public/collection/v1/objects/${remoteId}`;
    case 'aic':return `https://api.artic.edu/api/v1/artworks/${remoteId}`;
    default:throw new Error('Unsupported provider');
  }
}
/** Bounded acquisition only. It does not promote API output to canonical claims. */
export async function fetchRecord(provider:Provider,remoteId:string,transport:typeof fetch=fetch):Promise<RawRecord> {
  const requestUrl=recordUrl(provider,remoteId);
  for(let attempt=0;attempt<3;attempt++) {
    const response=await transport(requestUrl,{headers:{Accept:'application/json'},redirect:'error',signal:AbortSignal.timeout(10000)});
    if ((response.status===429||response.status>=500)&&attempt<2) {
      const retry=response.headers.get('retry-after');
      const seconds=retry && /^\d+$/.test(retry)?Number(retry):2**attempt;
      await new Promise(resolve=>setTimeout(resolve,Math.min(30,Math.max(0,seconds))*1000));continue;
    }
    if (!response.ok) throw new Error(`${provider}: HTTP ${response.status}`);
    if (!response.headers.get('content-type')?.includes('json')) throw new Error('Provider returned non-JSON content');
    const payload=await response.text();
    if (payload.length>5_000_000) throw new Error('Record exceeds 5 MB limit');
    const body:unknown=JSON.parse(payload);
    return {provider,remoteId,requestUrl,retrievedAt:new Date().toISOString(),body};
  }
  throw new Error('Retry budget exhausted');
}
