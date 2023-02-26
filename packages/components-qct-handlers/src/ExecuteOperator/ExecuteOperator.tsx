import { ClassProps } from '@qctoken/register';
import { useModel } from '@qctoken/store';
import type { ExecuteOperatorNameType } from './types';
import { ExecuteOperatorModel } from './ExecuteOperatorModel';

export function ExecuteOperator(props: ClassProps<ExecuteOperatorNameType>) {
  useModel(ExecuteOperatorModel, props);

  return null;
}
