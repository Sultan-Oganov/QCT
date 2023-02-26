import { Operator } from '@qctoken/executor';
import type { BuilderConfig } from '@qctoken/register/lib/types';

export const DisableName = 'QCT.COMMON.DISABLE';
export type DisableNameType = typeof DisableName;

export interface DisableBuilderConfig extends BuilderConfig {
  type: DisableNameType;
  childs: BuilderConfig[];
  disableRules?: Operator[];
  invert?: boolean;
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [DisableName]: DisableBuilderConfig;
  }
}
