import { useEffect } from 'react';
import { reaction } from 'mobx';
import { Operator, runOperator } from '@qctoken/executor';
import type { PageModelInterface } from '@qctoken/register';
import type { BaseStoreModel } from '../BaseStoreModel';

interface QueryParam {
  name?: string;
  operator?: Operator;
  required: string;
}

export type GlobalQueryParams = Record<string, QueryParam>;

export function useGlobalQueryParams(
  store: BaseStoreModel<string>,
  pageStore: PageModelInterface,
  queryParams?: GlobalQueryParams,
  values?: Record<string, unknown>,
) {
  useEffect(() => {
    if (!queryParams) {
      store.requestStore.get();
      return;
    }

    const recordEntries = queryParams ? Object.entries(queryParams) : [];

    return reaction(
      () => {
        const params: Record<string, any> = {};
        for (const [key, { name, operator, required }] of recordEntries) {
          const value = name
            ? pageStore.globalValues.get(name)
            : runOperator({ pageStore, values }, operator);

          if (required && (typeof value === 'undefined' || value === '')) {
            return '__clear__';
          }

          params[key] = value;
        }

        return params;
      },
      async (params) => {
        if (params === '__clear__') {
          store.requestStore.clear();
        } else {
          store.requestStore.get(params);
        }
      },
      {
        fireImmediately: true,
        delay: 100,
      },
    );
  }, [values]);
}
