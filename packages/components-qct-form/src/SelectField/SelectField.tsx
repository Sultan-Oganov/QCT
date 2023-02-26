import { useField, useFieldProps } from '@qctoken/form';
import { ClassProps } from '@qctoken/register';
import type { SelectFieldNameType } from './types';
import { observer, useGlobalQueryParams, useModel } from '@qctoken/store';
import { useStyles } from './SelectField.styles';
import { useTheme } from '@qctoken/theme';
import { SelectFieldModel } from './SelectFieldModel';
import { ChangeEvent } from 'react';

export const SelectField = observer(function SelectField(
  props: ClassProps<SelectFieldNameType>,
) {
  const { bc, pageStore } = props;
  const { displayField = '', valueField = '' } = bc;
  const [store] = useModel(SelectFieldModel, props);
  const field = useField({ name: bc.name, value: '' });
  const [value] = useFieldProps<string>(field);
  const theme = useTheme();
  const styles = useStyles();

  useGlobalQueryParams(store, pageStore, bc.queryParams);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    field.setValue(event.currentTarget.value);
  };

  return (
    <div
      css={{
        display: 'flex',
        width: '100%',
        minWidth: 0,
        flexDirection: 'column',
      }}
    >
      <label
        css={[
          styles.label,
          bc.disabled && {
            '& select': { backgroundColor: theme.colors.disabled.background },
          },
        ]}
      >
        <select disabled={bc.disabled} onChange={handleChange} value={value}>
          <option value="" disabled selected={value === null || value === ''}>
            {bc.label}
          </option>

          {(bc.chooses || store.requestStore.records).map(
            (choose, idx: number) => (
              <option key={idx} value={choose[valueField] as string}>
                {choose[displayField] as string}
              </option>
            ),
          )}
        </select>
      </label>

      <div
        title={
          field.errors.length > 0
            ? pageStore.translate(field.errors[0].msg)
            : undefined
        }
        css={{
          minHeight: 24,
          height: 24,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          color: theme.colors.text.error,
          padding: theme.spacing(0, 0, 0, 3),
          fontSize: 12,
          boxSizing: 'border-box',
          lineHeight: '24px',
        }}
      >
        {field.errors.length > 0 &&
          `* ${pageStore.translate(field.errors[0].msg)}`}
      </div>
    </div>
  );
});
