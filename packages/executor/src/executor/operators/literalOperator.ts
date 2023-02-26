import type { LiteralOperator } from '../types';
import type { Options } from './operator.types';

export function literalOperator(_options: Options, operator: LiteralOperator) {
  return operator.value;
}
