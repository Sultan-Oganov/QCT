import { ClassProps, mapComponentOne } from '@qctoken/register';
import { useModel } from '@qctoken/store';
import type { SubmitRequestNameType } from './types';
import { SubmitRequestModel } from './SubmitRequestModel';

export function SubmitRequest(props: ClassProps<SubmitRequestNameType>) {
  const { bc } = props;
  useModel(SubmitRequestModel, props);

  if (bc.onError) {
    return <>{mapComponentOne(bc.onError, props)}</>;
  }

  return null;
}
