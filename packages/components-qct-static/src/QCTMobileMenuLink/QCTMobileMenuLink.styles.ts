import { makeStyles } from '@qctoken/theme';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: 70,
    marginTop: -4,
    position: 'relative',
    textDecoration: 'none',
    transition: '0.1s ease-in-out',
  },
  rootActive: {
    bottom: 20,
  },
  icon: {
    width: 58,
    height: 58,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    position: 'relative',
    bottom: -10,
    color: theme.colors.text.main,
    transition: '0.1s ease-in-out',
  },
  iconActive: {
    backgroundColor: theme.colors.primary.main,
    color: theme.colors.common.white,
    bottom: 5,
    border: `6px solid ${theme.colors.common.card}`,
  },
  caption: {
    ...theme.typography.badge,
    color: theme.colors.text.main,
    margin: 0,
    padding: 0,
    textAlign: 'center',
  },
}));
