import type { BuilderConfig } from '@qctoken/register/lib/types';

export const TextFieldName = 'BCH.COMMON.TEXT_FIELD';
export type TextFieldNameType = typeof TextFieldName;

type Validator = 'email' | 'required';

export interface TextFieldBuilderConfig extends BuilderConfig {
  label: string;
  validators: Validator[];
  name: string;
  htmlType: 'text' | 'number' | 'password';
  placeholder?: string;
  disabled: boolean;
  type: TextFieldNameType;
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [TextFieldName]: TextFieldBuilderConfig;
  }
}
