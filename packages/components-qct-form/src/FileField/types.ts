import type { BuilderConfig } from '@qctoken/register/lib/types';

export const FileFieldName = 'QCT.FORM.FILE_FIELD';
export type FileFieldNameType = typeof FileFieldName;

export interface FileFieldBuilderConfig extends BuilderConfig {
  type: FileFieldNameType;
  label?: string;
  name?: string;
  fileType?: 'image' | 'video';
  showIcon: 'boolean';
  btnWidht?: string;
  spacing: number;
  height?: string;
  disabled: boolean;
  extraLink: boolean;
  extraLinkLabel?: string;
  imgHeight: string;
  imgWidth: string;
  helperText?: string;
}
declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [FileFieldName]: FileFieldBuilderConfig;
  }
}
