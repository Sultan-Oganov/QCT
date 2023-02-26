import { makeStyles, type Theme } from '@qctoken/theme';

export const useStyles = makeStyles((theme: Theme, bc) => ({
  pagination: {
    display: 'flex',
    listStyle: 'none',
    background: theme.selectColor(bc.backgroundColor),
    justifyContent: 'center',
    padding: theme.spacing(2, 0),
    borderRadius: '12px',
    boxSizing: 'border-box',
    width: bc.width,
    margin: bc.margin,
  },
  items: {
    display: 'flex',
    overflowX: 'auto',
  },
  item: {
    width: 32,
    height: 32,
    minWidth: 32,
    textAlign: 'center',
    color: theme.colors.text.disabled,
    display: 'flex',
    boxSizing: 'border-box',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '6px',
    fontSize: 16,
    cursor: 'pointer',
  },
  dots: {
    '&: hover': {
      backgroundColor: 'transparent',
      cursor: 'default',
    },
  },
  selected: {
    backgroundColor: theme.colors.primary.main,
    color: theme.colors.common.white,
    textAlign: 'center',
  },
  arrowWrap: {
    backgroundColor: theme.colors.disabled.background,
    borderRadius: '6px',
    margin: theme.spacing(0, 4),
    width: 32,
    height: 32,
    minWidth: 32,
  },
  arrow: {
    display: 'grid',
    placeItems: 'center',
    width: '100%',
    height: '100%',
    cursor: 'pointer',
  },
  disabled: {
    pointerEvents: 'none',
    backgroundColor: 'transparent',
  },
}));
