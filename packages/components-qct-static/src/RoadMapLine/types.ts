import type { BuilderConfig } from '@qctoken/register/lib/types';

export const RoadMapLineName = 'QCT.STATIC.ROADMAP.LINE';
export type RoadMapLineNameType = typeof RoadMapLineName;

export interface RoadMapLineBuilderConfig extends BuilderConfig {
  width: number;
  type: RoadMapLineNameType;
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [RoadMapLineName]: RoadMapLineBuilderConfig;
  }
}
