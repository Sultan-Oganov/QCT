import type { BuilderConfig } from '@qctoken/register/lib/types';

export const PageName = 'QCT.COMMON.PAGE';
export type PageNameType = typeof PageName;

export interface PageBuilderConfig extends BuilderConfig {
  type: PageNameType;
  appPath?: string;
  pagePath?: string;
  globalsDown?: string[];
  globalsUp?: string[];
  // This attribute come from backend and can not be configure in admin panel
  childs?: BuilderConfig[];
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [PageName]: PageBuilderConfig;
  }
}
