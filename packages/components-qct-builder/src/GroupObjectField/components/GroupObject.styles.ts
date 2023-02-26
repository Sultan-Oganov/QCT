import { makeStyles } from '@qctoken/theme';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    cursor: 'pointer',
  },
  btn: {
    border: 'none',
    padding: 0,
  },
  block: {
    height: 165,
    border: `1px solid ${theme.colors.disabled.background}`,
    display: 'grid',
    placeItems: 'center',
    margin: theme.spacing(0, 0, 2, 0),
    boxSizing: 'border-box',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: 16,
    color: theme.colors.disabled.text,
  },
}));
