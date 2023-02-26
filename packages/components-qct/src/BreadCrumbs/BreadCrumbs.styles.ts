import { makeStyles } from '@qctoken/theme';
export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 2,
  },
  item: {
    display: 'flex',
    maxWidth: 150,
    alignItems: 'center',
    gap: 2.5,
    color: theme.colors.common.nonActive,
  },
  itemText: {
    ...theme.typography.nowrap,
    '& a': {
      width: '100%',
    },
  },
  lastItem: {
    color: theme.colors.common.black,
  },
  dots: {
    width: 38,
    height: 20,
    display: 'grid',
    placeItems: 'center',
    color: theme.colors.common.nonActive,
    borderRadius: 6,
    backgroundColor: theme.colors.disabled.background,
    cursor: 'pointer',
  },
}));
