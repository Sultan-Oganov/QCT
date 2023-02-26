import { makeStyles } from '@qctoken/theme';

export const useStyles = makeStyles((theme) => ({
  root: {
    boxSizing: 'border-box',
    width: 251,
    height: 265,
    borderRadius: 16,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    backgroundColor: theme.colors.common.stroke,
    padding: theme.spacing(4, 4.5),
    gap: theme.spacing(4),
  },
  vrImg: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: 212,
    zIndex: 0,
  },
  description: {
    boxSizing: 'border-box',
    flexGrow: 1,
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-end',
    ...theme.typography.highlighted,
  },
  footer: {
    boxSizing: 'border-box',
    borderTop: `1px solid ${theme.colors.common.stroke}`,
  },
}));
