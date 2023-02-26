import type { Operator } from '@qctoken/executor';
import type { BuilderConfig } from '@qctoken/register/lib/types';

export const StripeFormName = 'QCT.STRIPE.STRIPE_FORM';
export type StripeFormNameType = typeof StripeFormName;

export interface StripeFormBuilderConfig extends BuilderConfig {
  type: StripeFormNameType;
  getClientSecret?: Operator;
  publishableKey?: string;
  returnUrl?: string | Operator;
  buttonChild?: BuilderConfig;
  loadingChild?: BuilderConfig;
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [StripeFormName]: StripeFormBuilderConfig;
  }
}
