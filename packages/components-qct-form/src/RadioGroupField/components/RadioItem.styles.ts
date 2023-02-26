import { makeStyles } from '@qctoken/theme';

export const useStyles = makeStyles((theme) => ({
  label: {
    display: 'flex',
    cursor: 'pointer',
  },
  radio: {
    marginRight: theme.spacing(2),
  },
  name: {
    ...theme.typography.regular,
    color: theme.colors.text.main,
    opacity: 0.8,
    overflow: 'hidden',
    display: 'inline-block',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    margin: 0,
    padding: 0,
  },
}));
