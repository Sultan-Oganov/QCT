import { ClassProps } from '@qctoken/register';
import { useModel } from '@qctoken/store';
import type { LocalStorageSaveNameType } from './types';
import { LocalStorageSaveModel } from './LocalStorageSaveModel';

export function LocalStorageSave(props: ClassProps<LocalStorageSaveNameType>) {
  useModel(LocalStorageSaveModel, props);

  return null;
}
