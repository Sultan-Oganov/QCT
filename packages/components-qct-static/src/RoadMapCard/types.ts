import type { BuilderConfig } from '@qctoken/register/lib/types';

export const RoadMapCardName = 'QCT.STATIC.ROADMAP.CARD';
export type RoadMapCardNameType = typeof RoadMapCardName;

export interface RoadMapCardBuilderConfig extends BuilderConfig {
  type: RoadMapCardNameType;
  title: string;
  child: BuilderConfig;
  description: string;
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [RoadMapCardName]: RoadMapCardBuilderConfig;
  }
}
