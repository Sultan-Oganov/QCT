import { useState, useEffect } from 'react';
import { type PageModel, reaction } from '@qctoken/store';
import { runOperator } from '../executor/run';
import { Operator } from '../executor/types';

export function useRunExecutor(
  pageStore: PageModel,
  node?: Operator | string | number | boolean,
  values?: Record<string, unknown>,
) {
  const [value, setValue] = useState<any>(() =>
    typeof node === 'object' ? runOperator({ pageStore, values }, node) : node,
  );

  useEffect(() => {
    if (typeof node !== 'object') {
      setValue(node);
      return;
    }

    return reaction(() => runOperator({ pageStore, values }, node), setValue, {
      fireImmediately: true,
    });
  }, [values, node]);

  return value;
}
