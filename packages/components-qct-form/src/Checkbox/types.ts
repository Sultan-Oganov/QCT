import type { Operator } from '@qctoken/executor';
import type { BuilderConfig } from '@qctoken/register/lib/types';
import type { Colors } from '@qctoken/theme';

export const CheckboxName = 'QCT.FORM.CHECKBOX';
export type CheckboxNameType = typeof CheckboxName;

export interface CheckboxBuilderConfig extends BuilderConfig {
  type: CheckboxNameType;
  color: keyof Colors;
  label?: string;
  name?: string;
  variant: 'single' | 'multi';
  value?: string | Operator;
}
declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [CheckboxName]: CheckboxBuilderConfig;
  }
}
