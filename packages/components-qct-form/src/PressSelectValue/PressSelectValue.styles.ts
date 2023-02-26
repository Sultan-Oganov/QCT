import { makeStyles } from '@qctoken/theme';

export const useStyles = makeStyles(
  (theme, disabled: boolean, isSelected: boolean) => ({
    root: {
      cursor: disabled ? 'default' : 'pointer',
      position: 'relative',
      opacity: disabled ? 0.5 : 1,
      borderRadius: theme.spacing(3),
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: isSelected
        ? theme.colors.primary.main
        : theme.colors.common.stroke,
    },
  }),
);
