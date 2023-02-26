import type { BuilderConfig } from '@qctoken/register/lib/types';

export const PressSelectValueName = 'QCT.FORM.PRESS_SELECT_VALUE';
export type PressSelectValueNameType = typeof PressSelectValueName;

export interface PressSelectValueBuilderConfig extends BuilderConfig {
  name: string;
  value?: string;
  childs: BuilderConfig[];
  type: PressSelectValueNameType;
}
declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [PressSelectValueName]: PressSelectValueBuilderConfig;
  }
}
