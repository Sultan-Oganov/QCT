import { makeStyles } from '@qctoken/theme';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  btn: {
    ...theme.typography.regular,
    ...theme.typography.nowrap,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(2),
    width: '100%',
    background: theme.colors.primary.main,
    color: theme.colors.common.white,
    borderRadius: 16,
    fontWeight: 500,
    borderWidth: 0,
    cursor: 'pointer',
    height: 50,
  },
  btnDisabled: {
    background: theme.colors.disabled.background,
    cursor: 'initial',
  },
  connected: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
  },

  connectedText: {
    ...theme.typography.regular,
    fontWeight: 500,
  },
}));
