import type { BuilderConfig } from '@qctoken/register/lib/types';
import { GlobalQueryParams } from '@qctoken/store';
import { Colors } from '@qctoken/theme';

export const TableName = 'QCT.TABLE.TABLE';
export type TableNameType = typeof TableName;

export interface TableBuilderConfig extends BuilderConfig {
  type: TableNameType;
  query?: string;
  queryParams?: GlobalQueryParams;
  notFound?: string;
  pageSize: number;
  columns: BuilderConfig[];
  headers: BuilderConfig[];
  borderSpacing?: string;
  showBorder: boolean;
  hoverBackgroundColor: boolean;
  backgroundColor: keyof Colors;
  addSelect: boolean;
  onError?: BuilderConfig;
  tableLayout: 'auto' | 'fixed';
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [TableName]: TableBuilderConfig;
  }
}
