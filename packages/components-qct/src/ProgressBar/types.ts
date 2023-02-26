import type { Operator } from '@qctoken/executor';
import type { BuilderConfig } from '@qctoken/register';
import type { AdaptiveMixCssValue, Colors } from '@qctoken/theme';

export const ProgressBarName = 'QCT.COMMON.PROGRESSBAR';
export type ProgressBarNameType = typeof ProgressBarName;

export interface ProgressBarBuilderConfig extends BuilderConfig {
  width: string;
  height: string;
  fontSize?: string;
  activeLineColor: AdaptiveMixCssValue<keyof Colors>;
  lineColor: AdaptiveMixCssValue<keyof Colors>;
  progress?: number | Operator;
  startChilds?: BuilderConfig[];
  endChilds?: BuilderConfig[];
  progressTopChilds?: BuilderConfig[];
  progressBottomChilds?: BuilderConfig[];
  numberToCI?: Operator;
  type: ProgressBarNameType;
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [ProgressBarName]: ProgressBarBuilderConfig;
  }
}
