import type { ObjectOperator } from '../types';
import type { Options, RunOperatorType } from './operator.types';

export function objectOperator(
  options: Options,
  operator: ObjectOperator,
  runOperator: RunOperatorType,
) {
  const newObject: Record<string, unknown> = {};

  Object.entries(operator.properties).forEach(([key, op]) => {
    newObject[key] = runOperator(options, op);
  });

  return newObject;
}
