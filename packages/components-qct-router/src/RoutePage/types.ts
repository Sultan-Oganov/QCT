import type { BuilderConfig } from '@qctoken/register/lib/types';

export const RoutePageName = 'QCT.ROUTER.ROUTE_PAGE';
export type RoutePageNameType = typeof RoutePageName;

export interface RoutePageBuilderConfig extends BuilderConfig {
  type: RoutePageNameType;
  path?: string;
  pageId?: string;
  isSetParamsToStore?: boolean;
  accessList?: string[] | number[];
  globalsDown?: string[];
  globalsUp?: string[];
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [RoutePageName]: RoutePageBuilderConfig;
  }
}
