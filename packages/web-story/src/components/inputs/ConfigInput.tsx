import { InputProps } from './types';
import { useState, ChangeEvent } from 'react';

function getValue({ bc, attr }: InputProps) {
  const value = bc[attr.name as keyof typeof bc];

  switch (typeof value) {
    case 'object':
      return JSON.stringify(value, null, 2);
    default:
      return '';
  }
}

type ConfigInputProps = InputProps & {
  onChange: (name: string, value: object) => void;
};

export function ConfigInput(props: ConfigInputProps) {
  const propsValue = getValue(props);
  const [value, setValue] = useState(propsValue);
  const { onChange, attr } = props;

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    try {
      const parsedValue = JSON.parse(event.target.value);
      onChange(attr.name, parsedValue);
    } catch {}
    setValue(event.target.value);
  };

  return (
    <textarea
      css={{ width: '100%' }}
      rows={8}
      value={value}
      onChange={handleChange}
    ></textarea>
  );
}
