import type { BuilderConfig } from '@qctoken/register/lib/types';
import { Colors } from '@qctoken/theme';

export const FormErrorsName = 'QCT.FORM.ERRORS';
export type FormErrorsNameType = typeof FormErrorsName;

export interface FormErrorsBuilderConfig extends BuilderConfig {
  type: FormErrorsNameType;
  color?: keyof Colors;
}
declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [FormErrorsName]: FormErrorsBuilderConfig;
  }
}
