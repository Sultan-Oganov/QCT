import { InputProps } from './types';

function getValue({ bc, attr }: InputProps) {
  const value = bc[attr.name as keyof typeof bc];

  if (typeof value === 'number') {
    return value;
  }

  return 0;
}

type NumberInputProps = InputProps & {
  onChange: (name: string, value: number) => void;
};

export function NumberInput(props: NumberInputProps) {
  const { onChange, attr } = props;
  const value = getValue(props);

  return (
    <input
      type="number"
      value={value}
      onChange={(event) => onChange(attr.name, Number(event.target.value))}
    />
  );
}
