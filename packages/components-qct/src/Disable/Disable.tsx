import { mapComponents } from '@qctoken/register';
import type { ClassProps } from '@qctoken/register/lib/types';
import type { DisableNameType } from './types';
import { useBooleanRule } from '@qctoken/executor';

export function Disable(props: ClassProps<DisableNameType>) {
  const { disabled, bc, values, pageStore } = props;
  const isDisableRule = useBooleanRule(pageStore, bc.disableRules, values);
  const isDisabled =
    disabled ||
    (bc.disableRules && (bc.invert ? !isDisableRule : isDisableRule));

  return <>{mapComponents(bc.childs, { ...props, disabled: isDisabled })}</>;
}
