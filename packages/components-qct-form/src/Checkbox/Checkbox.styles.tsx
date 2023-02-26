import { makeStyles, generateClassName } from '@qctoken/theme';

export const classNames = {
  root: generateClassName({ name: 'checkbox', label: 'root' }),
  input: generateClassName({ name: 'checkbox', label: 'input' }),
  checkmark: generateClassName({ name: 'checkbox', label: 'checkmark' }),
};

export const useStyles = makeStyles((theme) => {
  return {
    checkmark: {
      position: 'relative',
      display: 'inline-block',
      flexShrink: 0,
      height: 16,
      width: 16,
      boxSizing: 'border-box',
      border: `1px solid ${theme.colors.text.main}`,
      borderRadius: 4,
      marginRight: 8,

      /* Create the checkmark/indicator (hidden when not checked) */
      '&:after': {
        content: '""',
        position: 'absolute',
        display: 'none',
      },
    },

    /* Hide the browser's default checkbox */
    input: {
      position: 'absolute',
      opacity: 0,
      cursor: 'pointer',
      height: 0,
      width: 0,
    },

    label: {
      ...theme.typography.regular,
      ...theme.typography.nowrap,
      opacity: 0.8,
      verticalAlign: 'middle',
      display: 'inline-block',
    },

    root: {
      display: 'inline-flex',
      position: 'relative',
      cursor: 'pointer',
      userSelect: 'none',
      alignItems: 'center',

      /* Create a custom checkbox */
      /* On mouse-over, add a grey background color */
      [`&:hover .${classNames.input} ~ .${classNames.checkmark}`]: {
        // TODO: add hover
      },

      /* When the checkbox is checked, add a blue background */
      [`& .${classNames.input}:checked ~ .${classNames.checkmark}`]: {
        borderWidth: 0,
        backgroundColor: theme.colors.primary.main,
      },

      /* Show the checkmark when checked */
      [`& .${classNames.input}:checked ~ .${classNames.checkmark}:after`]: {
        display: 'block',
      },

      /* Style the checkmark/indicator */
      [`& .${classNames.checkmark}:after`]: {
        left: 5,
        top: 2,
        width: 4,
        height: 8,
        border: 'solid white',
        borderWidth: '0 2px 2px 0',
        transform: 'rotate(45deg)',
      },
    },
  };
});
