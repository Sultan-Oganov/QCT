import type { BuilderConfig } from '@qctoken/register';

export const RunOnMountName = 'QCT.HANDLERS.RUN_ON_MOUNT';
export type RunOnMountNameType = typeof RunOnMountName;

export interface RunOnMountBuilderConfig extends BuilderConfig {
  type: RunOnMountNameType;
  childs: BuilderConfig[];
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [RunOnMountName]: RunOnMountBuilderConfig;
  }
}
