import type { BuilderConfig } from '@qctoken/register/lib/types';
import { Operator } from '@qctoken/executor';

export const ButtonName = 'QCT.COMMON.BUTTON';
export type ButtonNameType = typeof ButtonName;

export interface ButtonBuilderConfig extends BuilderConfig {
  type: ButtonNameType;
  title: string;
  getTitle?: Operator;
  width: string | number;
  height?: string;
  color: 'primary' | 'secondary' | 'white';
  variant: 'contained' | 'outlined' | 'text';
  disabled: boolean;
  icon: BuilderConfig;
  actionClick?: BuilderConfig;
  htmlType?: 'submit' | 'reset';
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [ButtonName]: ButtonBuilderConfig;
  }
}
