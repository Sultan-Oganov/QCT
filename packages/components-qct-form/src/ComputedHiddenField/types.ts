import type { BuilderConfig } from '@qctoken/register/lib/types';
import { Operator } from '@qctoken/executor';

export const ComputedHiddenFieldName = 'QCT.FORM.COMPUTED_HIDDEN_FIELD';
export type ComputedHiddenFieldNameType = typeof ComputedHiddenFieldName;

export interface ComputedHiddenFieldBuilderConfig extends BuilderConfig {
  name?: string;
  getComputedValue?: Operator;
  type: ComputedHiddenFieldNameType;
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [ComputedHiddenFieldName]: ComputedHiddenFieldBuilderConfig;
  }
}
