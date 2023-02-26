import type { ClassProps } from '@qctoken/register/lib/types';
import type { RadioNameType } from './types';
import { useTheme } from '@qctoken/theme';
import { ChangeEvent } from 'react';
import { useField, useFieldProps } from '@qctoken/form';

export function Radio(props: ClassProps<RadioNameType>) {
  const theme = useTheme();
  const { bc } = props;

  const field = useField({ name: bc.name, value: false });
  const [value] = useFieldProps<boolean>(field);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    field.setValue(event.target.checked);
  };

  return (
    <label
      css={[
        {
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          height: 50,
          padding: '0px 16px',
          backgroundColor: theme.colors.common.white,
          gap: 8,
          border: `1px solid ${theme.colors.common.stroke}`,
          borderRadius: 16,
          boxSizing: 'border-box',
        },
        value && {
          color: theme.colors.common.white,
          backgroundColor: theme.colors.primary.main,
        },
      ]}
    >
      <input
        checked={value}
        onChange={handleChange}
        type="radio"
        name={bc.name}
      />
      <span>{bc.label}</span>
    </label>
  );
}
