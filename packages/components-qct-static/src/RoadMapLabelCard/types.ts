import type { BuilderConfig } from '@qctoken/register/lib/types';

export const RoadMapLabelCardName = 'QCT.STATIC.ROADMAP.LABELCARD';
export type RoadMapLabelCardNameType = typeof RoadMapLabelCardName;

export interface RoadMapLabelCardBuilderConfig extends BuilderConfig {
  type: RoadMapLabelCardNameType;
  title: string;
  child: BuilderConfig;
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [RoadMapLabelCardName]: RoadMapLabelCardBuilderConfig;
  }
}
