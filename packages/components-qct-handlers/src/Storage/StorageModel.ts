import { runOperator } from '@qctoken/executor';
import { BuilderConfig, ClassProps } from '@qctoken/register';
import { BaseStoreModel, HandlerOptions } from '@qctoken/store';
import { LocalStorageModel } from './LocalStorage';
import type { IStorage, StorageNameType } from './types';

export class StorageModel extends BaseStoreModel<StorageNameType> {
  storage: IStorage | null = null;

  constructor(props: ClassProps<StorageNameType>) {
    super(props);

    switch (this.bc.name) {
      case 'LocalStorage':
        this.storage = new LocalStorageModel(props.bc);
        break;
      default:
        this.storage = null;
    }
  }

  handlers = {
    onProcess: async (_bc: BuilderConfig, options: HandlerOptions) => {
      const bc = this.bc;
      const { values } = options;
      if (!this.storage || !bc.key) {
        return false;
      }
      const key: unknown =
        typeof bc.key === 'object'
          ? runOperator({ pageStore: this.pageStore, values }, bc.key)
          : bc.key;

      const value: unknown =
        typeof bc.value === 'object'
          ? runOperator({ pageStore: this.pageStore, values }, bc.value)
          : bc.value;

      if (typeof key !== 'string') {
        return false;
      }

      switch (bc.command) {
        case 'delete':
          this.storage.delete(key);
          return true;
        case 'add':
          this.storage.add(key, value);
          return true;
        default:
          return false;
      }
    },
  };
}
