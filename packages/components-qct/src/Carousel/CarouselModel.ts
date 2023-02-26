import type { ClassProps } from '@qctoken/register';
import { BaseStoreModel, computed, makeObservable } from '@qctoken/store';
import type { CarouselNameType } from './types';

export class CarouselModel extends BaseStoreModel<CarouselNameType> {
  get records() {
    if (this.bc.query) {
      return this.requestStore.records;
    }

    return [];
  }

  constructor(props: ClassProps<CarouselNameType>) {
    super(props);

    makeObservable(this, {
      records: computed,
    });
  }

  reload = () => {
    return this.requestStore.refresh();
  };

  handlers = {
    onProcess: () => Promise.resolve(false),
    onReload: () => this.reload(),
  };
}
