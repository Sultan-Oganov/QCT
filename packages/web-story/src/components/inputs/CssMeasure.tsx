import { InputProps } from './types';
import { ChangeEvent, useState } from 'react';

const PARSE_VALUE = /^(?<value>\d*\.?\d*)(?<measure>px|%)$/;

function parseValue(value: string) {
  if (typeof value === 'string') {
    const groups = value.match(PARSE_VALUE)?.groups;

    if (groups) {
      return {
        measure: groups.measure as 'px' | '%',
        value: groups.value ?? '',
      };
    }
  }
  return {
    measure: undefined,
    value: '',
  };
}

function getValue({ bc, attr }: InputProps) {
  const value = bc[attr.name as keyof typeof bc];

  if (typeof value === 'string') {
    return parseValue(value).value;
  }
  return 'auto';
}

type CssMeasureInputProps = InputProps & {
  onChange: (name: string, value: number | string) => void;
};

export function CssMeasureInput(props: CssMeasureInputProps) {
  const [value, setValue] = useState(() => getValue(props));
  const [measure, setMeasure] = useState('px');

  const { onChange, attr } = props;

  const isDisabled = (type: string) => (measure === type ? true : false);

  const changeMeasure = (type: string | number) => {
    if (type === 'px') {
      setMeasure('px');
    } else {
      setMeasure('%');
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const str = event.target.value;
    if (str === '0' || str === '') {
      onChange(attr.name, 'auto');
    } else {
      onChange(attr.name, `${str}${measure}`);
    }
    setValue(str);
  };

  const handleClick = (val: string, type: string | number) => {
    const newValue = val + type;
    changeMeasure(type);
    onChange(attr.name, newValue);
  };

  return (
    <div>
      <input type="number" value={value} onChange={handleChange} />
      <div>
        <input
          disabled={isDisabled('px')}
          type="button"
          value="px"
          onClick={() => handleClick(value, 'px')}
        />
        <input
          disabled={isDisabled('%')}
          type="button"
          value="%"
          onClick={() => handleClick(value, '%')}
        />
      </div>
    </div>
  );
}
