import type { Operator } from '@qctoken/executor';
import type { BuilderConfig } from '@qctoken/register';
import type { AdaptiveMixCssValue, Colors } from '@qctoken/theme';

export const FlexBoxName = 'QCT.COMMON.FLEXBOX';
export type FlexBoxNameType = typeof FlexBoxName;

export interface FlexBoxBuilderConfig extends BuilderConfig {
  type: FlexBoxNameType;
  direction: AdaptiveMixCssValue<
    'column-reverse' | 'column' | 'row-reverse' | 'row'
  >;
  spacing?: AdaptiveMixCssValue<number>;
  wrap: 'nowrap' | 'wrap-reverse' | 'wrap';
  justifyContent:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems: AdaptiveMixCssValue<
    'stretch' | 'flex-start' | 'flex-end' | 'center'
  >;
  flexGrow?: AdaptiveMixCssValue<number>;
  flexShrink?: AdaptiveMixCssValue<number>;
  height?: AdaptiveMixCssValue<string>;
  width?: AdaptiveMixCssValue<string>;
  maxWidth?: AdaptiveMixCssValue<string>;
  minWidth?: AdaptiveMixCssValue<string>;
  maxHeight?: AdaptiveMixCssValue<string>;
  minHeight?: AdaptiveMixCssValue<string>;
  borderRadius: AdaptiveMixCssValue<string | undefined>;
  borderColor?: keyof Colors;
  margin?: AdaptiveMixCssValue<string>;
  padding: AdaptiveMixCssValue<string | number>;
  backgroundColor: AdaptiveMixCssValue<keyof Colors | undefined>;
  backgroundImage?: string | Operator;
  backgroundSize?: 'cover' | 'contain' | 'auto';
  childs: BuilderConfig[];
  hiddenRules?: Operator[];
  overflowY?: 'auto' | 'scroll' | 'hidden';
  overflowX?: 'auto' | 'scroll' | 'hidden';
  positionType: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
  positionSpace?: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  };
  actionClick?: BuilderConfig;
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [FlexBoxName]: FlexBoxBuilderConfig;
  }
}
