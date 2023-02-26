import { useEffect } from 'react';
import { mapComponents } from '@qctoken/register';
import type { ClassProps } from '@qctoken/register';
import { observer, useModel } from '@qctoken/store';
import { useStyles } from './Drawer.styles';
import type { DrawerNameType } from './types';
import { DrawerModel } from './DrawerModel';

function DrawerBase(props: ClassProps<DrawerNameType>) {
  const { bc } = props;
  const [store] = useModel(DrawerModel, props);
  const styles = useStyles(bc);

  useEffect(() => {
    // Wait for first render to process animation
    if (store.isFirstOpened || bc.defaultIsOpen) {
      store.setIsOpen(true);
    }
  }, [store.isFirstOpened]);

  if (!store.isFirstOpened) {
    return null;
  }

  return (
    <div css={[styles.root, store.isOpen && styles.rootOpen]}>
      {store.isOpen && mapComponents(bc.childs, props)}
    </div>
  );
}

export const Drawer = observer(DrawerBase);
