import { makeStyles, type Theme } from '@qctoken/theme';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  rootIcon: {
    display: 'flex',
    cursor: 'pointer',
  },
  title: {
    cursor: 'pointer',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    fontSize: 16,
    width: '100%',
  },
  actionRoot: {
    display: 'flex',
    marginLeft: 'auto',
  },
  actionAdd: {
    display: 'flex',
    cursor: 'pointer',
    margin: theme.spacing(0, 0, 0, 2),
  },
  actionMove: {
    display: 'flex',
    cursor: 'pointer',
    margin: theme.spacing(0, 0, 0, 2),
  },
}));
