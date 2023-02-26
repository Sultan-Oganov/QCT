import type { Operator } from '@qctoken/executor';
import type { BuilderConfig } from '@qctoken/register/lib/types';

export const CloudPaymentsFormName = 'QCT.CLOUD_PAYMENTS.CLOUD_PAYMENTS_FORM';
export type CloudPaymentsFormNameType = typeof CloudPaymentsFormName;

export interface CloudPaymentsFormBuilderConfig extends BuilderConfig {
  type: CloudPaymentsFormNameType;
  getPayInfo?: Operator;
  publicId?: string;
  submitHandlerSuccess?: BuilderConfig;
  submitHandlerFail?: BuilderConfig;
  buttonChild?: BuilderConfig;
  scriptUrl: string;
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [CloudPaymentsFormName]: CloudPaymentsFormBuilderConfig;
  }
}
