import { makeStyles } from '@qctoken/theme';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    ...theme.typography.regular,
    color: 'rgba(255, 255, 255, 0.6)',
    marginBottom: 20,
  },
  input: {
    background: 'none',
    color: theme.colors.common.white,
    border: 'none',
    outline: 'none',
    borderBottom: '1px solid #494949',
    fontSize: '32px',
    lineHeight: '39px',
    '::placeholder': {
      color: '#343232',
    },
  },
  inputError: {
    borderBottomColor: theme.colors.text.error,
  },
  inputDisabled: {
    color: theme.colors.common.nonActive,
  },
  helper: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: theme.colors.disabled.text,
    padding: theme.spacing(0, 0, 0, 1),
    fontSize: 18,
    boxSizing: 'border-box',
    lineHeight: '24px',
    height: 24,
  },
  helperError: {
    color: theme.colors.text.error,
  },
}));
