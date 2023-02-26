import { InputProps } from './types';

function getValue({ bc, attr }: InputProps) {
  const value = bc[attr.name as keyof typeof bc];

  switch (typeof value) {
    case 'string':
      return value;
    case 'number':
      return String(value);
    default:
      return '';
  }
}

type TextInputProps = InputProps & {
  onChange: (name: string, value: string) => void;
};

export function TextInput(props: TextInputProps) {
  const { onChange, attr } = props;
  const value = getValue(props);

  return (
    <input
      css={{ width: '100%' }}
      value={value}
      onChange={(event) => onChange(attr.name, event.target.value)}
    />
  );
}
