import { makeStyles } from '@qctoken/theme';

export const useStyles = makeStyles((theme, values) => ({
  root: {
    boxSizing: 'border-box',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    boxSizing: 'border-box',
    minHeight: 140,
    background: `url(${values.cover}) top / cover no-repeat`,
    borderRadius: 16,
    position: 'relative',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: theme.spacing(2),
    padding: theme.spacing(4),
  },
  stock: {
    ...theme.typography.badge,
    backgroundColor: theme.colors.primary.main,
    padding: theme.spacing(0.5, 2),
    borderRadius: 10,
    color: theme.colors.common.white,
    zIndex: 5,
  },
  infoBtn: {
    width: 22,
    height: 22,
    borderRadius: 50,
    backgroundColor: theme.colors.primary.main,
    color: theme.colors.common.white,
    display: 'grid',
    placeItems: 'center',
    zIndex: 5,
    cursor: 'pointer',
  },
  icon: {
    backgroundColor: theme.colors.primary.main,
    borderRadius: 50,
    width: 48,
    height: 48,
    position: 'absolute',
    bottom: -18,
    right: 18,
    display: 'grid',
    placeItems: 'center',
    cursor: 'pointer',
  },
  description: {
    ...theme.typography.highlighted,
    overflow: 'hidden',
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': '2',
    flexGrow: 1,
    maxHeight: 61,
    boxSizing: 'border-box',
    padding: theme.spacing(4),
  },
  footer: {
    boxSizing: 'border-box',
    borderTop: `1px solid ${theme.colors.common.stroke}`,
    padding: theme.spacing(2, 4),
  },
  footerText: {
    ...theme.typography.badge,
    color: theme.colors.common.nonActive,
    margin: theme.spacing(0, 0, 1, 0),
  },
  footerCourseFinished: {
    ...theme.typography.sub,
    color: theme.colors.primary.main,
  },
}));