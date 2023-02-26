import { makeStyles } from '@qctoken/theme';

export const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.colors.text.main,
    padding: theme.spacing(2, 5),
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    border: `1px solid ${theme.colors.common.stroke}`,
    backgroundColor: theme.colors.common.card,
    height: 33,
    borderRadius: 16,
    cursor: 'pointer',
    maxWidth: 200,
  },
  rootSelected: {
    borderColor: theme.colors.primary.main,
  },
  title: {
    ...theme.typography.nowrap,
  },
}));
