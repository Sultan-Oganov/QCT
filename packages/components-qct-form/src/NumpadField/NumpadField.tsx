import { useMemo, ChangeEvent, useRef } from 'react';
import { useField } from '@qctoken/form';
import { ClassProps } from '@qctoken/register';
import { observer } from '@qctoken/store';
import type { NumpadFieldNameType } from './types';
import { useStyles } from './NumpadField.styles';

export const NumpadField = observer(function NumpadField(
  props: ClassProps<NumpadFieldNameType>,
) {
  const { bc } = props;
  const field = useField({ name: bc.name, value: '' });
  const styles = useStyles();
  const numerOfInputs = 6;
  const refs = useRef<HTMLInputElement[] | null[]>([]);
  const keyCodeBackSpace = 8;

  const handleDetectFocus = () => {
    if (field.value.length === 0) {
      return refs.current[0];
    } else if (field.value.length === numerOfInputs) {
      return refs.current[numerOfInputs - 1];
    }
    //detect empty input field
    return refs.current[field.value.length];
  };

  const handleСhange = (event: ChangeEvent<HTMLInputElement>) => {
    const { maxLength, value } = event.target;
    if (field.value.length > numerOfInputs - 1) {
      return;
    }
    if (value.length === maxLength) {
      field.setValue(field.value + value);
      handleDetectFocus()?.focus();
    }
  };
  const handleСhangeButton = (digit: string) => {
    if (field.value.length > numerOfInputs - 1) {
      return;
    }
    field.setValue(field.value + digit);
  };
  const handleRemove = (type?: 'physical') => {
    if (type === 'physical') {
      handleDetectFocus()?.focus();
    }
    field.setValue(field.value.slice(0, -1));
  };
  const blocks = useMemo(() => Array(6).fill(null), []);
  const digits = useMemo(() => {
    return ['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0'].map((el) => {
      return el ? (
        <button
          key={el}
          css={styles.btn}
          onClick={() => handleСhangeButton(el)}
        >
          {el}
        </button>
      ) : (
        <div></div>
      );
    });
  }, [field.value]);

  return (
    <div>
      <div css={styles.row}>
        {blocks.map((_, i) => (
          <input
            css={[styles.block, field.value[i] && styles.activeBlock]}
            ref={(element) => {
              refs.current[i] = element;
            }}
            key={i}
            type="number"
            value={field.value[i] || ''}
            maxLength={1}
            onChange={handleСhange}
            name={field.name}
            onKeyUp={(event) =>
              event.keyCode === keyCodeBackSpace
                ? handleRemove('physical')
                : null
            }
          />
        ))}
      </div>
      <div css={styles.container}>
        {digits}

        <button onClick={() => handleRemove()} css={styles.btn}>
          &#9003;
        </button>
      </div>
    </div>
  );
});
