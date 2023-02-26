import type { BuilderConfig } from '@qctoken/register';
import { AdaptiveMixCssValue } from '@qctoken/theme';

export const DropdownName = 'QCT.COMMON.DROPDOWN';
export type DropdownNameType = typeof DropdownName;

export interface DropdownBuilderConfig extends BuilderConfig {
  type: DropdownNameType;
  width: string;
  label?: BuilderConfig;
  icon?: BuilderConfig;
  childs?: BuilderConfig[];
  margin?: AdaptiveMixCssValue<string>;
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [DropdownName]: DropdownBuilderConfig;
  }
}
