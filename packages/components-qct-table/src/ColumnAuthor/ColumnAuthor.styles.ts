import { makeStyles, type Theme } from '@qctoken/theme';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    textAlign: 'left',
    padding: theme.spacing(4),
  },
  wrap: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(0, 2),
    maxWidth: 160,
    ...theme.typography.nowrap,
  },
  img: {
    width: 24,
    height: 24,
    borderRadius: 6,
  },
  name: {
    fontSize: 16,
  },
}));
