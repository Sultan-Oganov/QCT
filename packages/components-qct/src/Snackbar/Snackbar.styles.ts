import { makeStyles } from '@qctoken/theme';

export const useStyles = makeStyles((theme) => ({
  snackbarWrapper: {
    position: 'absolute',
    margin: theme.spacing(5),
    borderRadius: 5,
    padding: theme.spacing(2.5, 4),
    color: theme.colors.common.white,
    zIndex: 100,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    rowGap: 2,
    minWidth: 150,
  },
  snackbarContent: {
    width: '95%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: theme.colors.common.white,
    display: '-webkit-box',
    WebkitLineClamp: 4,
    WebkitBoxOrient: 'vertical',
  },
  snackbarClose: {
    border: 'none',
    background: 'transparent',
    fontSize: 26,
    fontWeight: 'bold',
    cursor: 'pointer',
    margin: 0,
    padding: 0,
    color: theme.colors.common.white,
  },
  topCenter: {
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
  },
  topLeft: {
    top: 0,
    left: 0,
  },
  topRight: {
    top: 0,
    right: 0,
  },
  bottomCenter: {
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
  },
  bottomLeft: {
    bottom: 0,
    left: 0,
  },
  bottomRight: {
    bottom: 0,
    right: 0,
  },
}));
