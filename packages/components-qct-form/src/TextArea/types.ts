import type { BuilderConfig } from '@qctoken/register/lib/types';

export const TextAreaName = 'QCT.FORM.TEXT_AREA';
export type TextAreaNameType = typeof TextAreaName;

export interface TextAreaBuilderConfig extends BuilderConfig {
  label: string;
  disabled: boolean;
  name: string;
  helperText?: string;
  maxLength?: number;
  type: TextAreaNameType;
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [TextAreaName]: TextAreaBuilderConfig;
  }
}
