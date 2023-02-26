import type { BuilderConfig } from '@qctoken/register/lib/types';

export const QCTMobileMenuName = 'QCT.STATIC.MOBILE_MENU';
export type QCTMobileMenuNameType = typeof QCTMobileMenuName;

export interface QCTMobileMenuBuilderConfig extends BuilderConfig {
  type: QCTMobileMenuNameType;
  childs: BuilderConfig[];
  accessRoutes?: string[];
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [QCTMobileMenuName]: QCTMobileMenuBuilderConfig;
  }
}
