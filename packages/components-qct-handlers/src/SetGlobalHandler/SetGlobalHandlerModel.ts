import { BuilderConfig } from '@qctoken/register';
import { BaseStoreModel, type HandlerOptions } from '@qctoken/store';
import type { SetGlobalHandlerNameType } from './types';

export class SetGlobalHandlerModel extends BaseStoreModel<SetGlobalHandlerNameType> {
  handlers = {
    onProcess: (_: BuilderConfig, options: HandlerOptions) => {
      const { setglobal } = this.bc;
      const { values } = options;

      if (!setglobal) {
        return Promise.resolve(false);
      }

      setglobal.rules?.forEach((el) => {
        const value = el.in && values ? values[el.in] : values;
        this.pageStore.globalValues.set(el.out, value);
      });

      return Promise.resolve(true);
    },
  };
}
