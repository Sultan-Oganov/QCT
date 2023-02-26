import { makeStyles } from '@qctoken/theme';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  header: {
    display: 'flex',
    flexWrap: 'nowrap',
    cursor: 'pointer',
  },
  arrowButton: {
    border: 'none',
    padding: 0,
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
  arrow: {
    transition: 'transform .4s ease-in-out',
    color: theme.colors.common.nonActive,
  },
  arrowOpen: {
    transform: 'rotate(-180deg)',
  },
  grow: {
    flexGrow: 1,
  },
}));
