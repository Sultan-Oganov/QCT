import type { PageModel } from '@qctoken/store';
import type { Operator, OperatorName } from '../executor/types';
import { useRule } from './useRule';

export function useBooleanRule(
  pageStore: PageModel,
  nodes?: Operator[],
  values?: Record<string, unknown>,
  primaryOperator?: OperatorName.OR | OperatorName.AND,
): boolean {
  const value = useRule(pageStore, nodes, values, primaryOperator);

  return !!value;
}
