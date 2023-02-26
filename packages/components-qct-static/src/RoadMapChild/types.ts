import type { BuilderConfig } from '@qctoken/register/lib/types';

export const RoadMapChildName = 'QCT.STATIC.ROADMAP.CHILD';
export type RoadMapChildNameType = typeof RoadMapChildName;

export interface RoadMapChildBuilderConfig extends BuilderConfig {
  type: RoadMapChildNameType;
  child: BuilderConfig[];
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [RoadMapChildName]: RoadMapChildBuilderConfig;
  }
}
