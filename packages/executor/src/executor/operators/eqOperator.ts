import type { EqOperator } from '../types';
import type { Options, RunOperatorType } from './operator.types';

export function eqOperator(
  options: Options,
  operator: EqOperator,
  runOperator: RunOperatorType,
) {
  const leftValue = runOperator(options, operator.left);
  const rightValue = runOperator(options, operator.right);
  return leftValue === rightValue;
}
