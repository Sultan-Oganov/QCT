import type {
  BuilderConfig,
  PageModelInterface as PMI,
} from '@qctoken/register';
import {
  RequestModel,
  ValuesModel,
  type BaseStoreModel as BSM,
  type ValuesInterface,
  type RequestCache,
} from '@qctoken/store';
import type { GlobalPageConfig, PageBuilderConfig as PBC } from '../types';

export interface PageConfig {
  description?: string;
  id?: number;
  path: string;
  name?: string;
  objects: BuilderConfig[];
}
export interface PageModelHandlerOptions {
  values?: Record<string, unknown>;
}
export type PageModelOptions = {
  pageStore?: PMI;
  screenSizeName?: string;
};
type Handlers = 'globalsUp';

export class PageModel<BC extends PBC = PBC> implements PMI {
  public childsRequest: RequestModel<PageConfig>;

  stores: ValuesInterface<BSM<string>>;

  globalValues: ValuesInterface<any>;

  parentPageStore?: PMI;

  requestCache?: RequestCache;

  constructor(protected bc: BC, options: PageModelOptions) {
    const { childs } = bc;
    const { pageStore, screenSizeName } = options;

    this.childsRequest = this.getChildsRequest();
    this.parentPageStore = pageStore;
    this.requestCache = pageStore?.requestCache;
    this.stores = new ValuesModel<BSM<string>>(
      `page/${this.bc.pageObjectId}/stores`,
      'page',
    );
    this.globalValues = new ValuesModel<any>(
      `page/${this.bc.pageObjectId}/globalValues`,
      'page',
    );

    if (Array.isArray(childs) && childs.length > 0) {
      this.childsRequest.setRecords([
        { objects: childs, path: this.getPagePath() },
      ]);
    }

    if (this.bc.globalsDown && pageStore) {
      this.bc.globalsDown.forEach((globalName) => {
        const name = this.getGlobalName(globalName);
        this.globalValues.set(name, pageStore.globalValues.get(name));
      });
    }

    if (screenSizeName && pageStore) {
      const screenSize = pageStore.globalValues.get(screenSizeName);
      this.globalValues.set(screenSizeName, screenSize);
    }
  }

  protected getChildsRequest() {
    return new RequestModel({
      url: '/api/v1/builder/application/{appPath}/page/{pagePath}/schema',
      pageStore: this,
    });
  }

  protected getPagePath() {
    return 'root';
  }

  getGlobalName(globalName: string | GlobalPageConfig) {
    return typeof globalName === 'string' ? globalName : globalName.name;
  }

  translate = (value?: string): string | undefined => {
    if (this.parentPageStore) {
      return this.parentPageStore.translate(value);
    }

    return value;
  };

  handlers: Record<Handlers, (options: PageModelHandlerOptions) => boolean> = {
    globalsUp: (): boolean => {
      const { bc } = this;

      if (!bc.globalsUp) {
        return false;
      }

      bc.globalsUp.forEach((globalName) => {
        const name = this.getGlobalName(globalName);
        this.parentPageStore!.globalValues.set(
          name,
          this.globalValues.get(name),
        );
      });

      return true;
    },
  };

  invokeHandler = async (name: string, options: PageModelHandlerOptions) => {
    if (name in this.handlers) {
      return this.handlers[name as Handlers](options);
    }

    const childBc = this.childsRequest.record?.objects.find(
      (bc) => bc.pageObjectName === name,
    );
    const childStore = childBc && this.stores.get(childBc.pageObjectId);

    if (childStore) {
      return childStore.invokeHandler([this.bc, options]);
    }

    if (this.parentPageStore) {
      return this.parentPageStore.invokeHandler(name, options);
    }

    return false;
  };
}
