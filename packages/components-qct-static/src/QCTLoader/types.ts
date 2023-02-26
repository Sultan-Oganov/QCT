import type { BuilderConfig } from '@qctoken/register';
import type { Colors } from '@qctoken/theme';

export const QCTLoaderName = 'QCT.STATIC.LOADER';
export type QCTLoaderNameType = typeof QCTLoaderName;

export interface QCTLoaderBuilderConfig extends BuilderConfig {
  type: QCTLoaderNameType;
  color?: keyof Colors;
  size?: number;
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [QCTLoaderName]: QCTLoaderBuilderConfig;
  }
}
