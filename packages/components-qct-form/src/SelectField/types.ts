import type { BuilderConfig } from '@qctoken/register/lib/types';
import type { GlobalQueryParams } from '@qctoken/store';

export const SelectFieldName = 'QCT.FORM.SELECT_FIELD';
export type SelectFieldNameType = typeof SelectFieldName;

export interface SelectFieldBuilderConfig extends BuilderConfig {
  query: string;
  queryParams: GlobalQueryParams;
  label: string;
  name?: string;
  displayField?: string;
  valueField?: string;
  disabled: boolean;
  chooses?: Record<string, unknown>[];
  type: SelectFieldNameType;
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [SelectFieldName]: SelectFieldBuilderConfig;
  }
}
