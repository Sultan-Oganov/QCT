import type { Operator } from '@qctoken/executor';
import type { BuilderConfig } from '@qctoken/register/lib/types';
import type { GlobalQueryParams, SetGlobal } from '@qctoken/store';
import type { Colors } from '@qctoken/theme';

export const ShowRecordsName = 'QCT.COMMON.SHOW_RECORDS';
export type ShowRecordsNameType = typeof ShowRecordsName;

export interface ShowRecordsBuilderConfig extends BuilderConfig {
  type: ShowRecordsNameType;
  records?: Record<string, unknown>[];
  childs: BuilderConfig[];
  alt?: string;
  query?: string;
  queryParams?: GlobalQueryParams;
  isSetGlobalFirst: boolean;
  setGlobal?: SetGlobal;
  mapRecords?: Operator;
  pageSize?: number;
  notFoundChilds: BuilderConfig[];
  loaderColor: keyof Colors;
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [ShowRecordsName]: ShowRecordsBuilderConfig;
  }
}
