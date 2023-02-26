import { useEffect } from 'react';
import type { PageModelInterface } from '@qctoken/register';
import type { BaseStoreModel } from '../BaseStoreModel';
import { reaction } from 'mobx';

export interface GlobalSelectRecord {
  record?: Record<string, string>;
}

export function useGlobalSelectRecord(
  store: BaseStoreModel<string>,
  pageStore: PageModelInterface,
  setGlobal?: GlobalSelectRecord,
) {
  useEffect(() => {
    if (!setGlobal?.record) {
      return undefined;
    }

    const recordEntries = Object.entries(setGlobal.record);
    return reaction(
      () => store.requestStore?.selectedRecord,
      (selectedRecord) => {
        if (selectedRecord) {
          recordEntries.forEach(([key, name]) => {
            pageStore.globalValues.set(key, selectedRecord[name]);
          });
        } else {
          recordEntries.forEach(([key]) => {
            pageStore.globalValues.remove(key);
          });
        }
      },
    );
  }, []);
}
