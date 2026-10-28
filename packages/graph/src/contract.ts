import type { Claim, Entity, Predicate } from '../../knowledge/src/contract.js';
export interface QueryOptions { includeUncertain?: boolean; includeDisputed?: boolean; predicates?: readonly Predicate[] }
export interface Step { from: string; to: string; claimId: string; reversed: boolean }
export interface Neighbor { entity: Entity; claim: Claim; step: Step; label: string }
export interface Trail { version: 1; revision: string; start: string; steps: readonly Step[] }
export type PathResult = {status:'found';steps:readonly Step[]} | {status:'no-path'|'limit-reached';steps:readonly Step[]};
