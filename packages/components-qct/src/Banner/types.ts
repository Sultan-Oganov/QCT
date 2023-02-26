import { Operator } from '@qctoken/executor';
import type { BuilderConfig } from '@qctoken/register';
import { Colors } from '@qctoken/theme';

export const BannerName = 'QCT.COMMON.BANNER';
export type BannerNameType = typeof BannerName;
export type BannerType = 'full' | 'right' | 'left' | 'twoSmall' | 'oneSmall';
export type BannerAlignContent = 'left' | 'right' | 'center';
export interface BannerBuilderConfig extends BuilderConfig {
  type: BannerNameType;
  width: string;
  height: string;
  imageType: BannerType;
  textAlign: BannerAlignContent;
  title: string;
  description: string;
  logo?: BuilderConfig;
  button?: BuilderConfig;
  backgroundColor: keyof Colors;
  mainBackgroundImage?: string | Operator;
  secondBackgroundImage?: string | Operator;
  price?: string;
  gradient: boolean;
}
declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [BannerName]: BannerBuilderConfig;
  }
}
