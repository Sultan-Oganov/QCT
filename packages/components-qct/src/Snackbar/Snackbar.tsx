import { useEffect } from 'react';
import type { ClassProps } from '@qctoken/register/lib/types';
import { observer, useModel } from '@qctoken/store';
import type { Message, SnackbarNameType } from './types';
import { SnackbarModel } from './Snackbar.model';
import { useStyles } from './Snackbar.styles';
import { useThemeColorsPlain } from '@qctoken/theme';

export const Snackbar = observer(function (
  props: ClassProps<SnackbarNameType>,
) {
  const { bc, pageStore } = props;
  const styles = useStyles();
  const [store] = useModel(SnackbarModel, props);
  const colors = useThemeColorsPlain();

  useEffect(() => {
    store.setIsOpened(store.isOpen);

    if (store.isOpen) {
      const timer = setTimeout(() => {
        clearTimeout(timer);
        store.closeSnackbar();
        store.clearMessages();
      }, 5000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [store.isOpen]);

  if (!store.isOpen) {
    return null;
  }

  return (
    <>
      {store.messages.map((message: Message, i: number) => {
        const translatedMessage = pageStore.translate(message.msg);
        return (
          <div
            key={i}
            css={[
              styles.snackbarWrapper,
              styles[bc.positionType],
              {
                backgroundColor: colors[bc.backgroundColor],
                width: bc.width,
                bottom: `${i * 70}px`,
              },
            ]}
          >
            <div title={translatedMessage} css={[styles.snackbarContent]}>
              {translatedMessage}
            </div>

            <button onClick={store.closeSnackbar} css={styles.snackbarClose}>
              ×
            </button>
          </div>
        );
      })}
    </>
  );
});
