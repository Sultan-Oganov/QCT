import { runOperator } from '@qctoken/executor';
import { type BuilderConfig } from '@qctoken/register';
import { BaseStoreModel, type HandlerOptions } from '@qctoken/store';
import type { SubmitRequestNameType } from './types';

export class SubmitRequestModel extends BaseStoreModel<SubmitRequestNameType> {
  handlers = {
    onProcess: async (_: BuilderConfig, options: HandlerOptions) => {
      const { bc, pageStore } = this;
      const { values } = options;
      const url = runOperator({ pageStore, values }, this.bc.queryUrl);
      const method = runOperator({ pageStore, values }, this.bc.queryMethod);

      const result = await this.requestStore.doRequest({ url, method });

      if (this.requestStore.isError) {
        const error = this.requestStore.errorResponse.detail;
        if (bc.onError) {
          pageStore.stores
            .get(bc.onError.pageObjectId)
            ?.invokeHandler([bc, { values: error }]);
        }
      }

      return result !== undefined;
    },
  };
}
