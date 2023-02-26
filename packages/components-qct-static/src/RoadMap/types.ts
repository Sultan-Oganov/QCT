import type { BuilderConfig } from '@qctoken/register/lib/types';

export const RoadMapName = 'QCT.STATIC.ROADMAP';
export type RoadMapNameType = typeof RoadMapName;

export interface RoadMapBuilderConfig extends BuilderConfig {
  title: string;
  subtitle: string;
  type: RoadMapNameType;
  child: BuilderConfig[];
  timelinechilds: BuilderConfig[];
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [RoadMapName]: RoadMapBuilderConfig;
  }
}
