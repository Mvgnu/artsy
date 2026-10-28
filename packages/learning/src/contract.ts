import type { Trail } from '../../graph/src/contract.js';
export interface LearningThread {
  id: string; title: string; question: string; trail: Trail;
  claimIds: readonly string[]; reflection: string;
  mode: 'guided' | 'open-ended';
}
