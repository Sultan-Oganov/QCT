import { Title } from '../Title/Title';
import { useTheme } from '@qctoken/theme';
import { ChangeEvent, useState } from 'react';
import { InputProps } from '../types';

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
    measure: '' as const,
    value: '',
  };
}

function getValue(value: string) {
  if (typeof value === 'string') {
    return parseValue(value).value;
  }
  return '' as const;
}

function getMeasure(value: string) {
  if (typeof value === 'string') {
    return parseValue(value).measure;
  }
  return '';
}

export function CssMeasure(props: InputProps) {
  const { attr, onAddChangedInputs, pageObjectId } = props;
  const theme = useTheme();
  const [value, setValue] = useState(() => getValue(props.value));
  const [measure, setMeasure] = useState(() => getMeasure(props.value));

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = event.currentTarget;
    const newValue = `${inputValue}${measure}`;

    onAddChangedInputs(attr.name, attr.id, pageObjectId, newValue || undefined);
    setValue(inputValue);
  };

  const handleClick = (val: string, newType: 'px' | '%') => {
    const newMeasure = measure === newType ? '' : newType;
    const newValue = newMeasure === '' ? val : parseInt(val) || 0;
    const newServerValue = newValue + newMeasure || undefined;

    setMeasure(newMeasure);
    setValue(String(newValue));
    onAddChangedInputs(attr.name, attr.id, pageObjectId, newServerValue);
  };

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
      <div
        css={{
          width: 180,
          height: 42,
          border: `1px solid ${theme.colors.common.stroke}`,
          borderRadius: 6,
          display: 'flex',
          alignItems: 'stretch',
          justifyContent: 'space-between',
          boxSizing: 'border-box',
        }}
      >
        <input
          onChange={handleChange}
          value={value}
          type={measure === '' ? 'text' : 'number'}
          css={{
            minWidth: 0,
            margin: theme.spacing(2.5, 1),
            outline: 'none',
            border: 'none',
          }}
        />
        {['px' as const, '%' as const].map((name) => (
          <div
            key={name}
            onClick={() => handleClick(value, name)}
            css={[
              {
                display: 'flex',
                padding: theme.spacing(0, 2),
                justifyContent: 'center',
                alignItems: 'center',
                borderLeft: `1px solid ${theme.colors.common.stroke}`,
                color: theme.colors.disabled.text,
                background: theme.colors.disabled.background,
                cursor: 'pointer',
              },
              measure === name && {
                color: theme.colors.common.black,
              },
            ]}
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}
