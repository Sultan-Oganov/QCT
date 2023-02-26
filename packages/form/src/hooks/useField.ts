import { useLayoutEffect, useMemo } from 'react';
import { type FieldOptions } from '../models/Field';
import { useFormContext } from './useFormContext';

export function useField<V = string>(options: FieldOptions<V>) {
  const formStore = useFormContext();
  const field = useMemo(() => formStore.addField<V>(options), []);

  useLayoutEffect(() => {
    return () => {
      formStore.removeField(field);
    };
  }, [field]);

  return field;
}
