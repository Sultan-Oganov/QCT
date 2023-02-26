import { ClassProps } from '@qctoken/register';
import { useModel } from '@qctoken/store';
import type { SetGlobalHandlerNameType } from './types';
import { SetGlobalHandlerModel } from './SetGlobalHandlerModel';

export function SetGlobalHandler(props: ClassProps<SetGlobalHandlerNameType>) {
  useModel(SetGlobalHandlerModel, props);

  return null;
}
