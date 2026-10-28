import type { TimeSpan } from '../../knowledge/src/contract.js';
import type { Overlap } from './contract.js';
/** Envelope intersection is not proof of contemporaneity or period membership. */
export function overlap(a:TimeSpan,b:TimeSpan):Overlap {
  if ((a.latest!==null&&b.earliest!==null&&a.latest<b.earliest)||(b.latest!==null&&a.earliest!==null&&b.latest<a.earliest)) return 'disjoint';
  if ([a.earliest,a.latest,b.earliest,b.latest].some(x=>x===null)) return 'unknown';
  return 'overlaps';
}
export function historicalYear(year:number):string {
  if (!Number.isSafeInteger(year)) throw new Error('Invalid year');
  return year<=0?`${1-year} BCE`:`${year} CE`;
}
