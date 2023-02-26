import type { Operator } from '@qctoken/executor';
import type { BuilderConfig } from '@qctoken/register';

export const NativeLinkName = 'QCT.COMMON.NATIVE_LINK';
export type NativeLinkNameType = typeof NativeLinkName;

export interface NativeLinkBuilderConfig extends BuilderConfig {
  type: NativeLinkNameType;
  url?: string | Operator;
  childs: BuilderConfig[];
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [NativeLinkName]: NativeLinkBuilderConfig;
  }
}
