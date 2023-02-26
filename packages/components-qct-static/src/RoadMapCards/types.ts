import type { BuilderConfig } from '@qctoken/register/lib/types';

export const RoadMapCardsName = 'QCT.STATIC.ROADMAP.CARDS';
export type RoadMapCardsNameType = typeof RoadMapCardsName;

export interface RoadMapCardsBuilderConfig extends BuilderConfig {
  type: RoadMapCardsNameType;
  child: BuilderConfig[];
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [RoadMapCardsName]: RoadMapCardsBuilderConfig;
  }
}
