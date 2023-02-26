import type { BuilderConfig } from '@qctoken/register';
import type { ExecuteOperatorNameType } from './types';
import { BaseStoreModel, type HandlerOptions } from '@qctoken/store';
import { runOperator } from '@qctoken/executor';

export class ExecuteOperatorModel extends BaseStoreModel<ExecuteOperatorNameType> {
  handlers = {
    onProcess: async (_: BuilderConfig, options: HandlerOptions) => {
      return runOperator(
        { pageStore: this.pageStore, values: options.values },
        this.bc.operator,
      );
    },
  };
}
