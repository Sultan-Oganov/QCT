import { ClassProps } from '@qctoken/register';
import { useModel } from '@qctoken/store';
import type { StorageNameType } from './types';
import { StorageModel } from './StorageModel';

export function Storage(props: ClassProps<StorageNameType>) {
  useModel(StorageModel, props);

  return null;
}
