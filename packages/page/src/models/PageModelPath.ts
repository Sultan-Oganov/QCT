import { RequestModel } from '@qctoken/store';
import type { PagePathBuilderConfig } from '../types';
import { PageModel } from './PageModel';

export class PageModelPath extends PageModel<PagePathBuilderConfig> {
  protected getChildsRequest(): RequestModel<any> {
    return new RequestModel({
      url: '/api/v1/builder/application/{appPath}/page/{pagePath}/schema',
      pageStore: this,
    });
  }

  protected getPagePath() {
    return this.bc.pagePath ?? 'root';
  }

  public loadPage = () => {
    const { appPath = 'root', pagePath = 'root' } = this.bc;

    return this.childsRequest.get({ appPath, pagePath });
  };
}
