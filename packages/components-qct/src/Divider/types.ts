import type { BuilderConfig } from '@qctoken/register';
import type { Colors } from '@qctoken/theme';

export const DividerName = 'QCT.COMMON.DIVIDER';
export type DividerNameType = typeof DividerName;

export interface DividerBuilderConfig extends BuilderConfig {
  type: DividerNameType;
  size: number;
  orientation: 'horizontal' | 'vertical';
  fullLength: boolean;
  color?: keyof Colors;
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [DividerName]: DividerBuilderConfig;
  }
}
