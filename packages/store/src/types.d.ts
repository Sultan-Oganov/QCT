import type { ValuesInterface } from './Values.types';
import type { BaseStoreModel as BSM } from './BaseStoreModel';
import type { RequestCache } from './cache/RequestCache';

declare module '@qctoken/register/lib/types' {
  interface PageModelInterface {
    stores: ValuesInterface<BSM<string>>;
    globalValues: ValuesInterface<any>;
    requestCache?: RequestCache;
  }
}
