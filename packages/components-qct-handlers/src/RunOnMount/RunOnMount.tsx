import { ClassProps, mapComponents } from '@qctoken/register';
import { useEffect } from 'react';
import type { RunOnMountNameType } from './types';

export function RunOnMount(props: ClassProps<RunOnMountNameType>) {
  const { bc, pageStore, values } = props;

  useEffect(() => {
    const options = { values };
    const stores = bc.childs.map((child) =>
      pageStore.stores.get(child.pageObjectId),
    );

    if (stores.some((store) => !store)) {
      return;
    }

    async function runSequency() {
      for (const store of stores) {
        if (!(await store.invokeHandler([bc, options]))) {
          break;
        }
      }
    }

    runSequency();
  }, []);

  return <>{mapComponents(bc.childs, props)}</>;
}
