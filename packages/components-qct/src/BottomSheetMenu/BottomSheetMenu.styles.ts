import { makeStyles } from '@qctoken/theme';

export const useStyles = makeStyles((theme, bc) => ({
  dragIndicator: {
    width: '100%',
    height: bc.height || 80,
    position: 'fixed',
    bottom: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    placeItems: 'center',
    padding: theme.spacing(4, 0, 0, 0),
    backgroundColor: theme.colors.common.white,
    borderRadius: '16px 16px 0 0',
    borderTop: `1px solid ${theme.colors.common.stroke}`,
  },
  indicator: {
    width: 30,
    height: 5,
    backgroundColor: theme.colors.disabled.text,
    borderRadius: 100,
  },
  header: {
    alignSelf: 'flex-start',
  },
  childs: {
    width: '100%',
    minHeight: bc.minHeight ? `${bc.minHeight}vh` : 'auto',
    maxHeight: bc.maxHeight ? `${bc.maxHeight}vh` : 'auto',
  },
}));
