import type { IsEmptyOperator } from '../types';
import type { Options, RunOperatorType } from './operator.types';

export function isEmptyOperator(
  options: Options,
  operator: IsEmptyOperator,
  runOperator: RunOperatorType,
) {
  const value = runOperator(options, operator.value);

  return value === null || value === undefined || value === '';
}
