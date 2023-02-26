import type { BuilderConfig } from '@qctoken/register/lib/types';
import { Colors } from '@qctoken/theme';

export const SnackbarName = 'QCT.COMMON.SNACKBAR';
export type SnackbarNameType = typeof SnackbarName;

export interface Message {
  msg: string;
}
export interface SnackbarBuilderConfig extends BuilderConfig {
  positionType:
    | 'topCenter'
    | 'topLeft'
    | 'topRight'
    | 'bottomCenter'
    | 'bottomLeft'
    | 'bottomRight';

  backgroundColor: keyof Colors;
  width?: string;
  type: SnackbarNameType;
}
declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [SnackbarName]: SnackbarBuilderConfig;
  }
}
