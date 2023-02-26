import type { GetQueryUrlValueOperator } from '../types';
import type { Options } from './operator.types';

export function getQueryUrlValueOperator(
  options: Options,
  operator: GetQueryUrlValueOperator,
) {
  return new URLSearchParams(window.location.search).get(operator.name);
}
