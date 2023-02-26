import type { BuilderConfig } from '@qctoken/register/lib/types';

export const SvgIconName = 'QCT.COMMON.SVGICON';
export type SvgIconNameType = typeof SvgIconName;

export interface SvgIconBuilderConfig extends BuilderConfig {
  content: string;
  width: string | number;
  color: 'primary' | 'secondary' | 'white' | 'black' | 'inherit' | 'main';
  type: SvgIconNameType;
  viewBox: string | number;
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [SvgIconName]: SvgIconBuilderConfig;
  }
}
