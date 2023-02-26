import type { GetValueOperator, Operator } from '../types';
import type { Options, RunOperatorType } from './operator.types';

type NestedRecord =
  | { [key: string]: NestedRecord }
  | string
  | number
  | undefined;

function getByPath(values: any, path: string[]) {
  let value: NestedRecord = values;

  for (const key of path) {
    if (typeof value !== 'object' || value === null) {
      return value;
    }

    const newValue: Record<string, NestedRecord> = value;

    value = newValue[key];
  }

  return value;
}

export function getValueOperator(
  options: Options,
  operator: GetValueOperator,
  runOperator: RunOperatorType,
) {
  let name: string | Operator | undefined = operator.name;
  const values = operator.values
    ? runOperator(options, operator.values)
    : options.values;

  if (typeof values !== 'object' || values === null) {
    return values;
  }

  if (typeof name === 'object') {
    name = runOperator(options, name) as string | undefined;
  }

  if (!name) {
    return undefined;
  }

  if (name.includes('.')) {
    return getByPath(values, name.split('.'));
  }

  return values[name];
}
