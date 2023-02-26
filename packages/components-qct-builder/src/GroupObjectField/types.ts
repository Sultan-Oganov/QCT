import type { BuilderConfig } from '@qctoken/register/lib/types';
import { type GlobalQueryParams } from '@qctoken/store';

export const GroupObjectFieldName = 'QCT.BUILDER.GROUP_OBJECT_FIELD';
export type GroupObjectFieldNameType = typeof GroupObjectFieldName;

export interface GroupObjectFieldRecord {
  id: number;
  name: string;
  objectId: number;
  pageId: number;
  parentId: null | number;
  parentType: null | string;
  position: number;
}

export interface GroupObjectFieldBuilderConfig extends BuilderConfig {
  query?: string;
  name: string;
  height: string;
  setglobal?: {
    record: Record<string, string>;
  };
  queryParams?: GlobalQueryParams;
  type: GroupObjectFieldNameType;
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [GroupObjectFieldName]: GroupObjectFieldBuilderConfig;
  }
}
