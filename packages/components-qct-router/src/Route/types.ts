import type { BuilderConfig } from '@qctoken/register/lib/types';

export const RouteName = 'QCT.ROUTER.ROUTE';
export type RouteNameType = typeof RouteName;

export interface RouteBuilderConfig extends BuilderConfig {
  element?: BuilderConfig;
  path?: string;
  type: RouteNameType;
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [RouteName]: RouteBuilderConfig;
  }
}
