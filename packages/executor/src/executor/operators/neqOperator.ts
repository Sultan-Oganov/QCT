import type { NoEqOperator } from '../types';
import type { Options, RunOperatorType } from './operator.types';

export function neqOperator(
  options: Options,
  operator: NoEqOperator,
  runOperator: RunOperatorType,
) {
  const leftValue = runOperator(options, operator.left);
  const rightValue = runOperator(options, operator.right);
  return leftValue !== rightValue;
}
