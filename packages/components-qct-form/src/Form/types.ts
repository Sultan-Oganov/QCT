import { Operator } from '@qctoken/executor';
import type { BuilderConfig } from '@qctoken/register/lib/types';
import type { GetGlobal, GlobalQueryParams, SetGlobal } from '@qctoken/store';
import { AdaptiveMixCssValue } from '@qctoken/theme';

export const FormName = 'QCT.FORM.FORM';
export type FormNameType = typeof FormName;

export interface FormBuilderConfig extends BuilderConfig {
  childs: BuilderConfig[];
  query?: string;
  queryParams?: GlobalQueryParams;
  submitHandlerSuccess?: BuilderConfig;
  submitQuery?: string | Operator;
  submitMethod?: Operator;
  isFormData: boolean;
  isRefreshAfterSubmit: boolean;
  height?: string;
  width?: string;
  overflowY?: 'auto' | 'scroll';
  type: FormNameType;
  setGlobal?: SetGlobal;
  getGlobal?: GetGlobal;
  minWidth?: AdaptiveMixCssValue<string>;
}
declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [FormName]: FormBuilderConfig;
  }
}
