import { ClassProps } from '@qctoken/register';
import {
  observer,
  useGlobalQueryParams,
  useSetGlobal,
  useModel,
} from '@qctoken/store';
import { ChipGroupFieldModel } from './ChipGroupFieldModel';
import type { ChipGroupFieldNameType } from './types';
import { useField } from '@qctoken/form';
import { Chip } from './components/Chip';

function ChipGroupFieldBase(props: ClassProps<ChipGroupFieldNameType>) {
  const { bc, pageStore } = props;
  const [store] = useModel(ChipGroupFieldModel, props);
  const field = useField<string[]>({
    name: bc.name,
    value: [],
  });

  useSetGlobal(pageStore, field.value, bc.setGlobal);
  useGlobalQueryParams(store, props.pageStore, bc.queryParams);

  const handleChange = (newValue: string) => {
    const hasValue = field.value.includes(newValue);
    const newValues = hasValue
      ? field.value.filter((val) => val !== newValue)
      : [...field.value, newValue];

    field.setValue(newValues);
  };
  const elements = store.requestStore.records.map(
    (record: Record<string, unknown>, index) => {
      const recordValue = bc.valueName && (record[bc.valueName] as string);
      const isSelected = recordValue
        ? field.value.includes(recordValue)
        : false;

      if (!recordValue) {
        return null;
      }

      return (
        <Chip
          key={index}
          isSelected={isSelected}
          isDisabled={props.disabled || props.readOnly}
          title={bc.displayName && (record[bc.displayName] as string)}
          value={recordValue}
          icon={bc.iconName && (record[bc.iconName] as string)}
          onChange={handleChange}
        />
      );
    },
  );

  return <>{elements}</>;
}

export const ChipGroupField = observer(ChipGroupFieldBase);
