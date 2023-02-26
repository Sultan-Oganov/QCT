import type { OrOperator } from '../types';
import type { Options, RunOperatorType } from './operator.types';

export function orOperator(
  options: Options,
  operator: OrOperator,
  runOperator: RunOperatorType,
) {
  let value: any;

  for (let nestedOperator of operator.nodes) {
    value = runOperator(options, nestedOperator);

    if (value) {
      return value;
    }
  }

  return value;
}
