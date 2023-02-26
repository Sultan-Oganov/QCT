import { useField, useFieldProps } from '@qctoken/form';
import { mapComponents } from '@qctoken/register';
import type { ClassProps } from '@qctoken/register/lib/types';
import type { PressSelectValueNameType } from './types';
import selectAccept from './assets/select-accept.png';
import { useStyles } from './PressSelectValue.styles';

export function PressSelectValue(props: ClassProps<PressSelectValueNameType>) {
  const { bc, disabled = false } = props;
  const field = useField<string | undefined>({
    name: bc.name,
    value: undefined,
  });
  const [value] = useFieldProps(field);
  const isSelected = value === bc.value;
  const styles = useStyles(disabled, isSelected);
  const handleClick = () => {
    if (!disabled) {
      field.setValue(bc.value);
    }
  };

  return (
    <div css={styles.root} onClick={handleClick}>
      {isSelected && (
        <img
          css={{
            position: 'absolute',
            top: -18,
            left: -12,
            opacity: disabled ? 0.5 : 1,
          }}
          src={selectAccept}
        />
      )}
      {mapComponents(bc.childs, props)}
    </div>
  );
}
