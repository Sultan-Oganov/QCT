import { makeStyles, type Theme } from '@qctoken/theme';

export const useStyles = makeStyles((theme: Theme) => ({
  groupRoot: {
    display: 'flex',
    alignItems: 'center',
    wrap: 'nowrap',
    gap: theme.spacing(2),
  },
  groupIcon: {
    display: 'flex',
    cursor: 'pointer',
  },
  groupName: {
    fontSize: 12,
    color: theme.colors.disabled.text,
  },
}));
