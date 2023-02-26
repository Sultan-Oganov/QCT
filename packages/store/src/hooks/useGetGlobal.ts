import type { PageModelInterface } from '@qctoken/register';
import { reaction } from 'mobx';
import { useEffect, useState } from 'react';

type GetGlobalRule = {
  in: string;
  out?: string;
};

export type GetGlobal = {
  debounce?: number;
  rules?: GetGlobalRule[];
};

export function getValuesFromStore(
  pageStore: PageModelInterface,
  rules: NonNullable<GetGlobal['rules']>,
) {
  if (rules.length === 1 && rules[0].out === undefined) {
    return pageStore.globalValues.get(rules[0].in);
  }

  return rules.reduce((acc, rule) => {
    const globalValue = pageStore.globalValues.get(rule.in);

    if (rule.out) {
      acc[rule.out] = globalValue;
    }

    return acc;
  }, {} as Record<string, any>);
}

export function useGetGlobal(
  pageStore: PageModelInterface,
  getGlobal?: GetGlobal,
) {
  const [values, setValues] = useState();

  useEffect(() => {
    if (!getGlobal?.rules) {
      return undefined;
    }
    const { rules } = getGlobal;

    return reaction(() => getValuesFromStore(pageStore, rules), setValues);
  }, [getGlobal]);

  return values;
}
