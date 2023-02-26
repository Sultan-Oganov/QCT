import type { BuilderConfig } from '@qctoken/register/lib/types';
import type { GlobalQueryParams } from '@qctoken/store';

export const GetRecordToValuesName = 'QCT.COMMON.GET_RECORD_TO_VALUES';
export type GetRecordToValuesNameType = typeof GetRecordToValuesName;

export interface GetRecordToValuesBuilderConfig extends BuilderConfig {
  type: GetRecordToValuesNameType;
  childs: BuilderConfig[];
  query?: string;
  queryParams?: GlobalQueryParams;
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [GetRecordToValuesName]: GetRecordToValuesBuilderConfig;
  }
}
