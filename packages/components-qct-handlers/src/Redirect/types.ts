import type { BuilderConfig } from '@qctoken/register/lib/types';

export const RedirectName = 'QCT.HANDLERS.REDIRECT';
export type RedirectNameType = typeof RedirectName;

export interface RedirectBuilderConfig extends BuilderConfig {
  pagePath?: string;
  actionName: 'onProcess';
  type: RedirectNameType;
}
declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [RedirectName]: RedirectBuilderConfig;
  }
}
