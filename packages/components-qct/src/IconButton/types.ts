import type { Operator } from '@qctoken/executor';
import type { BuilderConfig } from '@qctoken/register/lib/types';

export const IconButtonName = 'QCT.COMMON.ICON_BUTTON';
export type IconButtonNameType = typeof IconButtonName;

export interface IconButtonBuilderConfig extends BuilderConfig {
  type: IconButtonNameType;
  icon?: BuilderConfig;
  masterId?: string;
  actionName: string;
  hiddenRules?: Operator[];
  actionClick?: BuilderConfig;
  htmlType?: 'submit' | 'reset';
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [IconButtonName]: IconButtonBuilderConfig;
  }
}
