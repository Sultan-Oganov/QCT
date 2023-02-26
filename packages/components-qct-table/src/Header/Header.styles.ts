import { makeStyles, type Theme } from '@qctoken/theme';

export const useStyles = makeStyles((theme: Theme) => ({
  td: {
    borderBottom: `1px solid ${theme.colors.common.stroke}`,
    textAlign: 'left',
    padding: theme.spacing(4),
  },
}));
