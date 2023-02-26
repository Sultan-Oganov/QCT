import type { Operator } from '@qctoken/executor';
import type { BuilderConfig } from '@qctoken/register';
import type { AdaptiveMixCssValue, Colors } from '@qctoken/theme';

export const BlockName = 'QCT.COMMON.BLOCK';
export type BlockNameType = typeof BlockName;
export interface BlockBuilderConfig extends BuilderConfig {
  positionType: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
  positionSpace?: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  };
  borderRadius: AdaptiveMixCssValue<string | undefined>;
  hoverBackgroundColor: string;
  backgroundColor: AdaptiveMixCssValue<keyof Colors | undefined>;
  backgroundImage?: string;
  backgroundSize?: 'cover' | 'contain' | 'auto';
  backgroundX?: number;
  backgroundY?: number;
  margin?: string;
  padding?: string;
  disabled?: boolean;
  shadowType?: 'inset' | ' ';
  shadowX?: number;
  shadowY?: number;
  shadowBlur?: number;
  shadowColor?: 'primary' | 'secondary' | 'white' | 'black' | 'main';
  borderType?: 'solid' | 'dashed' | 'dotted' | 'double';
  borderWidth?: string;
  borderColor?: keyof Colors;
  width?: string;
  height?: string;
  hiddenRules?: Operator[];
  childs: BuilderConfig[];
  type: BlockNameType;
}
declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [BlockName]: BlockBuilderConfig;
  }
}
