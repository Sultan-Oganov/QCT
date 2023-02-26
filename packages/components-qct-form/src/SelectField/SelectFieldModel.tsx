import { BaseStoreModel, type RequestModel } from '@qctoken/store';
import { SelectFieldNameType } from './types';

export class SelectFieldModel extends BaseStoreModel<SelectFieldNameType> {
  declare requestStore: RequestModel<Record<string, unknown>>;
}
