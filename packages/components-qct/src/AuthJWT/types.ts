import type { Operator } from '@qctoken/executor';
import type { BuilderConfig } from '@qctoken/register/lib/types';
import type { SetGlobal } from '@qctoken/store';

export const AuthJWTName = 'QCT.COMMON.AUTH_JWT';
export type AuthJWTNameType = typeof AuthJWTName;

export interface AuthJWTBuilderConfig extends BuilderConfig {
  type: AuthJWTNameType;
  childs: BuilderConfig[];
  getJWTToken?: Operator;
  setGlobal?: SetGlobal;
}
declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [AuthJWTName]: AuthJWTBuilderConfig;
  }
}
