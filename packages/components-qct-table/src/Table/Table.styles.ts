import { makeStyles, type Theme } from '@qctoken/theme';

export const useStyles = makeStyles(
  (theme: Theme, bc, isSelected: boolean) => ({
    root: {
      width: '100%',
      overflow: 'auto',
      maxHeight: '100%',
    },
    table: {
      fontFamily: 'Arial, Helvetica, sans-serif',
      borderCollapse: bc.borderSpacing ? 'separate' : 'collapse',
      width: '100%',
      borderSpacing: bc.borderSpacing,
      tableLayout: bc.tableLayout,
    },
    thead: {
      position: 'sticky',
      top: 0,
    },
    header: {
      backgroundColor: theme.colors.common.background,
    },
    checkbox: {
      textAlign: 'center',
      padding: theme.spacing(4),
    },
    selectedRow: {
      backgroundColor: theme.colors.primary.main,
      '& td': {
        padding: theme.spacing(4, 8, 4, 2),
      },
      '& td:first-child': {
        borderTopLeftRadius: 12,
      },
      '& td:last-child': {
        borderTopRightRadius: 12,
      },
    },
    selectedCount: {
      marginLeft: -40,
      ...theme.typography.regular,
      color: theme.colors.common.white,
    },
    btn: {
      ...theme.typography.regular,
      cursor: 'pointer',
      background: 'none',
      border: 'none',
    },
    undo: {
      color: theme.colors.common.nonActive,
    },
    delete: {
      display: 'flex',
      gap: theme.spacing(2),
      alignItems: 'center',
      color: theme.colors.common.white,
    },
    body: {
      backgroundColor: theme.selectColor(bc.backgroundColor),
      overflowY: 'auto',
      '& td': {
        display: 'table-cell',
        borderBottom: bc.showBorder
          ? `1px solid ${theme.colors.common.stroke}`
          : 'none',
      },
      '& tr:first-child td:first-child': {
        borderTopLeftRadius: !isSelected ? 12 : 0,
      },
      '& tr:first-child td:last-child': {
        borderTopRightRadius: !isSelected ? 12 : 0,
      },
      '& tr:last-child td:first-child': {
        borderBottomLeftRadius: 12,
      },

      '& tr:last-child td:last-child': {
        borderBottomRightRadius: 12,
      },
    },
    tr: {
      '&:hover': {
        background: bc.hoverBackgroundColor && theme.colors.common.stroke,
      },
    },
    selected: {
      backgroundColor: theme.colors.common.stroke,
    },
    notFound: {
      ...theme.typography.h2,
      fontWeight: 300,
      color: theme.colors.common.nonActive,
    },
  }),
);
