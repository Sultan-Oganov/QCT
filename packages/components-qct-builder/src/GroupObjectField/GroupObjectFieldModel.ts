import { BaseStoreModel, RequestModel } from '@qctoken/store';
import type { GroupObjectFieldNameType, GroupObjectFieldRecord } from './types';

export class GroupObjectFieldModel extends BaseStoreModel<GroupObjectFieldNameType> {
  declare requestStore: RequestModel<GroupObjectFieldRecord>;
}
