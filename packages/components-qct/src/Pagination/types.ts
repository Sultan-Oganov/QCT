import type { BuilderConfig } from '@qctoken/register/lib/types';
import { AdaptiveMixCssValue, Colors } from '@qctoken/theme';

export const PaginationName = 'QCT.COMMON.PAGINATION';
export type PaginationNameType = typeof PaginationName;

export type UsePaginationArgs = {
  totalCount: number;
  pageSize: number;
  siblingCount: number;
  currentPage: number;
};

export interface PaginationBuilderConfig extends BuilderConfig {
  type: PaginationNameType;
  masterId?: string;
  backgroundColor: keyof Colors;
  siblingCount: number;
  width: string;
  margin?: AdaptiveMixCssValue<string>;
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [PaginationName]: PaginationBuilderConfig;
  }
}
