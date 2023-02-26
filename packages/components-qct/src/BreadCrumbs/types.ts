import type { BuilderConfig } from '@qctoken/register';

export const BreadCrumbsName = 'QCT.COMMON.BREAD_CRUMBS';
export type BreadCrumbsNameType = typeof BreadCrumbsName;

export interface BreadCrumbsBuilderConfig extends BuilderConfig {
  type: BreadCrumbsNameType;
  childs: BuilderConfig[];
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [BreadCrumbsName]: BreadCrumbsBuilderConfig;
  }
}
