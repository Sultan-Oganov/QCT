import type { GlobalOperator } from '../types';
import type { Options } from './operator.types';

export function globalOperator(options: Options, operator: GlobalOperator) {
  return options.pageStore.globalValues.get(operator.name);
}
