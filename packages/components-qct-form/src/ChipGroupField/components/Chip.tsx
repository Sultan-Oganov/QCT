import { useStyles } from './Chip.styles';

type ChipProps<V> = {
  isDisabled?: boolean;
  isSelected: boolean;
  title?: string;
  value: V;
  icon?: string;
  onChange(value: V): void;
};

export function Chip<V extends string>({
  icon,
  value,
  title,
  isSelected,
  onChange,
}: ChipProps<V>) {
  const styles = useStyles();
  return (
    <div
      css={[styles.root, isSelected && styles.rootSelected]}
      onClick={() => onChange(value)}
    >
      {icon && <img src={icon} />}
      <span title={title} css={styles.title}>
        {title}
      </span>
    </div>
  );
}
