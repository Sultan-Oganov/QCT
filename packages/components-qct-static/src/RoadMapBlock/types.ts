import type { BuilderConfig } from '@qctoken/register/lib/types';

export const RoadMapBlockName = 'QCT.STATIC.ROADMAP.BLOCK';
export type RoadMapBlockNameType = typeof RoadMapBlockName;

export interface RoadMapBlockBuilderConfig extends BuilderConfig {
  type: RoadMapBlockNameType;
  child: BuilderConfig[];
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [RoadMapBlockName]: RoadMapBlockBuilderConfig;
  }
}
