import type { BuilderConfig } from '@qctoken/register/lib/types';

export const ImageFieldName = 'QCT.FORM.IMAGE_FIELD';
export type ImageFieldNameType = typeof ImageFieldName;

export interface ImageFieldBuilderConfig extends BuilderConfig {
  label?: string;
  size?: string;
  name?: string;
  resize: boolean;
  spacing: number;
  height?: string;
  type: ImageFieldNameType;
}
declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [ImageFieldName]: ImageFieldBuilderConfig;
  }
}
