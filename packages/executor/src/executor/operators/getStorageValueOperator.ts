import type { GetStorageValueOperator } from '../types';
import type { Options } from './operator.types';

export function getStorageValueOperator(
  options: Options,
  operator: GetStorageValueOperator,
) {
  const { name, storage = 'localStorage' } = operator;

  if (storage === 'localStorage') {
    return window.localStorage.getItem(name);
  }

  return undefined;
}
