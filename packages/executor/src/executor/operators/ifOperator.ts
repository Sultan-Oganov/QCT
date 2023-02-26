import type { IfOperator } from '../types';
import type { Options, RunOperatorType } from './operator.types';

export function ifOperator(
  options: Options,
  operator: IfOperator,
  runOperator: RunOperatorType,
) {
  if (runOperator(options, operator.condition)) {
    return runOperator(options, operator.positive);
  } else {
    return runOperator(options, operator.negative);
  }
}
