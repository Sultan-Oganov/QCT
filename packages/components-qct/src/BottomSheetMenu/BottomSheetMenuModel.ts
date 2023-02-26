import type { ClassProps } from '@qctoken/register';
import {
  BaseStoreModel,
  makeObservable,
  observable,
  action,
} from '@qctoken/store';
import type { BottomSheetMenuNameType } from './types';

export class BottomSheetMenuModel extends BaseStoreModel<BottomSheetMenuNameType> {
  isOpen: boolean = false;

  constructor(props: ClassProps<BottomSheetMenuNameType>) {
    super(props);

    makeObservable(this, {
      isOpen: observable,
      setIsOpen: action,
    });
  }

  setIsOpen = (isOpen: boolean) => {
    this.isOpen = isOpen;
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
