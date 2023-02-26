import type { BuilderConfig } from '@qctoken/register/lib/types';
import { type GlobalQueryParams } from '@qctoken/store';

export const ModelSelectorName = 'QCT.BUILDER.MODEL_SELECTOR';
export type ModelSelectorNameType = typeof ModelSelectorName;

export interface ModelSelectorBuilderConfig extends BuilderConfig {
  query?: string;
  title?: string;
  height: string;
  addLeaf?: boolean;
  groupKey?: string;
  parentKey?: string;
  setglobal?: {
    record: Record<string, string>;
  };
  queryParams?: GlobalQueryParams;
  type: ModelSelectorNameType;
  addIcon?: BuilderConfig;
  editIcon?: BuilderConfig;
  hideDropdown: boolean;
  hasItemDivider: boolean;
  showFieldAll: boolean;
  displayName: string;
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [ModelSelectorName]: ModelSelectorBuilderConfig;
  }
}
