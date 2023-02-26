import { useState, ChangeEvent } from 'react';
import { Title } from '../Title/Title';
import { InputProps } from '../types';
import { useStyles } from './Text.styles';

export function Text(props: InputProps) {
  const { attr, onAddChangedInputs, pageObjectId, control } = props;
  const styles = useStyles();
  const [value, setValue] = useState(props.value);
  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { value: inputValue } = event.currentTarget;
    const newValue =
      control === 'number' ? parseFloat(inputValue || '0') : inputValue;

    setValue(inputValue);
    onAddChangedInputs(attr.name, attr.id, pageObjectId, newValue);
  };

  return (
    <div css={styles.root}>
      <Title title={attr.name} />
      {control === 'textarea' ? (
        <textarea css={styles.input} onChange={handleChange}>
          {value}
        </textarea>
      ) : (
        <input
          css={styles.input}
          value={value}
          type={control}
          step={0.1}
          onChange={handleChange}
        />
      )}
    </div>
  );
}
