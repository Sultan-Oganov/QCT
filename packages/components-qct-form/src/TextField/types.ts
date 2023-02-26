import type { BuilderConfig } from '@qctoken/register/lib/types';
import type { SetGlobal } from '@qctoken/store';

export const TextFieldName = 'QCT.FORM.TEXT_FIELD';
export type TextFieldNameType = typeof TextFieldName;

type Validator = 'email' | 'required';

export interface TextFieldBuilderConfig extends BuilderConfig {
  label: string;
  validators: Validator[];
  name: string;
  htmlType: 'text' | 'number' | 'password';
  helperText?: string;
  maxLength?: number;
  icon?: BuilderConfig;
  setglobal?: SetGlobal;
  disabled: boolean;
  type: TextFieldNameType;
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [TextFieldName]: TextFieldBuilderConfig;
  }
}
