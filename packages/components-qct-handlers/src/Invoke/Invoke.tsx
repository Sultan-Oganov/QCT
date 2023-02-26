import { ClassProps } from '@qctoken/register';
import { useModel } from '@qctoken/store';
import type { InvokeNameType } from './types';
import { InvokeModel } from './InvokeModel';

export function Invoke(props: ClassProps<InvokeNameType>) {
  useModel(InvokeModel, props);

  return null;
}
