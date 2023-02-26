import { BuilderConfig } from '@qctoken/register';
import { BaseStoreModel, type HandlerOptions } from '@qctoken/store';
import type { ProcessNameType } from './types';

export class ProcessModel extends BaseStoreModel<ProcessNameType> {
  handlers = {
    onProcess: async (_: BuilderConfig, options: HandlerOptions) => {
      const stores = [];
      let result: boolean | Record<string, unknown> = false;

      for (const child of this.bc.childs) {
        const childStore = this.pageStore.stores.get(child.pageObjectId);

        if (!childStore) {
          return false;
        }

        stores.push(childStore);
      }

      for (const store of stores) {
        result = await store.invokeHandler([this.bc, options]);

        if (!result) {
          return false;
        }
      }

      return result;
    },
  };
}
