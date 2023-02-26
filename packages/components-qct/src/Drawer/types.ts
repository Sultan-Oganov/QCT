import type { BuilderConfig } from '@qctoken/register';

export const DrawerName = 'QCT.COMMON.DRAWER';
export type DrawerNameType = typeof DrawerName;

export interface DrawerBuilderConfig extends BuilderConfig {
  type: DrawerNameType;
  childs: BuilderConfig[];
  appearance: 'bottom' | 'left' | 'right' | 'top';
  maxWidth?: string;
  maxHeight?: string;
  minWidth?: string;
  minHeight?: string;
  setStateToGlobal?: string;
  defaultIsOpen: boolean;
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [DrawerName]: DrawerBuilderConfig;
  }
}
