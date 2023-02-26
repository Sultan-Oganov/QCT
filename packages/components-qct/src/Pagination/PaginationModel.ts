import { ClassProps } from '@qctoken/register';
import {
  BaseStoreModel,
  computed,
  makeObservable,
  action,
} from '@qctoken/store';
import { PaginationNameType } from './types';

export class PaginationModel extends BaseStoreModel<PaginationNameType> {
  constructor(props: ClassProps<PaginationNameType>) {
    super(props);

    makeObservable(this, {
      setCurrentPage: action,
      currentPage: computed,
      totalCount: computed,
      mainStore: computed,
    });
  }

  setCurrentPage = (page: number) => {
    if (this.mainStore) {
      this.mainStore.requestStore.goPage(page);
    }
  };

  get mainStore() {
    if (this.bc.masterId) {
      return this.pageStore.stores.get(this.bc.masterId);
    }
    return undefined;
  }

  get currentPage() {
    return this.mainStore?.requestStore.currentPage ?? 1;
  }

  get pageSize() {
    return this.mainStore?.requestStore.pageSize ?? 0;
  }

  get totalCount() {
    return this.mainStore?.requestStore.totalCount ?? 0;
  }
}
