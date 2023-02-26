import type { BuilderConfig } from '@qctoken/register/lib/types';
import { Colors } from '@qctoken/theme';

export const CarouselName = 'QCT.COMMON.CAROUSEL';
export type CarouselNameType = typeof CarouselName;

export interface CarouselBuilderConfig extends BuilderConfig {
  type: CarouselNameType;
  width: string;
  height: string;
  showArrow?: boolean;
  spaceBetween: number;
  slideWidth?: string;
  childs: BuilderConfig[];
  query?: string;
  notFoundChilds?: BuilderConfig[];
  loop: boolean;
  loaderColor: keyof Colors;
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [CarouselName]: CarouselBuilderConfig;
  }
}
