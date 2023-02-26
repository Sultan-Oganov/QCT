import type { BuilderConfig, ClassProps } from '@qctoken/register';
import type { NavigateFunction } from 'react-router-dom';
import type { InvokeNameType } from './types';
import { BaseStoreModel, type HandlerOptions } from '@qctoken/store';

export class InvokeModel extends BaseStoreModel<InvokeNameType> {
  constructor(
    props: ClassProps<InvokeNameType>,
    private navigate: NavigateFunction,
  ) {
    super(props);
  }

  handlers = {
    onProcess: async (_: BuilderConfig, options: HandlerOptions) => {
      const { masterId, actionName } = this.bc;

      if (!masterId) {
        return false;
      }

      const store = this.pageStore.stores.get(masterId);

      if (!store) {
        return false;
      }

      return store.invokeHandler([this.bc, options], actionName);
    },
  };
}
