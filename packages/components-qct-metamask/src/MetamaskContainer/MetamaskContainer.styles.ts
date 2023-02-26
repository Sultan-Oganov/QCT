import { makeStyles } from '@qctoken/theme';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  notFound: {
    ...theme.typography.h2,
    ...theme.typography.nowrap,
    color: theme.colors.common.nonActive,
  },
}));
