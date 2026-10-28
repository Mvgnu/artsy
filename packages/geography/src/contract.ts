import type { Evidence, TimeSpan } from '../../knowledge/src/contract.js';
/** Geometry is a sourced assertion, never an implicit property of a name. */
export interface LocatedGeometry {
  placeId: string; latitude: number; longitude: number; precisionMetres: number | null;
  role: 'creation' | 'depiction' | 'findspot' | 'custody' | 'activity';
  validDuring: TimeSpan | null; evidence: readonly Evidence[];
  sensitive: boolean;
}
