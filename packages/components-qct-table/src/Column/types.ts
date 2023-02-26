import type { BuilderConfig } from '@qctoken/register/lib/types';
import { Colors } from '@qctoken/theme';

export const ColumnName = 'QCT.TABLE.COLUMN';
export type ColumnNameType = typeof ColumnName;

export interface ColumnBuilderConfig extends BuilderConfig {
  type: ColumnNameType;
  name?: string;
  width?: string;
  childs: BuilderConfig[];
  backgroundColor?: keyof Colors;
  borderRadius?: string;
  padding: string;
  align: string;
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [ColumnName]: ColumnBuilderConfig;
  }
}
