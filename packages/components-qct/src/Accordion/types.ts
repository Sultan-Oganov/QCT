import type { Operator } from '@qctoken/executor';
import type { BuilderConfig } from '@qctoken/register';

export const AccordionName = 'QCT.COMMON.ACCORDION';
export type AccordionNameType = typeof AccordionName;

export interface AccordionBuilderConfig extends BuilderConfig {
  type: AccordionNameType;
  headers: BuilderConfig[];
  childs: BuilderConfig[];
  isOpenDefault?: boolean | Operator;
}
declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [AccordionName]: AccordionBuilderConfig;
  }
}
