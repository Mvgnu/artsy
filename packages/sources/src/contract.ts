export type Provider = 'met' | 'aic';
export interface RawRecord {
  provider: Provider; remoteId: string; requestUrl: string;
  retrievedAt: string; body: unknown;
}
export interface SourceRegistration {
  id: string; name: string; docs: string;
  verification: 'docs-read' | 'page-read' | 'blocked' | 'candidate';
  checkedAt: string; access: string; metadataRights: string; imageRights: string;
  role: string; warning: string;
}
