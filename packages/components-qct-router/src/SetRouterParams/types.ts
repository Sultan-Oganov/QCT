import type { BuilderConfig } from '@qctoken/register/lib/types';

export const SetRouterParamsName = 'QCT.ROUTER.SET_ROUTER_PARAMS';
export type SetRouterParamsNameType = typeof SetRouterParamsName;

export interface SetRouterParamsBuilderConfig extends BuilderConfig {
  type: SetRouterParamsNameType;
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [SetRouterParamsName]: SetRouterParamsBuilderConfig;
  }
}
