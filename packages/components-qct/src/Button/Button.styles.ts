import { makeStyles } from '@qctoken/theme';
import type { ButtonBuilderConfig } from './types';

export const useStyles = makeStyles(
  (theme, bc: ButtonBuilderConfig, isDisabled: boolean) => {
    const variant = {
      contained: {
        backgroundColor: theme.selectColor(bc.color),
        color:
          bc.color === 'white'
            ? theme.colors.text.main
            : theme.colors.common.white,
      },
      outlined: {
        border: `1px solid ${theme.selectColor(bc.color)}`,
        color: bc.color && theme.selectColor(bc.color),
      },
      text: {
        color: bc.color && theme.selectColor(bc.color),
      },
    };

    const disabledStyles = () => {
      if (isDisabled) {
        if (bc.variant === 'contained') {
          return {
            backgroundColor: theme.colors.disabled.background,
            color: theme.colors.disabled.text,
          };
        } else if (bc.variant === 'outlined') {
          return {
            borderColor: theme.colors.disabled.background,
            color: theme.colors.disabled.text,
          };
        }
      }
    };

    return {
      root: {
        ...theme.typography.regular,
        width: bc.width,
        maxWidth: '100%',
        height: bc.height || 50,
        borderRadius: 16,
        fontWeight: 500,
        borderWidth: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        gap: 12,
        cursor: 'pointer',
        backgroundColor: 'transparent',
        position: 'relative',
        '&:hover': {
          filter: 'brightness(97%)',
        },
        '&:active': {
          filter: 'brightness(95%)',
        },
        ...variant[bc.variant],
        ...disabledStyles(),
      },
      loader: {
        width: 20,
        height: 20,
        position: 'absolute',
        right: 16,
      },
    };
  },
);
