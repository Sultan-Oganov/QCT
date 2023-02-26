import type { Operator } from '@qctoken/executor';
import type { BuilderConfig } from '@qctoken/register/lib/types';

export const AvatarName = 'QCT.COMMON.AVATAR';
export type AvatarNameType = typeof AvatarName;

export interface AvatarBuilderConfig extends BuilderConfig {
  size: number;
  src?: string | Operator;
  name?: string;
  type: AvatarNameType;
}
declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [AvatarName]: AvatarBuilderConfig;
  }
}
