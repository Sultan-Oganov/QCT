import type { BuilderConfig } from '@qctoken/register/lib/types';

export const MetamaskName = 'QCT.METAMASK.METAMASK';
export type MetamaskNameType = typeof MetamaskName;

export interface MetamaskBuilderConfig extends BuilderConfig {
  tokenContract?: string;
  tokenHolder?: string;
  type: MetamaskNameType;
}
declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [MetamaskName]: MetamaskBuilderConfig;
  }
}
