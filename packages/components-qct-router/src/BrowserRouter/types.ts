import type { BuilderConfig } from '@qctoken/register/lib/types';

export const BrowserRouterName = 'QCT.ROUTER.BROWSER_ROUTER';
export type BrowserRouterNameType = typeof BrowserRouterName;

export interface BrowserRouterBuilderConfig extends BuilderConfig {
  childs: BuilderConfig[];
  type: BrowserRouterNameType;
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [BrowserRouterName]: BrowserRouterBuilderConfig;
  }
}
