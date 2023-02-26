import { makeStyles } from '@qctoken/theme';

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1, 4),
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    color: theme.colors.text.disabled,
  },
  inputLabel: {
    ...theme.typography.highlighted,
    display: 'flex',
    flexWrap: 'nowrap',
    gap: theme.spacing(2),
  },
  inputLabelText: {
    minWidth: 100,
  },
  input: {
    border: 'none',
    borderBottom: `1px solid ${theme.colors.common.stroke}`,
    outline: 'none',
  },
  actions: {
    display: 'flex',
    gap: theme.spacing(4),
    justifyContent: 'flex-end',
  },
  errors: {
    color: theme.colors.text.error,
    overflowX: 'auto',
  },
  button: {
    backgroundColor: theme.colors.primary.main,
    color: theme.colors.common.white,
    border: 'none',
    borderRadius: theme.spacing(2),
    padding: theme.spacing(1, 4),
    cursor: 'pointer',
  },
  buttonReset: {
    backgroundColor: theme.colors.secondary.main,
  },
}));
