import type { SyntheticEvent } from 'react';
import type { ClassProps } from '@qctoken/register/lib/types';
import type { ButtonNameType } from './types';
import { makeBC, mapComponentOne } from '@qctoken/register';
import { useRunExecutor } from '@qctoken/executor';
import { useStyles } from './Button.styles';

export function Button(props: ClassProps<ButtonNameType>) {
  const { bc, disabled, readOnly, pageStore, values } = props;
  const isDisabled = disabled || readOnly || bc.disabled;
  const styles = useStyles(bc, isDisabled);
  const handleClick = (event: SyntheticEvent) => {
    if (bc.htmlType !== 'submit' && bc.htmlType !== 'reset') {
      event.preventDefault();
    }

    if (bc.actionClick) {
      pageStore.stores
        .get(bc.actionClick.pageObjectId)
        ?.invokeHandler([bc, {}]);
    }
  };
  const computedTitle = useRunExecutor(pageStore, bc.getTitle, values);
  const title = computedTitle || bc.title;
  return (
    <button
      disabled={isDisabled}
      onClick={handleClick}
      type={bc.htmlType}
      css={styles.root}
    >
      {bc.icon && mapComponentOne(bc.icon, props)}
      {title && <span>{title}</span>}
      {bc.htmlType === 'submit' && (
        <span css={styles.loader}>
          {mapComponentOne(
            makeBC('QCT.FORM.LOADER', {
              pageObjectId: 'loader',
              objectId: 'loader',
              //@ts-ignore
              color:
                bc.color === 'white' || disabled
                  ? 'primary.main'
                  : 'common.white',
            }),
            props,
          )}
        </span>
      )}
      {bc.actionClick && mapComponentOne(bc.actionClick, props)}
    </button>
  );
}
