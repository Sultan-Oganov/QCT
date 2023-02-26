import { makeStyles } from '@qctoken/theme';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    overflow: 'auto',
    flexGrow: 1,
  },
  content: {
    overflow: 'auto',
    width: '100%',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    wrap: 'nowrap',
  },
  actions: {
    display: 'flex',
    gap: theme.spacing(1),
    padding: theme.spacing(2),
  },
  button: {
    cursor: 'pointer',
    border: 'none',
    padding: theme.spacing(1, 2),
    backgroundColor: theme.colors.disabled.background,
    color: theme.colors.common.white,
    borderColor: 'none',
    borderRight: `1px solid ${theme.colors.common.stroke}`,
    '&:first-child': {
      borderTopLeftRadius: theme.spacing(1),
      borderBottomLeftRadius: theme.spacing(1),
    },
    '&:last-child': {
      borderTopRightRadius: theme.spacing(1),
      borderBottomRightRadius: theme.spacing(1),
    },
  },
  buttonActive: {
    backgroundColor: theme.colors.secondary.main,
  },
}));
