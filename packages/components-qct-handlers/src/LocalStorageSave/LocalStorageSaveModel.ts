import { BuilderConfig } from '@qctoken/register';
import { BaseStoreModel, type HandlerOptions } from '@qctoken/store';
import type { LocalStorageSaveNameType } from './types';

export class LocalStorageSaveModel extends BaseStoreModel<LocalStorageSaveNameType> {
  handlers = {
    onProcess: async (_: BuilderConfig, { values }: HandlerOptions) => {
      const { from, to } = this.bc;
      if (!from || !to || !values) {
        return false;
      }

      window.localStorage.setItem(to, values[from] as string);

      return true;
    },
  };
}
