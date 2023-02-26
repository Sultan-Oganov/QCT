import { makeStyles } from '@qctoken/theme';
import type { DrawerBuilderConfig } from './types';

const DETECT_APPERANCE = {
  active: {
    bottom: {
      top: 0,
    },
    right: {
      right: 0,
    },
    left: {
      left: 0,
    },
    top: {
      bottom: 0,
    },
  },
  nonActive: {
    bottom: {
      top: '100%',
      left: 0,
    },
    right: {
      top: 0,
      right: '-100%',
    },
    left: {
      top: 0,
      left: '-100%',
    },
    top: {
      bottom: '100%',
      right: 0,
    },
  },
};

export const useStyles = makeStyles((theme, bc: DrawerBuilderConfig) => ({
  root: {
    position: 'fixed',
    height: '100%',
    width: '100%',
    backgroundColor: theme.colors.common.card,
    display: 'flex',
    flexDirection: 'column',
    zIndex: 100,
    transition: '0.3s ease-in-out',
    maxWidth: bc.maxWidth,
    maxHeight: bc.maxHeight,
    minWidth: bc.minWidth,
    minHeight: bc.minHeight,
    ...DETECT_APPERANCE.nonActive[bc.appearance],
  },
  rootOpen: {
    ...DETECT_APPERANCE.active[bc.appearance],
  },
}));
