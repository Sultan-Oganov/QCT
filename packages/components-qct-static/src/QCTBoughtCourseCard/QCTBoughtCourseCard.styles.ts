import { makeStyles } from '@qctoken/theme';

export const useStyles = makeStyles((theme) => ({
  root: {
    boxSizing: 'border-box',
    minWidth: 250,
    width: 250,
    height: 265,
    backgroundColor: theme.colors.common.card,
    border: `1px solid ${theme.colors.common.stroke}`,
    borderRadius: 16,
    overflow: 'hidden',
    cursor: 'pointer',
  },
}));
