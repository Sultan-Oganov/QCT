import type { BuilderConfig } from '@qctoken/register/lib/types';

export const WindowName = 'QCT.COMMON.WINDOW';
export type WindowNameType = typeof WindowName;

export interface WindowBuilderConfig extends BuilderConfig {
  title?: string;
  width: string;
  height: string;
  minWidth: string;
  header?: BuilderConfig[];
  childs: BuilderConfig[];
  type: WindowNameType;
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [WindowName]: WindowBuilderConfig;
  }
}
