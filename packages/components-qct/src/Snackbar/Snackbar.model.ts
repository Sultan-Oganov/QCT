import {
  BaseStoreModel,
  makeObservable,
  observable,
  action,
  when,
  HandlerOptions,
} from '@qctoken/store';
import type { BuilderConfig, ClassProps } from '@qctoken/register';
import type { Message, SnackbarNameType } from './types';

export class SnackbarModel extends BaseStoreModel<SnackbarNameType> {
  isOpen: boolean = false;

  isOpened: boolean = false;

  messages: Message[] = [];

  constructor(props: ClassProps<SnackbarNameType>) {
    super(props);

    makeObservable(this, {
      isOpen: observable,
      isOpened: observable,
      messages: observable,
      openSnackbar: action,
      closeSnackbar: action,
      addMessages: action,
      setIsOpened: action,
      clearMessages: action,
    });
  }

  setIsOpened = (isOpened: boolean) => {
    this.isOpened = isOpened;
  };

  openSnackbar = () => {
    this.isOpen = true;
  };

  closeSnackbar = () => {
    this.isOpen = false;
    this.clearMessages();
  };

  clearMessages = () => {
    this.messages = [];
  };

  addMessages = (message: any) => {
    this.messages = [...this.messages, ...message];
  };

  handlers = {
    onProcess: () => Promise.resolve(false),
    onOpen: async (_bc: BuilderConfig, options: HandlerOptions) => {
      const { values } = options;
      if (values) {
        this.addMessages(values);
      }
      this.openSnackbar();

      await when(() => this.isOpened, { timeout: 300 });

      return true;
    },
    onClose: async () => {
      this.closeSnackbar();

      await when(() => !this.isOpened, { timeout: 300 });

      return true;
    },
  };
}
