import { Operator } from '@qctoken/executor';
import type { BuilderConfig } from '@qctoken/register/lib/types';

export const ExecuteOperatorName = 'QCT.HANDLERS.EXECUTE_OPERATOR';
export type ExecuteOperatorNameType = typeof ExecuteOperatorName;

export interface ExecuteOperatorBuilderConfig extends BuilderConfig {
  type: ExecuteOperatorNameType;
  operator?: Operator;
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [ExecuteOperatorName]: ExecuteOperatorBuilderConfig;
  }
}
