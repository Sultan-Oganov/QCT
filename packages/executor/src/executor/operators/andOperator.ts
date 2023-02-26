import type { AndOperator } from '../types';
import type { Options, RunOperatorType } from './operator.types';

export function andOperator(
  options: Options,
  operator: AndOperator,
  runOperator: RunOperatorType,
) {
  let value: any;

  for (let nestedOperator of operator.nodes) {
    value = runOperator(options, nestedOperator);

    if (!value) {
      return value;
    }
  }

  return value;
}
