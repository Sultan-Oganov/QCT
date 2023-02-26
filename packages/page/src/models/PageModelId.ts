import { RequestModel } from '@qctoken/store';
import type { PageIdBuilderConfig } from '../types';
import { PageModel } from './PageModel';

export class PageModelId extends PageModel<PageIdBuilderConfig> {
  protected getChildsRequest(): RequestModel<any> {
    return new RequestModel({
      url: '/api/v1/builder/page/{pageId}/schema',
      pageStore: this,
    });
  }

  public loadPage = async () => {
    const { pageId, accessList } = this.bc;
    const hasAccess =
      accessList && accessList.length > 0
        ? await this.invokeHandler('hasAccess', {
            values: { accessList },
          })
        : true;

    if (!hasAccess) {
      this.invokeHandler('onUnauthorized', {});
      return undefined;
    }

    return this.childsRequest.get({ pageId });
  };
}
