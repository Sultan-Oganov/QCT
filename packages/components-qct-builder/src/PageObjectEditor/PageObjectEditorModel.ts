import type { ClassProps } from '@qctoken/register';
import {
  BaseStoreModel,
  computed,
  makeObservable,
  RequestModel,
} from '@qctoken/store';
import type { PageObjectEditorNameType, PageObjectWithAttrs } from './types';

export class PageObjectEditorModel extends BaseStoreModel<PageObjectEditorNameType> {
  declare requestStore: RequestModel<PageObjectWithAttrs>;

  constructor(props: ClassProps<PageObjectEditorNameType>) {
    super(props);

    makeObservable(this, {
      sortedGroupObjectAttrs: computed,
    });
  }

  get sortedGroupObjectAttrs() {
    const { record: pageObject } = this.requestStore;
    if (!pageObject) {
      return undefined;
    }

    const {
      groupObjectAttrs: [...groupObjectAttrs],
    } = pageObject;

    groupObjectAttrs.sort((a, b) => a.name.localeCompare(b.name));

    return groupObjectAttrs;
  }
}
