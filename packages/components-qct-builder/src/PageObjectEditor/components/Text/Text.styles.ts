import { makeStyles } from '@qctoken/theme';

export const useStyles = makeStyles((theme) => ({
  root: {
    boxSizing: 'border-box',
    borderBottom: `1px solid ${theme.colors.common.stroke}`,
    padding: theme.spacing(4),
  },
  input: {
    boxSizing: 'border-box',
    background: theme.colors.common.white,
    border: `1px solid ${theme.colors.common.stroke}`,
    borderRadius: 6,
    minHeight: 36,
    padding: theme.spacing(2, 4),
    width: '90%',
    outline: 'none',
    margin: theme.spacing(4, 0, 0, 0),
  },
}));
