import type { BuilderConfig } from '@qctoken/register/lib/types';

export const RadioName = 'QCT.FORM.RADIO';
export type RadioNameType = typeof RadioName;

export interface RadioBuilderConfig extends BuilderConfig {
  label: string;
  color: 'white' | 'primary';
  name: string;
  type: RadioNameType;
}
declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [RadioName]: RadioBuilderConfig;
  }
}
