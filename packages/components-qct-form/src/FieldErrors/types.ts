import type { BuilderConfig } from '@qctoken/register/lib/types';
import { Colors } from '@qctoken/theme';

export const FieldErrorsName = 'QCT.FORM.FIELD_ERRORS';
export type FieldErrorsNameType = typeof FieldErrorsName;

export interface FieldErrorsBuilderConfig extends BuilderConfig {
  type: FieldErrorsNameType;
  color: keyof Colors;
  name: string;
  errorsMap?: Record<string, string>;
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [FieldErrorsName]: FieldErrorsBuilderConfig;
  }
}
