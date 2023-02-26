import { useMemo, useEffect } from 'react';
import type { ClassProps } from '@qctoken/register';
import { type BaseStoreModelConstructor } from '../BaseStoreModel';

/**
 * Create a new model from model or with createModel method
 */
export function useModel<
  N extends string,
  M extends BaseStoreModelConstructor<N>,
>(
  Model: M,
  props: ClassProps<N>,
  createModel?: () => InstanceType<M>,
): [InstanceType<M>] {
  // disabled, hidden
  const { bc, pageStore, parentKey = '' } = props;
  const key = `${bc.pageObjectId}${parentKey}`;
  const store = useMemo(() => {
    const existingStore = pageStore.stores.get(key);

    if (existingStore) {
      existingStore.initialCount += 1;
      return existingStore as InstanceType<M>;
    }

    const initialStore = createModel
      ? createModel()
      : (new Model(props) as InstanceType<M>);

    pageStore.stores.set(key, initialStore);

    return initialStore;
  }, []);

  useEffect(() => {
    return () => {
      if (store.initialCount > 1) {
        store.initialCount -= 1;
        return;
      }

      pageStore.stores.remove(key);
      store.requestStore.unmountCache?.();
    };
  }, []);

  return [store];
}
