import type { TranslateOperator } from '../types';
import type { Options, RunOperatorType } from './operator.types';

export function translateOperator(
  options: Options,
  operator: TranslateOperator,
  runOperator: RunOperatorType,
) {
  const { pageStore } = options;
  const { value } = operator;
  const name = typeof value === 'object' ? runOperator(options, value) : value;

  if (typeof name === 'string') {
    return pageStore.translate(name);
  }

  return '';
}
