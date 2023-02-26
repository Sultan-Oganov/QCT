import { makeStyles } from '@qctoken/theme';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '92%',
    boxSizing: 'border-box',
    padding: theme.spacing(2, 0, 2, 2),
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 165px)',
    gridTemplateRows: 'repeat(3, 205px)',
    gap: 12,
  },
}));
