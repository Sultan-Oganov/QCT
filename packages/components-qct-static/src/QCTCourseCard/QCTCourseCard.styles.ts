import { makeStyles } from '@qctoken/theme';

export const useStyles = makeStyles((theme, values) => ({
  root: {
    boxSizing: 'border-box',
    minWidth: 250,
    width: 250,
    height: 265,
    backgroundColor: theme.colors.common.card,
    borderRadius: 16,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
  },
  content: {
    boxSizing: 'border-box',
    minHeight: 140,
    background: `url(${values?.cover}) top / cover no-repeat`,
    borderRadius: 16,
    position: 'relative',
    width: '100%',
    border: `1px solid ${theme.colors.common.stroke}`,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 6,
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
  oldPrice: {
    ...theme.typography.micro,
    color: theme.colors.common.nonActive,
    textDecoration: 'line-through',
    margin: theme.spacing(0, 0, 1, 0),
  },
  price: {
    ...theme.typography.sub,
    color: theme.colors.primary.main,
    display: 'flex',
    gap: theme.spacing(1),
  },
  footerBottom: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  author: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
  },
  authorAvatar: {
    width: 16,
    height: 16,
    borderRadius: 3,
  },
  authorName: {
    ...theme.typography.badge,
    color: theme.colors.common.nonActive,
  },
}));
