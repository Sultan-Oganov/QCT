import qs from 'query-string';
import {
  observable,
  runInAction,
  action,
  computed,
  makeObservable,
} from 'mobx';
import type { PageModelInterface } from '@qctoken/register';

type RequestOptions = {
  noRefresh?: boolean;
  url?: string;
  params?: Record<string, any>;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  contentType?: 'formData' | 'json';
};

type Options = {
  url?: string;
  cacheKey?: string;
  pageStore: PageModelInterface;
};

type ErrorResult = {
  detail: { msg: string }[];
};

export class RequestModel<V = any> {
  records: V[] = [];

  isError: boolean = false;

  errorResponse: any = undefined;

  isLoading: boolean = false;

  selectedRecords: V[] = [];

  totalCount: number = 0;

  currentPage: number = 1;

  pageSize: undefined | number = undefined;

  unmountCache?: () => void;

  private cache?: RequestOptions = undefined;

  constructor(public options: Options) {
    const { cacheKey, pageStore } = options;

    makeObservable(this, {
      records: observable.shallow,
      isError: observable,
      errorResponse: observable.shallow,
      isLoading: observable,
      selectedRecords: observable.shallow,
      clear: action,
      currentPage: observable,
      pageSize: observable,
      goPage: action,
      selectRecords: action,
      record: computed,
      selectedRecord: computed,
      paginationParams: computed,
      totalCount: observable,
      setRecords: action,
      setPageSize: action,
    });

    if (cacheKey && pageStore.requestCache) {
      this.unmountCache = pageStore.requestCache.addRequest(cacheKey, this);
    }
  }

  private makeUrl = (
    params: Record<string, any> = {},
    url = this.options.url,
    method: string = 'GET',
  ): string => {
    if (!url) {
      return '';
    }
    const copyParams = { ...params };
    const requestUrl = url.replace(/{(\w+)}/g, (_, name) => {
      const value = copyParams[name];
      delete copyParams[name];
      return value;
    });

    if (this.pageSize && method === 'GET') {
      Object.assign(copyParams, this.paginationParams);
    }
    return qs.stringifyUrl({ url: requestUrl, query: copyParams });
  };

  private updateGetData = (result: V | V[] | undefined, response: Response) => {
    const range = response.headers.get('content-range') || '';

    runInAction(() => {
      this.totalCount = parseInt(range.substring(range.indexOf('/') + 1));

      if (Array.isArray(result)) {
        // this._records = result.data;
        this.records = result;
      } else if (result) {
        // this._records = [result.data];
        this.records = [result];
      } else {
        this.records = [];
      }
    });
  };

  setRecords = (records: V[]) => {
    this.records = records;
  };

  setPageSize = (pageSize = 0) => {
    runInAction(() => {
      this.pageSize = pageSize;
    });
  };

  goPage = (pageNumber = 1) => {
    this.currentPage = pageNumber;
    return this.refresh();
  };

  refresh = () => {
    if (!this.cache) {
      return this.get();
    }

    return this.doRequest({ params: this.cache.params, url: this.cache.url });
  };

  get = async (
    params: Record<string, any> = {},
    url = this.options.url,
  ): Promise<undefined | V | V[] | ErrorResult> => {
    this.cache = { params, url };
    this.currentPage = 1;
    return this.doRequest({ method: 'GET', params, url });
  };

  /**
   * Send a post request to create a new instance
   * TODO: update it with read request
   *
   * @param body Any valid data for post request. TODO: can be improved for the future usage
   */
  post = (body: BodyInit, options: RequestOptions = {}) => {
    const { method = 'POST' } = options;

    return this.doRequest({ ...options, method }, body);
  };

  delete = (options: RequestOptions = {}) => {
    const { method = 'DELETE' } = options;

    return this.doRequest({ ...options, method });
  };

  doRequest = async (
    options: RequestOptions = {},
    body?: BodyInit,
  ): Promise<undefined | V | V[] | ErrorResult> => {
    const { pageStore /*, cacheKey */ } = this.options;
    const { method = 'GET' } = options;
    const url = this.makeUrl(options.params, options.url, method);
    let result: undefined | V | V[] = undefined;
    let errorResult: undefined | ErrorResult = undefined;

    if (!url) {
      return undefined;
    }

    runInAction(() => {
      this.isLoading = true;
      this.isError = false;
      this.errorResponse = undefined;
    });
    // TODO: QCT-343
    // const cacheStore =
    //   method === 'GET' && cacheKey && pageStore.requestCache
    //     ? pageStore.requestCache.getCacheStore(cacheKey, url)
    //     : undefined;

    // if (cacheStore.isProgress()) {
    //   const response =
    // }

    try {
      const headers = await pageStore.invokeHandler('getRequestHeaders', {});
      const response = await fetch(url, {
        method,
        body,
        headers: {
          ...(options.contentType !== 'formData'
            ? { 'Content-Type': 'application/json' }
            : {}),
          ...(typeof headers === 'object' ? headers : {}),
        },
      });
      try {
        if (response.headers.get('content-type') === 'application/json') {
          result = await response.json();
        } else {
          errorResult = { detail: [{ msg: await response.text() }] };
        }
      } catch (e) {
        errorResult = { detail: [{ msg: String(e) }] };
      }

      if (response.status >= 400) {
        runInAction(() => {
          this.isLoading = false;
          this.isError = true;
          this.errorResponse = errorResult || result;
        });

        if (response.status === 401) {
          await pageStore.invokeHandler('onUnauthorized', {});
        } else if (response.status === 413) {
          this.errorResponse.detail = [{ msg: 'file size should be smaller' }];
        }

        return undefined;
      }

      if (response.status === 200 && method === 'GET') {
        this.updateGetData(result, response);
      }

      if (['PATCH', 'PUT', 'DELETE'].includes(method)) {
        if (!options.noRefresh) {
          await this.refresh();
        }
      }

      runInAction(() => {
        this.isLoading = false;
      });
    } catch (e) {
      errorResult = { detail: [{ msg: String(e) }] };

      runInAction(() => {
        this.isError = true;
        this.isLoading = false;
        this.errorResponse = errorResult;
      });
    }

    return errorResult || result;
  };

  clear = () => {
    this.selectedRecords = [];
    this.records = [];
  };

  selectRecords(records: V[]) {
    this.selectedRecords = records;
  }

  get record(): undefined | V {
    if (this.records.length === 0) {
      return undefined;
    }

    return this.records[0];
  }

  get selectedRecord(): undefined | V {
    if (this.selectedRecords.length === 0) {
      return undefined;
    }

    return this.selectedRecords[0];
  }

  get paginationParams() {
    if (!this.pageSize) {
      return {};
    }
    const firstPageIndex = (this.currentPage - 1) * this.pageSize;
    const lastPageIndex = firstPageIndex + this.pageSize - 1;
    return { range: `[${firstPageIndex},${lastPageIndex}]` };
  }
}
