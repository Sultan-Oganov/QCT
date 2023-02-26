import type { BuilderConfig } from '@qctoken/register/lib/types';
import { type GlobalQueryParams } from '@qctoken/store';

export const PageObjectEditorName = 'QCT.BUILDER.PAGE_OBJECT_EDITOR';
export type PageObjectEditorNameType = typeof PageObjectEditorName;

export interface PageObjectEditorBuilderConfig extends BuilderConfig {
  query: string;
  queryParams: GlobalQueryParams;
  onInstanceUpdate?: BuilderConfig;
  type: PageObjectEditorNameType;
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [PageObjectEditorName]: PageObjectEditorBuilderConfig;
  }
}

type GroupAttributeChoose = {
  name: string;
  value: string;
};

type PageObjectAttr = {
  id: number;
  groupAttrId: number;
  pageObjectId: number;
  value: any;
};

export type GroupAttr = {
  id: number;
  groupObjectId: number;
  name: string;
  control: string;
  type: string[];
  description: string;
  default?: any;
  chooses?: GroupAttributeChoose[];
};

export type PageObjectWithAttrs = {
  id: number;
  name: string;
  displayName: string;
  objectName: string;
  position: number;
  parentId: null | number;
  parentType: null | string;
  objectId: number;
  pageId: number;
  pageObjectAttrs: PageObjectAttr[];
  groupObjectAttrs: GroupAttr[];
};

export type ChangeInputInfo = {
  groupAttrId: number;
  pageObjectId: number;
  deleteId?: number;
  value: unknown;
};
