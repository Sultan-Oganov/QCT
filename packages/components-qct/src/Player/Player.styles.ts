import { makeStyles } from '@qctoken/theme';

export const useStyles = makeStyles((theme, bc) => ({
  root: {
    width: bc.width,
    height: bc.height,
    position: 'relative',
  },
  rootYoutube: {
    overflow: 'hidden',
    aspectRatio: '16/9',
    pointerEvents: 'none',
    '& iframe': {
      width: '300%',
      height: '100%',
      marginLeft: '-100%',
    },
  },
  playButton: {
    width: 0,
    height: 0,
    borderTop: '20px solid transparent',
    borderBottom: '20px solid transparent',
    borderLeft: `30px solid ${theme.colors.common.stroke}`,
    pointerEvents: 'auto',
    '&:hover': {
      borderLeft: `30px solid ${theme.colors.common.white}`,
    },
  },
  placeholder: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backdropFilter: 'blur(100px)',
    display: 'grid',
    placeItems: 'center',
  },
  placeholderTitle: {
    ...theme.typography.mega,
    color: theme.colors.common.nonActive,
    letterSpacing: 5,
  },
}));
