import { Operator } from '@qctoken/executor';
import type { BuilderConfig } from '@qctoken/register/lib/types';

export const TokenValidateName = 'QCT.COMMON.TOKEN_VALIDATE';
export type TokenValidateNameType = typeof TokenValidateName;

export interface TokenValidateBuilderConfig extends BuilderConfig {
  type: TokenValidateNameType;
  getJWTToken?: Operator;
  redirect?: BuilderConfig;
}
declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [TokenValidateName]: TokenValidateBuilderConfig;
  }
}
