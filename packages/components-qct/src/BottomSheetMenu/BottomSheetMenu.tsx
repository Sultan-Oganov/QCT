import { mapComponentOne, mapComponents } from '@qctoken/register';
import type { ClassProps } from '@qctoken/register';
import { observer, useModel } from '@qctoken/store';
import { useTheme } from '@qctoken/theme';
import { useStyles } from './BottomSheetMenu.styles';
import type { BottomSheetMenuNameType } from './types';
import { BottomSheetMenuModel } from './BottomSheetMenuModel';
import BottomSheet from 'react-draggable-bottom-sheet';

function BottomSheetMenuBase(props: ClassProps<BottomSheetMenuNameType>) {
  const { bc } = props;
  const [store] = useModel(BottomSheetMenuModel, props);
  const styles = useStyles(bc);
  const theme = useTheme();

  const handleOpen = () => {
    store.setIsOpen(true);
  };

  const handleClose = () => {
    store.setIsOpen(false);
  };
  return (
    <>
      <div onClick={handleOpen} css={styles.dragIndicator}>
        <div css={styles.indicator}></div>
        {bc.header && (
          <div css={styles.header}>{mapComponentOne(bc.header, props)}</div>
        )}
      </div>

      <BottomSheet
        isOpen={store.isOpen}
        close={handleClose}
        styles={{
          dragIndicator: {
            indicator: {
              width: 30,
              height: 5,
              backgroundColor: theme.colors.disabled.text,
              borderRadius: 100,
            },
            wrap: {
              paddingTop: 0,
            },
          },
          window: {
            wrap: {
              borderRadius: '16px 16px 0 0',
              padding: theme.spacing(4),
            },
          },
        }}
      >
        <div css={styles.childs}>{mapComponents(bc.childs, props)}</div>
      </BottomSheet>
    </>
  );
}

export const BottomSheetMenu = observer(BottomSheetMenuBase);
