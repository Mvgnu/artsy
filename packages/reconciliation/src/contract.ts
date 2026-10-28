/** Proposal-only v0.1. No implementation or auto-merge is implied. */
export interface IdentityKey { authority: string; value: string; evidenceSourceId: string }
export interface ReconciliationProposal {
  candidateId: string; canonicalId: string;
  decision: 'exact-authority-match' | 'review-required' | 'different-object';
  reasons: readonly string[]; supportingKeys: readonly IdentityKey[];
}
export interface MergeDecision {
  id: string; from: string; to: string; reviewer: string; decidedAt: string;
  evidenceSourceIds: readonly string[]; reversible: true;
}
