import type { ChangeEvent } from 'react';
import { useStyles } from './RadioItem.styles';

type Props = {
  name?: string;
  title?: string;
  value?: string;
  isSelected: boolean;
  onChange(event: ChangeEvent<HTMLInputElement>): void;
};

export function RadioItem({ title, name, value, isSelected, onChange }: Props) {
  const styles = useStyles();

  return (
    <label title={title} css={styles.label}>
      <input
        css={styles.radio}
        checked={isSelected}
        type="radio"
        name={name}
        value={value}
        onChange={onChange}
      />
      <p css={styles.name}>{title}</p>
    </label>
  );
}
