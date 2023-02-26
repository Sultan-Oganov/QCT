import { ChangeEvent, useState, useEffect } from 'react';
import { type FieldError, type Field } from '../models/Field';
import { reaction } from '@qctoken/store';

type FieldOptions<V, IE> = {
  parse?: (event: ChangeEvent<IE>, value: V) => V;
};

type FieldInputProps<IE> = {
  name: string;
  onChange(event: ChangeEvent<IE>): void;
};

type FieldInputOptions = {
  errors: FieldError[];
};

export function useFieldProps<
  V = string,
  IE extends { value: string } = HTMLInputElement | HTMLTextAreaElement,
>(
  field: Field<V>,
  options: FieldOptions<V, IE> = {},
): [V, FieldInputProps<IE>, FieldInputOptions] {
  const [value, setValue] = useState(field.value);
  const [errors, setErrors] = useState(field.errors);
  const handleChange = (event: ChangeEvent<IE>) => {
    const newValue = options.parse
      ? options.parse(event, value)
      : (event.currentTarget.value as any as V);

    field.setValue(newValue);
  };

  useEffect(
    () => reaction(() => field.value, setValue, { fireImmediately: true }),
    [field],
  );
  useEffect(() => reaction(() => field.errors, setErrors), [field]);

  return [value, { name: field.name, onChange: handleChange }, { errors }];
}
