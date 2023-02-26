import { ClassProps } from '@qctoken/register';
import { useModel } from '@qctoken/store';
import type { RequestCacheInvalidNameType } from './types';
import { RequestCacheInvalidModel } from './RequestCacheInvalidModel';

export function RequestCacheInvalid(
  props: ClassProps<RequestCacheInvalidNameType>,
) {
  useModel(RequestCacheInvalidModel, props);

  return null;
}
