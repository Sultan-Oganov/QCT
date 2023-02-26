import { InputProps } from './types';

function getValue({ bc, attr }: InputProps) {
  const value = bc[attr.name as keyof typeof bc];

  switch (typeof value) {
    case 'boolean':
      return value;
    default:
      return false;
  }
}

type BooleanInputProps = InputProps & {
  onChange: (name: string, value: boolean) => void;
};

export function BooleanInput(props: BooleanInputProps) {
  const { onChange, attr } = props;
  const isChecked = getValue(props);

  return (
    <input
      type="checkbox"
      checked={isChecked}
      onChange={(event) => onChange(attr.name, event.target.checked)}
    />
  );
}
