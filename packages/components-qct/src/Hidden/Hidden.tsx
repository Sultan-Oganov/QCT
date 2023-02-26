import { mapComponents } from '@qctoken/register';
import type { ClassProps } from '@qctoken/register/lib/types';
import type { HiddenNameType } from './types';
import { useBooleanRule } from '@qctoken/executor';

export function Hidden(props: ClassProps<HiddenNameType>) {
  const { hidden, bc, values, pageStore } = props;
  const isHiddenRule = useBooleanRule(
    pageStore,
    bc.hiddenRules,
    values,
    bc.primaryOperator,
  );

  if (
    hidden ||
    (bc.hiddenRules && (bc.invert ? !isHiddenRule : isHiddenRule))
  ) {
    return null;
  }

  return <>{mapComponents(bc.childs, props)}</>;
}
