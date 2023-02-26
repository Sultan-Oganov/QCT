import type { BuilderConfig } from '@qctoken/register/lib/types';
import type { SetGlobal } from '@qctoken/store';

export const SetGlobalHandlerName = 'QCT.HANDLERS.SET_GLOBAL_HANDLER';
export type SetGlobalHandlerNameType = typeof SetGlobalHandlerName;

export interface SetGlobalHandlerBuilderConfig extends BuilderConfig {
  actionName: 'onProcess';
  setglobal?: SetGlobal;
  type: SetGlobalHandlerNameType;
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [SetGlobalHandlerName]: SetGlobalHandlerBuilderConfig;
  }
}
