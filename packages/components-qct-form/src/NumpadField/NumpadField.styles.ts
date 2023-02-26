import { makeStyles } from '@qctoken/theme';

export const useStyles = makeStyles((theme) => ({
  container: {
    width: 350,
    boxSizing: 'border-box',
    padding: theme.spacing(5),
    display: 'grid',
    gridTemplateColumns: '50px 50px 50px',
    justifyContent: 'space-between',
    gap: theme.spacing(5),
  },
  btn: {
    background: 'transparent',
    border: 'none',
    height: 50,
    ...theme.typography.h1,
  },
  row: {
    width: 350,
    display: 'flex',
    justifyContent: 'center',
    gap: theme.spacing(2),
  },
  activeBlock: {
    border: `1px solid ${theme.colors.primary.main}`,
  },
  block: {
    width: 36,
    height: 36,
    border: `1px solid ${theme.colors.disabled.text}`,
    borderRadius: 12,
    textAlign: 'center',
    ...theme.typography.highlighted,
    '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
  },
}));
