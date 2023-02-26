import { type SyntheticEvent } from 'react';
import { useBooleanRule } from '@qctoken/executor';
import { mapComponentOne } from '@qctoken/register';
import type { ClassProps } from '@qctoken/register/lib/types';
import type { IconButtonNameType } from './types';

export function IconButton(props: ClassProps<IconButtonNameType>) {
  const { bc, pageStore, values } = props;
  const isHidden = useBooleanRule(pageStore, bc.hiddenRules, values);
  const handleClick = (event: SyntheticEvent) => {
    if (bc.htmlType !== 'submit' && bc.htmlType !== 'reset') {
      event.preventDefault();
    }

    if (bc.masterId) {
      return pageStore.stores
        .get(bc.masterId)
        ?.invokeHandler([bc, { values }], bc.actionName);
    }

    if (bc.actionClick) {
      return pageStore.stores
        .get(bc.actionClick.pageObjectId)
        ?.invokeHandler([bc, {}]);
    }
  };

  if (isHidden) {
    return null;
  }

  return (
    <button
      onClick={handleClick}
      css={[
        {
          background: 'none',
          borderWidth: 0,
          display: 'inline-flex',
          cursor: 'pointer',
          padding: 0,
          margin: 0,
        },
      ]}
    >
      {bc.icon && mapComponentOne(bc.icon, props)}
      {bc.actionClick && mapComponentOne(bc.actionClick, props)}
    </button>
  );
}
