import type { Atlas, Claim } from '../../knowledge/src/contract.js';
import { label, predicates } from '../../knowledge/src/index.js';
import type { Neighbor, PathResult, QueryOptions, Step, Trail } from './contract.js';
function visible(c: Claim, o: QueryOptions): boolean {
  return (c.status==='supported' || (o.includeDisputed===true && c.status==='disputed')) && (c.certainty==='stated' || o.includeUncertain===true) && (!o.predicates || o.predicates.includes(c.predicate));
}
export function neighbors(a: Atlas, id: string, options: QueryOptions={}): Neighbor[] {
  const entities=new Map(a.entities.map(e=>[e.id,e]));
  if (!entities.has(id)) throw new Error(`Unknown entity: ${id}`);
  const out: Neighbor[]=[];
  for (const c of a.claims) {
    if (!visible(c,options) || c.object.kind!=='entity') continue;
    const reversed=c.object.id===id;
    if (c.subject!==id && !reversed) continue;
    const target=reversed?c.subject:c.object.id; const entity=entities.get(target);
    if (entity) out.push({entity,claim:c,step:{from:id,to:target,claimId:c.id,reversed},label:reversed?predicates[c.predicate].inverse:predicates[c.predicate].forward});
  }
  return out.sort((x,y)=>label(x.entity).localeCompare(label(y.entity),'en') || x.claim.id.localeCompare(y.claim.id,'en'));
}
export function findPath(a: Atlas, from: string, to: string, options: QueryOptions={}, maxHops=8, maxVisited=1000): PathResult {
  if (!Number.isInteger(maxHops)||maxHops<0||!Number.isInteger(maxVisited)||maxVisited<1) throw new Error('Invalid traversal budget');
  if (![from,to].every(id=>a.entities.some(e=>e.id===id))) throw new Error('Unknown endpoint');
  const queue: {id:string;steps:Step[]}[]=[{id:from,steps:[]}]; const seen=new Set([from]); let limited=false;
  for (let i=0;i<queue.length;i++) {
    const row=queue[i]; if (!row) continue;
    if (row.id===to) return {status:'found',steps:row.steps};
    const next=neighbors(a,row.id,options).filter(n=>!seen.has(n.entity.id));
    if (row.steps.length>=maxHops) { if (next.length) limited=true; continue; }
    for (const n of next) {
      if (seen.size>=maxVisited) return {status:'limit-reached',steps:[]};
      seen.add(n.entity.id); queue.push({id:n.entity.id,steps:[...row.steps,n.step]});
    }
  }
  return {status:limited?'limit-reached':'no-path',steps:[]};
}
export function validateTrail(a: Atlas, trail: Trail): void {
  if (trail.version!==1||trail.revision!==a.revision||trail.steps.length>64||!a.entities.some(e=>e.id===trail.start)) throw new Error('Trail version, revision or start is invalid');
  let current=trail.start;
  for (const s of trail.steps) {
    if (s.from!==current || !neighbors(a,current,{includeUncertain:true,includeDisputed:true}).some(n=>n.step.to===s.to && n.step.claimId===s.claimId && n.step.reversed===s.reversed)) throw new Error('Trail contains an invalid or withdrawn edge');
    current=s.to;
  }
}
/** External trail JSON is validated field-by-field before graph replay. */
export function parseTrail(input: unknown, a: Atlas): Trail {
  if (typeof input!=='object'||input===null||!('version' in input)||input.version!==1||!('revision' in input)||typeof input.revision!=='string'||!('start' in input)||typeof input.start!=='string'||!('steps' in input)||!Array.isArray(input.steps)) throw new Error('Malformed trail');
  const steps: Step[]=input.steps.map((s:unknown)=>{
    if (typeof s!=='object'||s===null||!('from' in s)||typeof s.from!=='string'||!('to' in s)||typeof s.to!=='string'||!('claimId' in s)||typeof s.claimId!=='string'||!('reversed' in s)||typeof s.reversed!=='boolean') throw new Error('Malformed trail step');
    return {from:s.from,to:s.to,claimId:s.claimId,reversed:s.reversed};
  });
  const trail: Trail={version:1,revision:input.revision,start:input.start,steps}; validateTrail(a,trail); return trail;
}
