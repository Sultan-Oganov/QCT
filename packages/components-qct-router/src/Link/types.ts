import type { Operator } from '@qctoken/executor';
import type { BuilderConfig } from '@qctoken/register/lib/types';

export const LinkName = 'QCT.ROUTER.LINK';
export type LinkNameType = typeof LinkName;

export interface LinkBuilderConfig extends BuilderConfig {
  type: LinkNameType;
  childs: BuilderConfig[];
  to: string;
  borderRadius?: string;
  borderType?: 'solid' | 'dashed' | 'dotted' | 'double';
  borderWidth?: string;
  borderColor?: 'primary' | 'secondary' | 'white' | 'black' | 'main' | 'stroke';
  activeBackgroundColor?: string;
  isActivePartial?: boolean | Operator;
  activeTextColor?: string;
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [LinkName]: LinkBuilderConfig;
  }
}
