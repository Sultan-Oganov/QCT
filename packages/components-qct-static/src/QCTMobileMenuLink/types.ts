import type { BuilderConfig } from '@qctoken/register/lib/types';

export const QCTMobileMenuLinkName = 'QCT.STATIC.MOBILE_MENU_LINK';
export type QCTMobileMenuNameLinkType = typeof QCTMobileMenuLinkName;

export interface QCTMobileMenuLinkBuilderConfig extends BuilderConfig {
  type: QCTMobileMenuNameLinkType;
  caption?: string;
  icon?: BuilderConfig;
  to: string;
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [QCTMobileMenuLinkName]: QCTMobileMenuLinkBuilderConfig;
  }
}
