import { parseAtlas } from '../../../packages/knowledge/src/index.js';
import { mountExplorer } from '../../../packages/exploration/src/index.js';
const root=document.getElementById('app');
// Keep a shareable trail hash intact when using the skip link.
document.querySelector('a.skip')?.addEventListener('click',event=>{if(root){event.preventDefault();root.focus();}});
if(root){try{const response=await fetch('./data/seed.json');if(!response.ok)throw new Error('Dataset unavailable');const input:unknown=await response.json();mountExplorer({root,atlas:parseAtlas(input),initialId:'work:nga-24',title:'ARTSY / THE EXPLORABLE ATLAS'});}catch(error){root.textContent=`The atlas could not be loaded: ${error instanceof Error?error.message:'unknown error'}. Serve this export with a local HTTP server; do not open it as a file.`;root.setAttribute('role','alert');}}
