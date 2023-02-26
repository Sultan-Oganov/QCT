import type { BuilderConfig } from '@qctoken/register/lib/types';

export const MetamaskContainerName = 'QCT.METAMASK.METAMASK_CONTAINER';
export type MetamaskContainerNameType = typeof MetamaskContainerName;

export interface MetamaskContainerBuilderConfig extends BuilderConfig {
  type: MetamaskContainerNameType;
  childs: BuilderConfig[];
}
declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [MetamaskContainerName]: MetamaskContainerBuilderConfig;
  }
}
