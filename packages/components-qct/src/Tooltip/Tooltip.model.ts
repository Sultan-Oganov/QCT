import {
  BaseStoreModel,
  makeObservable,
  observable,
  action,
  when,
} from '@qctoken/store';
import type { ClassProps } from '@qctoken/register';
import type { TooltipNameType } from './types';

export class TooltipModel extends BaseStoreModel<TooltipNameType> {
  isOpen: boolean = false;

  isOpened: boolean = false;

  constructor(props: ClassProps<TooltipNameType>) {
    super(props);

    makeObservable(this, {
      isOpen: observable,
      isOpened: observable,
      openTooltip: action,
      closeTooltip: action,
      setIsOpened: action,
    });
  }

  setIsOpened = (isOpened: boolean) => {
    this.isOpened = isOpened;
  };

  openTooltip = () => {
    this.isOpen = true;
  };

  closeTooltip = () => {
    this.isOpen = false;
  };

  handlers = {
    onProcess: () => Promise.resolve(false),
    onOpen: async () => {
      this.openTooltip();

      await when(() => this.isOpened, { timeout: 300 });

      return true;
    },
    onClose: async () => {
      this.closeTooltip();

      await when(() => !this.isOpened, { timeout: 300 });

      return true;
    },
  };
}
