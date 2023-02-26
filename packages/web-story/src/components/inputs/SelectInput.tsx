import { useThemeColorsPlain } from '@qctoken/theme';
import { useMemo } from 'react';
import { InputProps } from './types';

function getValue({ bc, attr }: InputProps) {
  const value = bc[attr.name as keyof typeof bc];

  switch (typeof value) {
    case 'string':
    case 'number':
      return value;
    default:
      return '';
  }
}

type SelectInputProps = InputProps & {
  onChange: (name: string, value: string, forceRerender: boolean) => void;
};

export function SelectInput(props: SelectInputProps) {
  const { onChange, attr } = props;
  const colors = useThemeColorsPlain();
  const value = getValue(props);
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
    <select
      onChange={(event) =>
        onChange(attr.name, event.target.value, attr.control === 'selectColor')
      }
    >
      {chooses.map((choose) => (
        <option
          key={choose.value}
          selected={choose.value === value}
          value={choose.value}
        >
          {choose.name}
        </option>
      ))}
    </select>
  );
}
