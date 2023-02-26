import type { BuilderConfig } from '@qctoken/register/lib/types';
import type { GlobalQueryParams, SetGlobal } from '@qctoken/store';

export const ChipGroupFieldName = 'QCT.FORM.CHIP_GROUP_FIELD';
export type ChipGroupFieldNameType = typeof ChipGroupFieldName;

export interface ChipGroupFieldBuilderConfig extends BuilderConfig {
  type: ChipGroupFieldNameType;
  name?: string;
  displayName?: string;
  valueName?: string;
  iconName?: string;
  query?: string;
  setGlobal?: SetGlobal;
  queryParams?: GlobalQueryParams;
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [ChipGroupFieldName]: ChipGroupFieldBuilderConfig;
  }
}
