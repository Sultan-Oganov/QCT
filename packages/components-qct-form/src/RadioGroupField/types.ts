import type { BuilderConfig } from '@qctoken/register/lib/types';
import type { SetGlobal, GlobalQueryParams } from '@qctoken/store';

export const RadioGroupFieldName = 'QCT.FORM.RADIO_GROUP_FIELD';
export type RadioGroupFieldNameType = typeof RadioGroupFieldName;

export interface RadioGroupFieldBuilderConfig extends BuilderConfig {
  name?: string;
  displayName?: string;
  valueName?: string;
  query?: string;
  setglobal?: SetGlobal;
  queryParams?: GlobalQueryParams;
  showAll?: boolean;
  type: RadioGroupFieldNameType;
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [RadioGroupFieldName]: RadioGroupFieldBuilderConfig;
  }
}
