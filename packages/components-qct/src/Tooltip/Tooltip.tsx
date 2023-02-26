import { useEffect } from 'react';
import { ClassProps, mapComponents } from '@qctoken/register';
import { observer, useModel } from '@qctoken/store';
import type { TooltipNameType } from './types';
import { TooltipModel } from './Tooltip.model';
import { useStyles } from './Tooltip.styles';

export const Tooltip = observer(function Tooltip(
  props: ClassProps<TooltipNameType>,
) {
  const { bc, pageStore } = props;
  const { positionType = 'bottom' } = bc;
  const styles = useStyles(bc);
  const [store] = useModel(TooltipModel, props);

  useEffect(() => {
    store.setIsOpened(store.isOpen);

    if (store.isOpen) {
      const timer = setTimeout(() => {
        store.closeTooltip();
      }, bc.showTime * 1000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [store.isOpen]);

  if (!bc.childs) {
    return null;
  }

  const translatedMessage = pageStore.translate(bc.message);

  return (
    <div css={styles.tooltipWrapper}>
      {mapComponents(bc.childs, props)}

      {store.isOpen && bc.message && (
        <div css={[styles.centerContainer, styles[positionType]]}>
          <span
            title={translatedMessage}
            css={[styles.tooltipBox, styles[`${positionType}Box`]]}
          >
            {!bc.width && translatedMessage && translatedMessage?.length > 15
              ? translatedMessage.substring(0, 5) + '...'
              : translatedMessage}
          </span>
        </div>
      )}
    </div>
  );
});
