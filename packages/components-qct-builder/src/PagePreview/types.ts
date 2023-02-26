import type { BuilderConfig } from '@qctoken/register/lib/types';
import { type GlobalQueryParams } from '@qctoken/store';

export const PagePreviewName = 'QCT.BUILDER.PAGE_PREVIEW';
export type PagePreviewNameType = typeof PagePreviewName;

export interface PagePreviewBuilderConfig extends BuilderConfig {
  query: string;
  queryParams: GlobalQueryParams;
  type: PagePreviewNameType;
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [PagePreviewName]: PagePreviewBuilderConfig;
  }
}
