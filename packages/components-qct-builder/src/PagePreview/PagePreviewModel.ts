import { BaseStoreModel, makeObservable, computed } from '@qctoken/store';
import type { ClassProps } from '@qctoken/register';
import { PagePreviewNameType } from './types';

export class PagePreviewModel extends BaseStoreModel<PagePreviewNameType> {
  constructor(props: ClassProps<PagePreviewNameType>) {
    super(props);

    makeObservable(this, {
      childs: computed,
      objectsMap: computed,
    });
  }

  private getParentComplexKey(
    parentId: number | null,
    parentType: string = 'root',
  ) {
    return parentId === null ? 'root' : `${parentId}:${parentType}`;
  }

  private getObjectAttr = (
    name: string,
    attrType: string[],
    val: any,
    pageObject: any,
  ): [string, any] => {
    const parentKey = this.getParentComplexKey(pageObject.id, name);

    if (attrType.includes('BuilderConfig')) {
      if (this.objectsMap[parentKey]?.length === 1) {
        return [name, this.getObject(this.objectsMap[parentKey][0])];
      }
      return [name, null];
    } else if (attrType.includes('BuilderConfig[]')) {
      return [name, this.objectsMap[parentKey]?.map(this.getObject) ?? []];
    }

    return [name, val];
  };

  private getObject = (pageObject: any) => {
    return {
      ...Object.fromEntries([
        ...pageObject.groupObjectAttrs
          .map((attr: any) =>
            this.getObjectAttr(attr.name, attr.type, attr.default, pageObject),
          )
          .filter(([, value]: any) => value),
        ...(pageObject.pageObjectAttrs as any[]).map((attr) =>
          this.getObjectAttr(
            attr.groupAttr.name,
            attr.groupAttr.type,
            attr.value,
            pageObject,
          ),
        ),
      ]),

      type: pageObject.groupObject.type,
      pageObjectId: pageObject.id,
      objectId: pageObject.groupObject.id,
      position: pageObject.position,
    };
  };

  get objectsMap() {
    return this.requestStore.records.reduce((acc, pageObject) => {
      const parentKey = this.getParentComplexKey(
        pageObject.parentId,
        pageObject.parentType,
      );

      acc[parentKey] ||= [];
      acc[parentKey].push(pageObject);

      return acc;
    }, {});
  }

  get childs() {
    if (!this.objectsMap.root) {
      return [];
    }

    return this.objectsMap.root.map(this.getObject);
  }
}
