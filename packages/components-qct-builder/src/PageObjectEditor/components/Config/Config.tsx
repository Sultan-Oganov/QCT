import { useTheme } from '@qctoken/theme';
import { Title } from '../Title/Title';
import { InputProps } from '../types';
import { ChangeEvent, useState } from 'react';

function getValue(value: any) {
  if (value === undefined || value === null) {
    return '';
  }

  switch (typeof value) {
    case 'object':
    case 'string':
    case 'number':
    case 'boolean':
      return JSON.stringify(value, null, 2);
    default:
      return '';
  }
}

export function Config(props: InputProps) {
  const { attr, onAddChangedInputs, pageObjectId } = props;
  const theme = useTheme();
  const propsValue = getValue(props.value);
  const [isError, setIsError] = useState(false);
  const [value, setValue] = useState(propsValue);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
    try {
      onAddChangedInputs(
        attr.name,
        attr.id,
        pageObjectId,
        JSON.parse(event.target.value),
      );
      setIsError(false);
    } catch (e) {
      setIsError(true);
    }
  };

  const borderColor = isError ? 'red' : theme.colors.common.stroke;

  return (
    <header
      css={{
        boxSizing: 'border-box',
        borderBottom: `1px solid ${borderColor}`,
        padding: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
      }}
    >
      <Title title={`⚠️ ${attr.name}`} />

      <textarea
        onChange={handleChange}
        css={{ width: '100%', resize: 'vertical' }}
        rows={3}
        value={value}
      ></textarea>
    </header>
  );
}
