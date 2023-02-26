import type { ClassProps } from '@qctoken/register/lib/types';
import type { RoadMapCardsNameType } from './types';
import { mapComponents } from '@qctoken/register';

export function RoadMapCards(props: ClassProps<RoadMapCardsNameType>) {
  const { bc } = props;
  return bc.child?.map((item) => mapComponents([item], props));
}
