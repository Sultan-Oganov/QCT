import type { ConcatStrOperator } from '../types';
import type { Options, RunOperatorType } from './operator.types';

export function concatStrOperator(
  options: Options,
  operator: ConcatStrOperator,
  runOperator: RunOperatorType,
) {
  return operator.nodes
    .map((op) => runOperator(options, op))
    .join(operator.join || '');
}
