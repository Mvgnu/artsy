import test from 'node:test';import assert from 'node:assert/strict';import {overlap,historicalYear} from '../../../.build/packages/chronology/src/index.js';
const t=(earliest,latest)=>({kind:'time',label:'fixture',earliest,latest,precision:'range',calendar:'gregorian-proleptic'});
test('year zero formats as 1 BCE, not 0 CE',()=>{assert.equal(historicalYear(0),'1 BCE');assert.equal(historicalYear(-1),'2 BCE');assert.equal(historicalYear(1),'1 CE');});
test('open bounds are unknown, not infinite evidence',()=>assert.equal(overlap(t(null,null),t(1400,1500)),'unknown'));
test('known disjoint bounds remain disjoint even when another bound is open',()=>assert.equal(overlap(t(null,1400),t(1500,null)),'disjoint'));
test('envelope overlap includes shared endpoint',()=>assert.equal(overlap(t(1440,1460),t(1460,1470)),'overlaps'));
