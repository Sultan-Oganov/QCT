import { makeStyles } from '@qctoken/theme';

export const useStyles = makeStyles((theme, bc) => ({
  tooltipWrapper: {
    position: 'relative',
  },
  centerContainer: {
    borderRadius: 5,
    padding: theme.spacing(2.5, 2),
    position: 'absolute',
    zIndex: 20,
    transition: 'opacity 0.3s',
    width: bc.width,
    maxWidth: bc.width,
    boxSizing: 'border-box',
    pointerEvents: 'none',
  },
  bottom: {
    top: 'calc(100% + 5px)',
    transform: 'translateX(-50%)',
    left: '50%',
  },
  left: {
    right: 'calc(100% + 5px)',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  right: {
    top: '50%',
    transform: 'translateY(-50%)',
    left: 'calc(100% + 5px)',
  },
  top: {
    transform: 'translateX(-50%)',
    bottom: 'calc(100% + 5px)',
    left: '50%',
  },
  tooltipBox: {
    ...theme.typography.regular,
    display: 'block',
    boxSizing: 'border-box',
    width: '100%',
    zIndex: 20,
    position: 'relative',
    textAlign: 'center',
    borderRadius: 5,
    padding: theme.spacing(2.5, 2),
    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0, 0, 0, 0.2)',
    '&:after': {
      content: '""',
      position: 'absolute',
      width: 1,
      height: 1,
      border: '5px solid transparent',
    },
    backgroundColor: theme.selectColor(bc.backgroundColor),
    color: theme.selectColor(bc.color),
  },

  bottomBox: {
    '&:after': {
      borderBottomColor: theme.colors.primary.main,
      bottom: '100%',
      left: 'calc(50% - 5px)',
    },
  },
  leftBox: {
    '&:after': {
      borderLeftColor: theme.colors.primary.main,
      left: '100%',
      top: 'calc(50% - 5px)',
    },
  },
  rightBox: {
    '&:after': {
      borderRightColor: theme.colors.primary.main,
      right: '100%',
      top: 'calc(50% - 5px)',
    },
  },
  topBox: {
    '&:after': {
      borderTopColor: theme.colors.primary.main,
      top: '100%',
      left: 'calc(50% - 5px)',
    },
  },
}));
