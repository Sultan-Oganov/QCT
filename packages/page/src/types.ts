import { BuilderConfig } from '@qctoken/register';

export type GlobalPageConfig = {
  name: string;
  isUnmount: boolean;
};

export interface PageBuilderConfig extends BuilderConfig {
  isSetParamsToStore?: boolean;
  globalsDown?: (string | GlobalPageConfig)[];
  globalsUp?: (string | GlobalPageConfig)[];

  // This attribute come from backend and can not be configure in admin panel
  childs?: BuilderConfig[];
}

export interface PagePathBuilderConfig extends PageBuilderConfig {
  appPath?: string;
  pagePath?: string;
}

export interface PageIdBuilderConfig extends PageBuilderConfig {
  accessList?: string[] | number[];
  pageId?: string;
}
