import type { BuilderConfig } from '@qctoken/register/lib/types';

export const LocalStorageSaveName = 'QCT.HANDLERS.LOCAL_STORAGE_SAVE';
export type LocalStorageSaveNameType = typeof LocalStorageSaveName;

export interface LocalStorageSaveBuilderConfig extends BuilderConfig {
  from?: string;
  to?: string;
  actionName: 'onProcess';
  type: LocalStorageSaveNameType;
}
declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [LocalStorageSaveName]: LocalStorageSaveBuilderConfig;
  }
}
