import { makeStyles } from '@qctoken/theme';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: 150,
  },
  btn: {
    ...theme.typography.regular,
    width: '100%',
    height: 30,
    background: theme.colors.primary.main,
    color: theme.colors.common.white,
    borderRadius: 10,
    fontWeight: 500,
    borderWidth: 0,
    cursor: 'pointer',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  balance: {
    ...theme.typography.h2,
  },
}));
