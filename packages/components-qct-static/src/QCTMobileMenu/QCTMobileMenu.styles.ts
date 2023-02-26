import { makeStyles } from '@qctoken/theme';

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.colors.common.card,
    display: 'flex',
    justifyContent: 'space-evenly',
    height: 98,
    marginTop: 36,
    flexShrink: 0,
    position: 'relative',
  },
  top: {
    pointerEvents: 'none',
    width: '100%',
    height: 50,
    borderRadius: 25,
    position: 'absolute',
    boxShadow: `0px 15px 0px 5px ${theme.colors.common.card}`,
    bottom: 98,
  },
}));
