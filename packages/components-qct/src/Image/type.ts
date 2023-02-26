import type { Operator } from '@qctoken/executor';
import type { BuilderConfig } from '@qctoken/register/lib/types';
import type { AdaptiveMixCssValue } from '@qctoken/theme';

export const ImageName = 'QCT.COMMON.IMAGE';
export type ImageNameType = typeof ImageName;

export interface ImageBuilderConfig extends BuilderConfig {
  type: ImageNameType;
  width: number | string;
  height?: number | string;
  src?: AdaptiveMixCssValue<string | Operator>;
  borderRadius?: string;
  resize: 'fill' | 'contain' | 'cover' | 'scale-down';
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [ImageName]: ImageBuilderConfig;
  }
}
