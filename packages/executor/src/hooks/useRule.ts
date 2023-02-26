import { useState, useEffect } from 'react';
import { type PageModel, reaction } from '@qctoken/store';
import { runOperator } from '../executor/run';
import { Operator, OperatorName } from '../executor/types';

export function useRule(
  pageStore: PageModel,
  nodes?: Operator[],
  values?: Record<string, unknown>,
  primaryOperator: OperatorName.OR | OperatorName.AND = OperatorName.AND,
) {
  const [value, setValue] = useState<any>(
    () =>
      nodes &&
      runOperator({ pageStore, values }, { op: primaryOperator, nodes }),
  );

  useEffect(() => {
    if (!nodes) {
      return;
    }

    return reaction(
      () => runOperator({ pageStore, values }, { op: primaryOperator, nodes }),
      setValue,
      { fireImmediately: true },
    );
  }, [values]);

  return value;
}
