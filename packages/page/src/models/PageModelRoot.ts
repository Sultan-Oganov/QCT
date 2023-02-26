import { RequestCache, RequestModel } from '@qctoken/store';
import { translationDict } from '../translation';
import type { PageIdBuilderConfig, PagePathBuilderConfig } from '../types';
import { PageModel, type PageModelOptions } from './PageModel';

export class PageModelRoot extends PageModel<PageIdBuilderConfig> {
  private translateRequest: RequestModel<Record<string, string>>;

  constructor(protected bc: PagePathBuilderConfig, options: PageModelOptions) {
    super(bc, options);

    this.translateRequest = new RequestModel({
      pageStore: this,
    });

    // TODO: Move translation into backend:
    this.translateRequest.setRecords([translationDict]);

    this.requestCache = new RequestCache();
  }

  translate = (name?: string) => {
    return (name && this.translateRequest.record?.[name]) ?? name;
  };
}
