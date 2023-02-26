import type { BuilderConfig } from '@qctoken/register/lib/types';
import type { Operator } from '@qctoken/executor';

export const SubmitRequestName = 'QCT.HANDLERS.SUBMIT_REQUEST';
export type SubmitRequestNameType = typeof SubmitRequestName;

export interface SubmitRequestBuilderConfig extends BuilderConfig {
  queryUrl?: Operator;
  queryMethod?: Operator;
  onError?: BuilderConfig;
  type: SubmitRequestNameType;
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [SubmitRequestName]: SubmitRequestBuilderConfig;
  }
}
