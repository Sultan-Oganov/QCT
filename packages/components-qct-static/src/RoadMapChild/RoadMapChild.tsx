import type { ClassProps } from '@qctoken/register/lib/types';
import type { RoadMapChildNameType } from './types';
import { mapComponentOne } from '@qctoken/register';

export function RoadMapChild(props: ClassProps<RoadMapChildNameType>) {
  const { bc } = props;
  return bc.child?.map((item) => mapComponentOne(item, props));
}
