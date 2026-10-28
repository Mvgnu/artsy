import type { Claim, Entity } from '../../knowledge/src/contract.js';
import { label, predicates } from '../../knowledge/src/index.js';
import { neighbors, findPath, parseTrail } from '../../graph/src/index.js';
import type { QueryOptions, Step, Trail } from '../../graph/src/contract.js';
import { canDisplay } from '../../media/src/index.js';
import type { ExplorerConfig } from './contract.js';
function element<K extends keyof HTMLElementTagNameMap>(tag:K,text='',className=''):HTMLElementTagNameMap[K] {
  const node=document.createElement(tag);node.textContent=text;node.className=className;return node;
}
function button(text:string,action:()=>void):HTMLButtonElement {const b=element('button',text);b.type='button';b.onclick=action;return b;}
export function mountExplorer({root,atlas,initialId,title}:ExplorerConfig):void {
  const entities=new Map(atlas.entities.map(e=>[e.id,e]));
  if (!entities.has(initialId)) throw new Error('Initial entity does not exist');
  let trail:Trail={version:1,revision:atlas.revision,start:initialId,steps:[]};
  let uncertain=false;let collections=true;let search='';let warning='';
  const current=()=>trail.steps.at(-1)?.to??trail.start;
  const entity=(id:string):Entity=>{const found=entities.get(id);if(!found)throw new Error('Unknown entity');return found;};
  const options=():QueryOptions=>({includeUncertain:uncertain,predicates:Object.keys(predicates).filter(isPredicate).filter(p=>collections||p!=='heldBy')});
  function isPredicate(v:string):v is keyof typeof predicates {return Object.hasOwn(predicates,v);}
  function store(focus=true):void {
    const u=new URL(location.href);u.hash=new URLSearchParams({trail:JSON.stringify(trail),uncertain:uncertain?'1':'0',collections:collections?'1':'0'}).toString();
    history.pushState(null,'',u);render(focus);
  }
  function readUrl():void {
    warning='';
    try {
      if (location.hash.length>32000) throw new Error('Oversized link');
      const params=new URLSearchParams(location.hash.slice(1));uncertain=params.get('uncertain')==='1';collections=params.get('collections')!=='0';
      const raw=params.get('trail');
      trail=raw?parseTrail(JSON.parse(raw),atlas):{version:1,revision:atlas.revision,start:initialId,steps:[]};
    } catch {trail={version:1,revision:atlas.revision,start:initialId,steps:[]};warning='This trail is invalid or belongs to another dataset revision. Nothing was silently remapped.';}
  }
  function begin(id:string):void {trail={version:1,revision:atlas.revision,start:id,steps:[]};search='';store();}
  function follow(step:Step):void {
    if(trail.steps.length>=64){warning='This shareable trail has reached 64 steps. Start a new thread to continue.';render(false);return;}
    trail={...trail,steps:[...trail.steps,step]};store();
  }
  function evidence(c:Claim):HTMLElement {
    const d=element('details');d.append(element('summary','Why this connection?'));
    d.append(element('p',`${c.certainty} · ${c.status}. ${c.note}`));
    for(const e of c.evidence){const s=atlas.sources.find(x=>x.id===e.sourceId);if(!s)continue;const a=element('a',`${s.publisher} — ${e.locator}`);a.href=s.url;a.target='_blank';a.rel='noopener noreferrer';d.append(a,element('small',`Read ${s.readAt} · ${c.id}`));}
    return d;
  }
  function render(focus:boolean):void {
    const active=document.activeElement?.id;root.replaceChildren();
    const e=entity(current());
    const header=element('header');header.append(element('p',title,'eyebrow'),element('p','Pick a thread. See where it leads.','tagline'));
    const stats=element('p',`${atlas.entities.length} entities · ${atlas.claims.length} sourced assertions · research prototype`,'muted');header.append(stats);root.append(header);
    const feedback=element('p',warning,'notice');feedback.setAttribute('role','status');root.append(feedback);
    const controls=element('section','','controls');controls.setAttribute('aria-label','Explore the catalogue');
    const inputLabel=element('label','Start somewhere else');const input=element('input');input.type='search';input.id='catalogue-search';input.placeholder='An artist, place, subject or period';input.value=search;inputLabel.append(input);controls.append(inputLabel);
    const hits=element('div','','search-results');
    function showResults():void {hits.replaceChildren();const q=search.toLocaleLowerCase();if(!q)return;for(const hit of atlas.entities.filter(x=>[...Object.values(x.labels),...x.aliases].some(s=>s.toLocaleLowerCase().includes(q))).slice(0,12))hits.append(button(`${label(hit)} · ${hit.kind}`,()=>begin(hit.id)));if(!hits.childElementCount)hits.append(element('p','Not in this seed yet. That is a coverage gap, not an absence from art history.'));}
    input.oninput=()=>{search=input.value;showResults();};showResults();controls.append(hits);
    for(const [caption,checked,change] of [ ['Include probable / possible links',uncertain,(v:boolean)=>{uncertain=v;}], ['Include collection connections',collections,(v:boolean)=>{collections=v;}] ] satisfies [string,boolean,(v:boolean)=>void][]) {
      const l=element('label','','toggle');const box=element('input');box.type='checkbox';box.id=caption.startsWith('Include probable')?'uncertain-links':'collection-links';box.checked=checked;box.onchange=()=>{change(box.checked);store(false);};l.append(box,document.createTextNode(caption));controls.append(l);
    }
    root.append(controls);
    const nav=element('nav','','trail');nav.setAttribute('aria-label','Your trail');nav.append(element('span','YOUR THREAD','eyebrow'));
    const nodes=[trail.start,...trail.steps.map(s=>s.to)];nodes.forEach((id,i)=>{const b=button(label(entity(id)),()=>{trail={...trail,steps:trail.steps.slice(0,i)};store();});if(i===nodes.length-1)b.setAttribute('aria-current','step');nav.append(b);});root.append(nav);
    const layout=element('div','','layout');const content=element('section','','subject');
    content.append(element('p',e.kind,'eyebrow'));const h=element('h1',label(e));h.tabIndex=-1;content.append(h);
    const literals=atlas.claims.filter(c=>c.subject===e.id&&c.object.kind!=='entity'&&c.status==='supported');
    const repeated=literals.some((c,i)=>literals.slice(i+1).some(x=>x.predicate===c.predicate));
    if(repeated)content.append(element('p','Sources give more than one value. Each statement remains visible; no consensus has been invented.','notice'));
    for(const c of literals){content.append(element('p',`${predicates[c.predicate].forward}: ${c.object.kind==='time'?c.object.label:c.object.kind==='text'?c.object.text:''}`),evidence(c));}
    const asset=atlas.media.find(m=>m.workId===e.id&&canDisplay(m,atlas).display);
    if(asset){const figure=element('figure');const image=element('img');image.src=asset.url;image.alt=asset.alt;image.referrerPolicy='no-referrer';image.onload=()=>{image.dataset.loaded='true';};image.onerror=()=>{image.hidden=true;figure.prepend(element('p','The museum image could not be loaded. The record and connections remain available.','notice'));};const caption=element('figcaption',asset.credit);figure.append(image,caption);content.append(figure);}else content.append(element('p','No cleared image is bundled for this record. Missing imagery does not remove its relationships.','muted'));
    const references=element('p','','references');for(const id of e.sourceIds){const s=atlas.sources.find(x=>x.id===id);if(s){const a=element('a','Open source record ↗');a.href=s.url;a.rel='noopener noreferrer';a.target='_blank';references.append(a);}}content.append(references);
    const aside=element('section','','connections');aside.append(element('h2','Where next?'),element('p','Every direction names the relationship. Reverse traversal does not reverse the historical claim.','muted'));
    const ns=neighbors(atlas,e.id,options());if(!ns.length)aside.append(element('p','No eligible connections are catalogued here. Try uncertain links or start a different thread.'));
    for(const n of ns){const card=element('article','','connection');card.append(element('p',`${n.label} · ${n.claim.certainty}`,'eyebrow'),button(`${label(n.entity)} →`,()=>follow(n.step)),evidence(n.claim));aside.append(card);}
    layout.append(content,aside);root.append(layout);
    const paths=element('section','','pathfinder');paths.append(element('h2','How could I get there?'));
    const sl=element('label','Destination');const select=element('select');for(const n of atlas.entities){const option=element('option',label(n));option.value=n.id;select.append(option);}sl.append(select);paths.append(sl);
    const result=element('div');result.setAttribute('aria-live','polite');
    paths.append(button('Find an evidenced path',()=>{result.replaceChildren();const found=findPath(atlas,current(),select.value,options());if(found.status!=='found'){result.append(element('p',found.status==='limit-reached'?'Search budget reached. This does not prove no path exists.':'No path in this dataset with these settings.'));return;}if(!found.steps.length){result.append(element('p','You are already here.'));return;}result.append(element('p','One shortest path in the current graph—not a claim of historical causation.'));for(const step of found.steps){const c=atlas.claims.find(x=>x.id===step.claimId);if(c){result.append(element('p',`${label(entity(step.from))} — ${step.reversed?predicates[c.predicate].inverse:predicates[c.predicate].forward} → ${label(entity(step.to))}`),evidence(c));}}result.append(button('Walk this path',()=>{if(trail.steps.length+found.steps.length>64){warning='Path exceeds the shareable trail limit.';render(false);return;}trail={...trail,steps:[...trail.steps,...found.steps]};store();}));}),result);root.append(paths);
    const share=element('section','','share');share.append(element('h2','Keep your thread'));
    const shareLabel=element('label','Shareable trail URL');const shareInput=element('textarea');shareInput.readOnly=true;shareInput.rows=3;const link=new URL(location.href);link.hash=new URLSearchParams({trail:JSON.stringify(trail),uncertain:uncertain?'1':'0',collections:collections?'1':'0'}).toString();shareInput.value=link.href;shareLabel.append(shareInput);share.append(shareLabel,button('Select trail link',()=>{shareInput.focus();shareInput.select();}));
    const exportLink=element('a','Export trail JSON');exportLink.href=`data:application/json;charset=utf-8,${encodeURIComponent(JSON.stringify(trail,null,2))}`;exportLink.download='artsy-trail.json';share.append(exportLink);root.append(share);
    const footer=element('footer',`Dataset ${atlas.revision}. Manually researched seed, not a complete catalogue. Shared subjects, institutions and temporal overlap are not evidence of influence. No account or tracking.`);root.append(footer);
    if(focus)h.focus();else if(active)document.getElementById(active)?.focus();
  }
  window.addEventListener('popstate',()=>{readUrl();render(true);});readUrl();render(false);
}
