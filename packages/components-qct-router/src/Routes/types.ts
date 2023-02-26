import type { BuilderConfig } from '@qctoken/register/lib/types';

export const RoutesName = 'QCT.ROUTER.ROUTES';
export type RoutesNameType = typeof RoutesName;

export interface RoutesBuilderConfig extends BuilderConfig {
  childs: BuilderConfig[];
  type: RoutesNameType;
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [RoutesName]: RoutesBuilderConfig;
  }
}
