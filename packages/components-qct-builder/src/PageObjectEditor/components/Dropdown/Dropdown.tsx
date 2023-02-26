import { useState, useMemo, ChangeEvent } from 'react';
import { useTheme, useThemeColorsPlain } from '@qctoken/theme';
import { Title } from '../Title/Title';
import { InputProps } from '../types';

export function Dropdown(props: InputProps) {
  const { attr, onAddChangedInputs, pageObjectId } = props;
  const theme = useTheme();
  const [value, setValue] = useState(props.value);
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
    onAddChangedInputs(attr.name, attr.id, pageObjectId, event.target.value);
  };
  const colors = useThemeColorsPlain();
  const chooses = useMemo(() => {
    if (attr.control === 'selectColor') {
      return [
        ...(attr.chooses ?? []),
        ...Object.keys(colors)
          .filter((color) => color.includes('.'))
          .map((color) => ({ name: color, value: color })),
      ];
    }

    return attr.chooses ?? [];
  }, [attr.chooses]);

  return (
    <div
      css={{
        boxSizing: 'border-box',
        borderBottom: `1px solid ${theme.colors.common.stroke}`,
        padding: theme.spacing(4),
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Title title={attr.name} />
      <select
        onChange={handleChange}
        value={value}
        css={{
          width: 130,
          border: `1px solid ${theme.colors.common.stroke}`,
          background: theme.colors.common.white,
          borderRadius: 6,
          padding: theme.spacing(2.5, 1),
          outline: 'none',
        }}
      >
        {chooses.map((choose) => (
          <option key={choose.value} value={choose.value}>
            {choose.name}
          </option>
        ))}
        <option disabled value="" selected={value === null || value === ''}>
          empty
        </option>
      </select>
    </div>
  );
}
