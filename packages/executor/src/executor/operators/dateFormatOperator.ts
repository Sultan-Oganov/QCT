import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import type { DateFormatOperator } from '../types';
import type { Options, RunOperatorType } from './operator.types';

dayjs.extend(utc);

export function dateFormatOperator(
  options: Options,
  operator: DateFormatOperator,
  runOperator: RunOperatorType,
) {
  const { value, format } = operator;
  const date = typeof value === 'object' ? runOperator(options, value) : value;

  if (typeof date === 'string') {
    return dayjs.utc(date).local().format(format);
  }

  return '';
}
