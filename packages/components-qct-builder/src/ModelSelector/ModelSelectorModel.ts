import {
  BaseStoreModel,
  makeObservable,
  observable,
  action,
  computed,
} from '@qctoken/store';
import type { ClassProps } from '@qctoken/register';
import { ModelSelectorNameType } from './types';

export class ModelSelectorModel extends BaseStoreModel<ModelSelectorNameType> {
  isOpen: boolean = true;

  constructor(props: ClassProps<ModelSelectorNameType>) {
    super(props);

    makeObservable(this, {
      isOpen: observable,
      toggleIsOpen: action,
      recordsMap: computed,
    });
  }

  toggleIsOpen = () => {
    this.isOpen = !this.isOpen;
  };

  get recordsMap() {
    return this.requestStore.records.reduce(
      (acc, record) => {
        const id = record.parentId ?? 'root';

        acc[id] ||= [];
        acc[id].push(record);

        return acc;
      },
      { root: [] },
    );
  }

  handlers = {
    onProcess: () => Promise.resolve(false),
    onRefresh: async () => {
      const result = this.requestStore.refresh();

      return result !== undefined;
    },
  };
}
