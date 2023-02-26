import type { Operator } from '@qctoken/executor';
import type { BuilderConfig } from '@qctoken/register/lib/types';
import type { Colors } from '@qctoken/theme';

export const QCTLogoName = 'QCT.STATIC.LOGO';
export type QCTLogoNameType = typeof QCTLogoName;

export interface QCTLogoBuilderConfig extends BuilderConfig {
  type: QCTLogoNameType;
  hiddenRules?: Operator[];
  color: keyof Colors;
  height: string;
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [QCTLogoName]: QCTLogoBuilderConfig;
  }
}
