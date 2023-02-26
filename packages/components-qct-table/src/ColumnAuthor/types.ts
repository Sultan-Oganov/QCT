import type { BuilderConfig } from '@qctoken/register/lib/types';

export const ColumnAuthorName = 'QCT.TABLE.COLUMN_AUTHOR';
export type ColumnAuthorNameType = typeof ColumnAuthorName;

export interface ColumnAuthorBuilderConfig extends BuilderConfig {
  type: ColumnAuthorNameType;
  name?: string;
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [ColumnAuthorName]: ColumnAuthorBuilderConfig;
  }
}
