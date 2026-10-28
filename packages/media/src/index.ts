import type { Atlas, Media } from '../../knowledge/src/contract.js';
import { safeUrl } from '../../knowledge/src/index.js';
import type { MediaDecision } from './contract.js';
export function canDisplay(m:Media,a:Atlas):MediaDecision {
  if (!a.sources.some(s=>s.id===m.rightsSourceId)||!a.entities.some(e=>e.id===m.workId&&e.kind==='work')) return {display:false,reason:'Missing object or rights evidence'};
  try {safeUrl(m.url);} catch {return {display:false,reason:'Unsafe URL'};}
  if (!m.alt.trim()||!m.credit.trim()) return {display:false,reason:'Missing description or credit'};
  if (m.rights==='cc0'||m.rights==='public-domain') return {display:true,reason:'Object-specific open rights recorded'};
  return {display:false,reason:'Restricted, unknown, or permission scope not yet implemented'};
}
