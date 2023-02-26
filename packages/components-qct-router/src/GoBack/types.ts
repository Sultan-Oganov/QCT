import type { BuilderConfig } from '@qctoken/register/lib/types';

export const GoBackName = 'QCT.ROUTER.GO_BACK';
export type GoBackNameType = typeof GoBackName;

export interface GoBackBuilderConfig extends BuilderConfig {
  childs: BuilderConfig[];
  count: number;
  type: GoBackNameType;
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [GoBackName]: GoBackBuilderConfig;
  }
}
