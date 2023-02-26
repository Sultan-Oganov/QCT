import type { BuilderConfig } from '@qctoken/register/lib/types';

export const FormValuesName = 'QCT.FORM.VALUES';
export type FormValuesNameType = typeof FormValuesName;

export interface FormValuesBuilderConfig extends BuilderConfig {
  type: FormValuesNameType;
  childs: BuilderConfig[];
  names?: string[];
}
declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [FormValuesName]: FormValuesBuilderConfig;
  }
}
