import {
  BaseStoreModel,
  makeObservable,
  observable,
  action,
  when,
} from '@qctoken/store';
import type { ClassProps } from '@qctoken/register';
import type { WindowNameType } from './types';

export class WindowModel extends BaseStoreModel<WindowNameType> {
  isOpen: boolean = false;

  isOpened: boolean = false;

  constructor(props: ClassProps<WindowNameType>) {
    super(props);

    makeObservable(this, {
      isOpen: observable,
      isOpened: observable,
      openWindow: action,
      closeWindow: action,
      setIsOpened: action,
    });
  }

  setIsOpened = (isOpened: boolean) => {
    this.isOpened = isOpened;
  };

  openWindow = () => {
    this.isOpen = true;
  };

  closeWindow = () => {
    this.isOpen = false;
  };

  handlers = {
    onProcess: () => Promise.resolve(false),
    onOpen: async () => {
      this.openWindow();

      await when(() => this.isOpened, { timeout: 300 });

      return true;
    },
    onClose: async () => {
      this.closeWindow();

      await when(() => !this.isOpened, { timeout: 300 });

      return true;
    },
  };
}
