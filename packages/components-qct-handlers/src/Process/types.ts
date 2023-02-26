import type { BuilderConfig } from '@qctoken/register/lib/types';

export const ProcessName = 'QCT.HANDLERS.PROCESS';
export type ProcessNameType = typeof ProcessName;

export interface ProcessBuilderConfig extends BuilderConfig {
  childs: BuilderConfig[];
  actionName: 'onProcess';
  type: ProcessNameType;
}
declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [ProcessName]: ProcessBuilderConfig;
  }
}
