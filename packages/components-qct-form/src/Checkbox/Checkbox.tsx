import { useRunExecutor } from '@qctoken/executor';
import { useField, useFieldProps } from '@qctoken/form';
import type { ClassProps } from '@qctoken/register';
import type { CheckboxNameType } from './types';
import { classNames, useStyles } from './Checkbox.styles';

type ValueType = unknown[] | boolean | undefined;
const isChecked = (value: ValueType, key: unknown) => {
  return Array.isArray(value) ? value.includes(key) : !!value;
};

export function Checkbox(props: ClassProps<CheckboxNameType>) {
  const { bc, pageStore, values } = props;
  const styles = useStyles();
  const field = useField<ValueType>({
    name: bc.name,
    value: bc.variant === 'multi' ? [] : false,
  });
  const label = useRunExecutor(pageStore, bc.label, values);
  const key = useRunExecutor(pageStore, bc.value, values);
  const [value, inputProps] = useFieldProps<ValueType, HTMLInputElement>(
    field,
    {
      parse: (event, inputValue) => {
        const { checked } = event.currentTarget;

        if (!Array.isArray(inputValue)) {
          return checked;
        }

        if (checked) {
          return [...inputValue, key];
        }

        return inputValue.filter((v) => v !== key);
      },
    },
  );

  return (
    <label css={styles.root} className={classNames.root}>
      <input
        css={styles.input}
        className={classNames.input}
        type="checkbox"
        checked={isChecked(value, key)}
        {...inputProps}
      />
      <span css={styles.checkmark} className={classNames.checkmark} />
      <span css={styles.label}>{label}</span>
    </label>
  );
}
