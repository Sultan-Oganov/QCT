import { makeStyles } from '@qctoken/theme';

export const useStyles = makeStyles((theme) => ({
  root: {
    boxSizing: 'border-box',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    background: theme.colors.common.white,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(4),
  },
  headerTitle: {
    ...theme.typography.highlighted,
    color: theme.colors.common.black,
  },
  closeBtn: {
    width: 22,
    height: 22,
    borderRadius: 50,
    backgroundColor: theme.colors.primary.main,
    color: theme.colors.common.white,
    display: 'grid',
    placeItems: 'center',
    zIndex: 5,
    cursor: 'pointer',
  },
  content: {
    boxSizing: 'border-box',
    flexGrow: 1,
    padding: theme.spacing(0, 4),
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(4),
  },
  rowItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  item: {
    ...theme.typography.badge,
  },
  itemLabel: {
    color: theme.colors.common.nonActive,
    maxWidth: '54%',
  },
  itemValue: {
    border: `1px solid ${theme.colors.common.stroke}`,
    borderRadius: 10,
    color: theme.colors.primary.main,
    padding: theme.spacing(0.5, 2),
  },
}));
