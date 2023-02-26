import type { BuilderConfig } from '@qctoken/register/lib/types';

export const NumpadFieldName = 'QCT.FORM.NUMPAD_FIELD';
export type NumpadFieldNameType = typeof NumpadFieldName;

export interface NumpadFieldBuilderConfig extends BuilderConfig {
  type: NumpadFieldNameType;
  name?: string;
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [NumpadFieldName]: NumpadFieldBuilderConfig;
  }
}
