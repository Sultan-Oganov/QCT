import type { BuilderConfig } from '@qctoken/register/lib/types';

export const QCTLandingName = 'QCT.STATIC.LANDING';
export type QCTLandingNameType = typeof QCTLandingName;

export interface QCTLandingBuilderConfig extends BuilderConfig {
  type: QCTLandingNameType;
  startLink?: string;
  buyQCTLink?: string;
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [QCTLandingName]: QCTLandingBuilderConfig;
  }
}
