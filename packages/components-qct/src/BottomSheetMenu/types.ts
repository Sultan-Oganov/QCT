import type { BuilderConfig } from '@qctoken/register';

export const BottomSheetMenuName = 'QCT.COMMON.BOTTOM_SHEET_MENU';
export type BottomSheetMenuNameType = typeof BottomSheetMenuName;

export interface BottomSheetMenuBuilderConfig extends BuilderConfig {
  type: BottomSheetMenuNameType;
  header: BuilderConfig;
  childs: BuilderConfig[];
  minHeight?: number;
  maxHeight?: number;
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [BottomSheetMenuName]: BottomSheetMenuBuilderConfig;
  }
}
