import { ClassProps } from '@qctoken/register';
import {
  observer,
  useGlobalQueryParams,
  useSetGlobal,
  useModel,
  reaction,
} from '@qctoken/store';
import { RadioGroupFieldModel } from './RadioGroupFieldModel';
import type { RadioGroupFieldNameType } from './types';
import { useEffect } from 'react';
import { useField } from '@qctoken/form';
import { RadioItem } from './components/RadioItem';

type V = string | number | undefined;

export const RadioGroupField = observer(function RadioGroupField(
  props: ClassProps<RadioGroupFieldNameType>,
) {
  const { bc, pageStore } = props;
  const [store] = useModel(RadioGroupFieldModel, props);
  const field = useField<V>({
    name: bc.name,
    value: undefined,
  });

  useSetGlobal(pageStore, field.value, bc.setglobal);
  useGlobalQueryParams(store, props.pageStore, bc.queryParams);

  const handleChange = (value: V) => {
    field.setValue(value);
  };

  useEffect(
    () =>
      reaction(
        () => store.requestStore.record,
        (record) => {
          if (field.value === '' && bc.valueName) {
            field.setValue(record[bc.valueName]);
          }
        },
      ),
    [],
  );

  const elements = store.requestStore.records.map((record, index) => {
    const itemValue = bc.valueName && record[bc.valueName];

    return (
      <RadioItem
        key={index}
        name={bc.name}
        title={bc.displayName && record[bc.displayName]}
        isSelected={itemValue === field.value}
        value={itemValue}
        onChange={() => handleChange(itemValue)}
      />
    );
  });

  return (
    <>
      {bc.showAll && (
        <RadioItem
          name={bc.name}
          title={pageStore.translate('All')}
          isSelected={undefined === field.value}
          value={undefined}
          onChange={() => field.setValue(undefined)}
        />
      )}
      {elements}
    </>
  );
});
