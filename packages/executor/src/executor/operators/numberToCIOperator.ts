import type { NumberToCIOperator } from '../types';
import type { Options, RunOperatorType } from './operator.types';

//Rounded
const rnd = (n: number, precision: number) => {
  const prec = 10 ** precision;
  return Math.floor(n * prec) / prec;
};

const convertToCI = (n: number) => {
  const base: any = [
    { abbr: 'B', min: 1_000_000_000, base: 3 },
    { abbr: 'M', min: 1_000_000, base: 2 },
    { abbr: 'K', min: 1_000, base: 1 },
    { abbr: '', min: Number.NEGATIVE_INFINITY, base: 0 },
  ].find(({ min }) => min < Math.abs(n));

  const ciNumber = base.base === 0 ? n : n / base.min;
  return base.base === 0 ? ciNumber : rnd(ciNumber, 0) + base.abbr;
};

export function numberToCIOperator(
  options: Options,
  operator: NumberToCIOperator,
  runOperator: RunOperatorType,
) {
  const value = +runOperator(options, operator.value);

  if (isNaN(value)) {
    return undefined;
  }

  return convertToCI(value);
}
