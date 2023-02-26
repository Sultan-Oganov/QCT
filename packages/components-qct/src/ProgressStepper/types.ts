import type { Operator } from '@qctoken/executor';
import type { BuilderConfig } from '@qctoken/register/lib/types';
import type { Colors } from '@qctoken/theme';

export const ProgressStepperName = 'QCT.COMMON.PROGRESS_STEPPER';
export type ProgressStepperNameType = typeof ProgressStepperName;

export interface ProgressStepperBuilderConfig extends BuilderConfig {
  type: ProgressStepperNameType;
  activeColor: keyof Colors;
  progress: number | Operator;
  steps?: string[];
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [ProgressStepperName]: ProgressStepperBuilderConfig;
  }
}
