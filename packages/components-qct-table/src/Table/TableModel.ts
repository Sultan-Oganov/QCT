import { ClassProps } from '@qctoken/register';
import {
  action,
  BaseStoreModel,
  computed,
  makeObservable,
  observable,
} from '@qctoken/store';
import type { TableNameType } from './types';

export class TableModel extends BaseStoreModel<TableNameType> {
  public selectedItems: string[] = [];

  constructor(props: ClassProps<TableNameType>) {
    super(props);

    makeObservable(this, {
      selectedItems: observable,
      records: computed,
      allIsSelected: computed,
      toggleIsSelected: action,
    });
    this.requestStore.setPageSize(this.bc.pageSize);
  }

  get records() {
    return this.requestStore.records.map((record) => ({
      ...record,
      selected: false,
    }));
  }

  get allIsSelected() {
    return this.selectedItems.length === this.records.length;
  }

  isSelected = (id: string): boolean => {
    return this.selectedItems.some((el) => el === id);
  };

  toggleIsSelected = (isFetching: boolean, id: string) => {
    this.selectedItems = isFetching
      ? [...this.selectedItems, id]
      : this.selectedItems.filter((itemId) => itemId !== id);
  };

  selectAll = (isFetching: boolean) => {
    if (isFetching) {
      this.selectedItems = this.records.map((el) => el.id);
    } else {
      this.selectedItems = [];
    }
  };
}
