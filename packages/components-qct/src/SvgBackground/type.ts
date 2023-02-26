import type { BuilderConfig } from '@qctoken/register/lib/types';

export const SvgBackgroundName = 'QCT.COMMON.SVGBACKGROUND';
export type SvgBackgroundNameType = typeof SvgBackgroundName;

export interface SvgBackgroundBuilderConfig extends BuilderConfig {
  child: BuilderConfig;
  color: 'primary' | 'secondary' | 'white' | 'black';
  design: string;
  size: number;
  type: SvgBackgroundNameType;
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [SvgBackgroundName]: SvgBackgroundBuilderConfig;
  }
}
