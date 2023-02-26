import { type Operator } from './types';
import { type Options } from './operators/operator.types';
import { operators } from './operators';

const hasWarnings: Record<string, boolean> = {};

export function runOperator(options: Options, operator?: Operator): any {
  if (!operator) {
    return undefined;
  }

  if (operator.op in operators) {
    const executor = operators[operator.op];

    // @ts-ignore
    return executor(options, operator, runOperator);
  }

  if (!hasWarnings[operator.op]) {
    // throw new Error(`Can not run operator ${operator.op}`);
    console.error(`Can not run operator ${operator.op}`);
    hasWarnings[operator.op] = true;
  }

  return undefined;
}
