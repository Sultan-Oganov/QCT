import type { BuilderConfig } from '@qctoken/register/lib/types';

export const StripeResultName = 'QCT.STRIPE.STRIPE_RESULT';
export type StripeResultNameType = typeof StripeResultName;

export interface StripeResultBuilderConfig extends BuilderConfig {
  type: StripeResultNameType;
  loadScriptSrc?: string;
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [StripeResultName]: StripeResultBuilderConfig;
  }
}
