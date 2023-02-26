import { makeStyles } from '@qctoken/theme';
export const useStyles = makeStyles((theme, bc) => ({
  dropdown: {
    position: 'relative',
    width: bc.width,
    height: 50,
    backgroundColor: theme.colors.common.white,
    borderRadius: 16,
    border: `1px solid ${theme.colors.common.stroke}`,
    padding: theme.spacing(3, 4),
    boxSizing: 'border-box',
    zIndex: 10,
  },
  dropdownActive: {
    borderBottomWidth: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  labelBox: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    flex: 1,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  btnIcon: {
    display: 'flex',
    cursor: 'pointer',
    transition: 'ease 0.4s',
  },
  btnIconActive: {
    transform: 'rotate(-180deg)',
  },
  menu: {
    margin: 0,
    padding: theme.spacing(0, 4),
    boxSizing: 'border-box',
    width: 'calc(100% + 2px)',
    position: 'absolute',
    backgroundColor: theme.colors.common.white,
    border: `1px solid ${theme.colors.common.stroke}`,
    borderTopWidth: 0,
    //"-1" is needed in order to put the .menu block on the same line as the parent "dropdown"
    left: -1,
    borderRadius: '0 0 16px 16px',
  },
}));
