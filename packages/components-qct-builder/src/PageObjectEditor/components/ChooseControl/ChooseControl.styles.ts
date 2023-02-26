import { makeStyles } from '@qctoken/theme';

export const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    paddingTop: theme.spacing(3.5),
  },
  actions: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
    display: 'flex',
    margin: theme.spacing(1),
    marginBottom: theme.spacing(-4),
    alignSelf: 'flex-end',
    gap: theme.spacing(1),
  },
  button: {
    cursor: 'pointer',
    border: 'none',
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
  buttonFilled: {
    backgroundColor: theme.colors.primary.main,
  },
  buttonActive: {
    backgroundColor: theme.colors.secondary.main,
  },
}));
