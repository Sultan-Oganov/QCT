import type { ClassProps } from '@qctoken/register';
import {
  BaseStoreModel,
  makeObservable,
  observable,
  action,
} from '@qctoken/store';
import type { DrawerNameType } from './types';

export class DrawerModel extends BaseStoreModel<DrawerNameType> {
  isOpen: boolean = false;

  isFirstOpened: boolean = false;

  constructor(props: ClassProps<DrawerNameType>) {
    super(props);

    makeObservable(this, {
      isOpen: observable,
      isFirstOpened: observable,
      setIsOpen: action,
    });
  }

  setIsOpen = (isOpen: boolean) => {
    if (isOpen && !this.isFirstOpened) {
      this.isFirstOpened = true;
    } else {
      this.isOpen = isOpen;
    }
    if (this.bc.setStateToGlobal) {
      this.pageStore.globalValues.set(this.bc.setStateToGlobal, this.isOpen);
    }
  };

  handlers = {
    onProcess: () => Promise.resolve(false),
    onOpen: () => {
      this.setIsOpen(true);
      return Promise.resolve(true);
    },
    onClose: () => {
      this.setIsOpen(false);
      return Promise.resolve(true);
    },
  };
}
