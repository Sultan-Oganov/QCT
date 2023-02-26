import { makeStyles } from '@qctoken/theme';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    wrap: 'nowrap',
    padding: theme.spacing(4, 3),
    gap: theme.spacing(4),
    borderBottom: `1px solid ${theme.colors.common.stroke}`,
  },
  toggleButton: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  },
  toggleIcon: {
    width: 18,
    height: 18,
    display: 'inline-block',
  },
  headerTitle: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
    overflow: 'auto',
  },
  headerName: {
    textAlign: 'right',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  headerContent: {
    overflowY: 'auto',
    flexGrow: 1,
  },
}));
