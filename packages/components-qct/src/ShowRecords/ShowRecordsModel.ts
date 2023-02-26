import type { ClassProps } from '@qctoken/register';
import { BaseStoreModel, computed, makeObservable } from '@qctoken/store';
import type { ShowRecordsNameType } from './types';

export class ShowRecordsModel extends BaseStoreModel<ShowRecordsNameType> {
  get records() {
    if (this.bc.query) {
      return this.requestStore.records;
    }

    if (Array.isArray(this.bc.records)) {
      return this.bc.records;
    }

    return [];
  }

  get globalValue() {
    if (this.bc.isSetGlobalFirst === false) {
      return this.records;
    }

    return this.records.length > 0 ? this.records[0] : undefined;
  }

  constructor(props: ClassProps<ShowRecordsNameType>) {
    super(props);

    makeObservable(this, {
      records: computed,
      globalValue: computed,
    });
    this.requestStore.setPageSize(this.bc.pageSize);
  }

  reload = () => {
    return this.requestStore.refresh();
  };

  handlers = {
    onProcess: () => Promise.resolve(false),
    onReload: () => this.reload(),
  };
}
