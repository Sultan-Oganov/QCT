import { useEffect } from 'react';
import type { PageModelInterface } from '@qctoken/register';
import { runInAction } from 'mobx';
import { runOperator } from '@qctoken/executor';

type SetGlobalRule = {
  in?: string;
  out: string;
  onUnMountClean?: boolean;
};
type Value = string | number | { [key: string]: Value } | Value[];

export type SetGlobal = {
  debounce?: number;
  rules?: SetGlobalRule[];
};

function getGlobalValue(
  pageStore: PageModelInterface,
  rule: SetGlobalRule,
  value: Value,
): Value {
  if (
    rule.in === undefined ||
    typeof value !== 'object' ||
    Array.isArray(value) ||
    value === null
  ) {
    return value;
  }

  if (typeof rule.in === 'string') {
    return value[rule.in];
  }

  if (typeof rule.in === 'object') {
    return runOperator({ pageStore, values: value }, rule.in);
  }

  return value;
}

export function setGlobalsToStore(
  pageStore: PageModelInterface,
  value: Value,
  rules: SetGlobalRule[],
) {
  runInAction(() => {
    rules.forEach((rule) => {
      const globalValue = getGlobalValue(pageStore, rule, value);

      pageStore.globalValues.set(rule.out, globalValue);
    });
  });
}

export function removeGlobalsFromStore(
  pageStore: PageModelInterface,
  rules: SetGlobalRule[],
) {
  runInAction(() => {
    rules.forEach((el) => {
      if (el.onUnMountClean) {
        pageStore.globalValues.remove(el.out);
      }
    });
  });
}

export function useSetGlobal(
  pageStore: PageModelInterface,
  value?: Value,
  setGlobal?: SetGlobal,
) {
  useEffect(() => {
    if (!setGlobal?.rules) {
      return undefined;
    }
    const { rules } = setGlobal;

    if (value === undefined || value === null) {
      removeGlobalsFromStore(pageStore, rules);
      return undefined;
    }

    setGlobalsToStore(pageStore, value, rules);

    return () => {
      removeGlobalsFromStore(pageStore, rules);
    };
  }, [value]);
}
