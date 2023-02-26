import { useEffect } from 'react';
import { autorun } from '@qctoken/store';
import { PageModel } from '../models/PageModel';
import type { PageBuilderConfig } from '../types';

export function usePageGlobals(bc: PageBuilderConfig, pageStore: PageModel) {
  useEffect(() => {
    const { globalsDown, globalsUp } = bc;
    const disposers: Function[] = [];
    const { parentPageStore } = pageStore;

    if (!parentPageStore) {
      return undefined;
    }

    if (globalsDown) {
      disposers.push(
        autorun(() => {
          globalsDown.forEach((globalName) => {
            const name = pageStore.getGlobalName(globalName);

            pageStore.globalValues.set(
              name,
              parentPageStore.globalValues.get(name),
            );
          });
        }),
      );
    }

    if (globalsUp) {
      disposers.push(
        autorun(() => {
          pageStore.handlers.globalsUp({});
        }),
      );
    }

    return () => {
      disposers.forEach((disposer) => disposer());
      globalsUp?.forEach((globalName) => {
        const name = pageStore.getGlobalName(globalName);

        if (typeof globalName === 'string' || globalName.isUnmount) {
          parentPageStore.globalValues.remove(name);
        }
      });
    };
  }, []);
}
