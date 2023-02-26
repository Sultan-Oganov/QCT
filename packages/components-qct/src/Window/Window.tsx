import { useEffect } from 'react';
import { ClassProps, mapComponents } from '@qctoken/register';
import { observer, useModel } from '@qctoken/store';
import { WindowNameType } from './types';
import { useTheme } from '@qctoken/theme';
import { WindowModel } from './WindowModel';
import CloseIcon from './assets/svg/CloseIcon';

export const Window = observer(function (props: ClassProps<WindowNameType>) {
  const { bc } = props;

  const [store] = useModel(WindowModel, props);
  const theme = useTheme();

  useEffect(() => {
    store.setIsOpened(store.isOpen);
  }, [store.isOpen]);

  if (!store.isOpen) {
    return null;
  }

  return (
    <div
      css={{
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.5)',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 2,
      }}
    >
      <div
        css={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          padding: theme.spacing(4, 0),
          width: bc.width,
          height: bc.height,
          minWidth: bc.minWidth,
          background: theme.colors.common.white,
          borderRadius: 16,
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'auto',
          maxHeight: '80%',
        }}
      >
        <div
          css={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: theme.spacing(0, 0, 2, 0),
            padding: theme.spacing(0, 4),
          }}
        >
          {bc.title && (
            <div
              css={{
                fontWeight: 500,
                fontSize: 18,
                letterSpacing: '0.003em',
                color: theme.colors.text.main,
              }}
            >
              {bc.title}
            </div>
          )}
          {bc.header && (
            <div css={{ flex: '1 1 auto', margin: theme.spacing(0, 4) }}>
              {mapComponents(bc.header, props)}
            </div>
          )}
          <div
            css={{
              display: 'inline-block',
              cursor: 'pointer',
              padding: theme.spacing(4),
            }}
            onClick={store.closeWindow}
          >
            <CloseIcon />
          </div>
        </div>
        {mapComponents(bc.childs, props)}
      </div>
    </div>
  );
});
