import type { BuilderConfig } from '@qctoken/register';
import type { Colors } from '@qctoken/theme';

export const ProgressCircleName = 'QCT.COMMON.PROGRESS_CIRCLE';
export type ProgressCircleNameType = typeof ProgressCircleName;

export interface ProgressCircleBuilderConfig extends BuilderConfig {
  type: ProgressCircleNameType;
  width: string;
  height: string;
  thickness: number;
  color: keyof Colors;
  progress: number;
  childs?: BuilderConfig[];
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [ProgressCircleName]: ProgressCircleBuilderConfig;
  }
}
