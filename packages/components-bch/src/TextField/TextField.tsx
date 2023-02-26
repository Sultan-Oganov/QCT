import { useField, useFieldProps } from '@qctoken/form';
import type { ClassProps } from '@qctoken/register';
import { useRunExecutor } from '@qctoken/executor';
import type { TextFieldNameType } from './types';
import { useStyles } from './TextField.styles';

export function TextField(props: ClassProps<TextFieldNameType>) {
  const { bc, pageStore, values } = props;
  const disabled = bc.disabled || props.disabled;
  const styles = useStyles();
  const field = useField({ name: bc.name, value: '' });
  const placeholder = useRunExecutor(pageStore, bc.placeholder, values);
  const label = useRunExecutor(pageStore, bc.label, values);
  const [value, inputProps, { errors }] = useFieldProps<string>(field);
  const isError = errors.length > 0;

  return (
    <div css={styles.root}>
      <label css={styles.root}>
        <span css={styles.label}>{label}</span>
        <input
          disabled={disabled}
          css={[
            styles.input,
            isError && styles.inputError,
            disabled && styles.inputDisabled,
          ]}
          type={bc.htmlType}
          value={value}
          placeholder={placeholder}
          {...inputProps}
        />
      </label>
      <div
        title={isError ? errors[0].msg : undefined}
        css={[styles.helper, isError && styles.helperError]}
      >
        {isError && `* ${pageStore.translate(errors[0].msg)}`}
      </div>
    </div>
  );
}
