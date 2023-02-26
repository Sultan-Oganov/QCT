import type { InOperator } from '../types';
import type { Options, RunOperatorType } from './operator.types';

export function inOperator(
  options: Options,
  operator: InOperator,
  runOperator: RunOperatorType,
) {
  const leftValue = runOperator(options, operator.left);
  const rightValue = runOperator(options, operator.right);
  return Array.isArray(rightValue) && rightValue.includes(leftValue);
}
