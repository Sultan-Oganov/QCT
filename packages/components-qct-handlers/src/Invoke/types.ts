import type { BuilderConfig } from '@qctoken/register/lib/types';

export const InvokeName = 'QCT.HANDLERS.INVOKE';
export type InvokeNameType = typeof InvokeName;

export interface InvokeBuilderConfig extends BuilderConfig {
  masterId?: string;
  actionName: 'onProcess';
  type: InvokeNameType;
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [InvokeName]: InvokeBuilderConfig;
  }
}
