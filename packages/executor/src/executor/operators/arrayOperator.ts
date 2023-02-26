import type { ArrayOperator } from '../types';
import type { Options, RunOperatorType } from './operator.types';

export function arrayOperator(
  options: Options,
  operator: ArrayOperator,
  runOperator: RunOperatorType,
) {
  return operator.nodes.map((op) => runOperator(options, op));
}
