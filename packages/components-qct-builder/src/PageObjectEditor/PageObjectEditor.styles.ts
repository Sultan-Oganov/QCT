import { makeStyles } from '@qctoken/theme';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  visibleActions: {
    display: 'flex',
  },
  visibleButton: {
    flexGrow: 1,
    textAlign: 'center',
    backgroundColor: theme.colors.disabled.background,
    border: 'none',
    cursor: 'pointer',
  },
  visibleButtonSelected: {
    backgroundColor: theme.colors.secondary.main,
  },
}));
