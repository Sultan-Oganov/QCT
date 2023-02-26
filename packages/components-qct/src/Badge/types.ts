import type { BuilderConfig } from '@qctoken/register/lib/types';

export const BadgeName = 'QCT.COMMON.BADGE';
export type BadgeNameType = typeof BadgeName;

export interface BadgeBuilderConfig extends BuilderConfig {
  title: string;
  color: 'white' | 'black';
  backgroundColor: 'primary' | 'secondary' | 'red' | 'white' | 'black';
  type: BadgeNameType;
}
declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [BadgeName]: BadgeBuilderConfig;
  }
}
