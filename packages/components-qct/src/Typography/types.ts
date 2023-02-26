import type { Operator } from '@qctoken/executor';
import type { BuilderConfig } from '@qctoken/register';
import type { AdaptiveMixCssValue } from '@qctoken/theme';

export const TypographyName = 'QCT.COMMON.TYPOGRAPHY';
export type TypographyNameType = typeof TypographyName;
export type TypographyColorType =
  | 'primary'
  | 'secondary'
  | 'white'
  | 'black'
  | 'main'
  | 'nonActive';

export interface TypographyBuilderConfig extends BuilderConfig {
  type: TypographyNameType;
  title?: string;
  getTitle?: Operator;
  styles: string[];
  color?: AdaptiveMixCssValue<TypographyColorType>;
  hoverColor?: AdaptiveMixCssValue<TypographyColorType>;
  opacity?: number;
  fontSize?: string;
  variant:
    | 'mega'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'highlighted'
    | 'regular'
    | 'sub'
    | 'badge'
    | 'micro';
  noWrap?: boolean;
  lines?: number;
  wordBreak: 'normal' | 'break-word' | 'break-all' | 'keep-all';
  textAlign?: 'left' | 'right' | 'center';
  translate?: boolean;
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [TypographyName]: TypographyBuilderConfig;
  }
}
