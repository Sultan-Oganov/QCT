import type { BuilderConfig } from '@qctoken/register/lib/types';

export const FormActionName = 'QCT.FORM.FORM_ACTION';
export type FormActionNameType = typeof FormActionName;

export interface FormActionBuilderConfig extends BuilderConfig {
  childs: BuilderConfig[];
  type: FormActionNameType;
}
declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [FormActionName]: FormActionBuilderConfig;
  }
}
