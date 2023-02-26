import type { Operator, OperatorName } from '@qctoken/executor';
import type { BuilderConfig } from '@qctoken/register/lib/types';

export const HiddenName = 'QCT.COMMON.HIDDEN';
export type HiddenNameType = typeof HiddenName;

export interface HiddenBuilderConfig extends BuilderConfig {
  type: HiddenNameType;
  childs: BuilderConfig[];
  hiddenRules?: Operator[];
  invert?: boolean;
  primaryOperator: OperatorName.OR | OperatorName.AND;
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [HiddenName]: HiddenBuilderConfig;
  }
}
