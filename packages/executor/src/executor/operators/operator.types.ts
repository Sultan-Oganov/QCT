import type { PageModel } from '@qctoken/store';
import type { Operator } from '../types';

export type Options = {
  values?: Record<string, unknown>;
  pageStore: PageModel;
};

export type RunOperatorType = (options: Options, operator?: Operator) => any;
