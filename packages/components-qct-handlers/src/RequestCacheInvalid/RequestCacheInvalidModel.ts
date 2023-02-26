import type { RequestCacheInvalidNameType } from './types';
import { BaseStoreModel } from '@qctoken/store';

export class RequestCacheInvalidModel extends BaseStoreModel<RequestCacheInvalidNameType> {
  handlers = {
    onProcess: async () => {
      const { cacheKeys } = this.bc;
      const { requestCache } = this.pageStore;

      if (!requestCache || !cacheKeys) {
        return false;
      }

      return requestCache.invalidCache(cacheKeys);
    },
  };
}
