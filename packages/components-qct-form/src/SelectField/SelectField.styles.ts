import { makeStyles } from '@qctoken/theme';

export const useStyles = makeStyles((theme) => ({
  label: {
    width: '100%',
    position: 'relative',
    display: 'inline-block',
    '&:before': {
      content: '""',
      height: '20px',
      position: 'absolute',
      right: '7px',
      top: '3px',
      width: '22px',
      background: theme.colors.common.white,
      borderTopRightRadius: '3px',
      borderBottomRightRadius: '3px',
      pointerEvents: 'none',
      display: 'block',
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      right: '15px',
      top: '46%',
      marginTop: '-3px',
      zIndex: 2,
      pointerEvents: 'none',
      width: '0',
      height: '0',
      borderStyle: 'solid',
      borderWidth: '6.9px 4px 0 4px',
      borderColor: '#2C2D2E transparent transparent transparent',
    },
    '& select': {
      width: '100%',
      height: 50,
      appearance: 'none',
      padding: '0 30px 0 10px',
      border: '1px solid #e0e0e0',
      lineHeight: '30px',
      background: theme.colors.common.white,
      outline: 'none',
      borderRadius: 16,
    },
    '& select option:first-child': {
      color: theme.colors.disabled.text,
    },
    '& select::-ms-expand': {
      display: 'none',
    },
  },
}));
