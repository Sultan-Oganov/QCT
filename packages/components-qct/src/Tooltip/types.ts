import type { BuilderConfig } from '@qctoken/register/lib/types';
import { Colors } from '@qctoken/theme';

export const TooltipName = 'QCT.COMMON.TOOLTIP';
export type TooltipNameType = typeof TooltipName;

export interface TooltipBuilderConfig extends BuilderConfig {
  type: TooltipNameType;
  childs: BuilderConfig[];
  positionType: 'top' | 'bottom' | 'left' | 'right';
  message?: string;
  backgroundColor: keyof Colors;
  color: keyof Colors;
  width?: string;
  showTime: number;
}
declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [TooltipName]: TooltipBuilderConfig;
  }
}
