import type { BuilderConfig } from '@qctoken/register/lib/types';
import type { Colors } from '@qctoken/theme';

export const FormLoaderName = 'QCT.FORM.LOADER';
export type FormLoaderNameType = typeof FormLoaderName;

export interface FormLoaderBuilderConfig extends BuilderConfig {
  type: FormLoaderNameType;
  color: keyof Colors;
}
declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [FormLoaderName]: FormLoaderBuilderConfig;
  }
}
