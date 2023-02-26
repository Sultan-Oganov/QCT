import { reaction } from '@qctoken/store';
import { useEffect, useState } from 'react';
import { useFormContext } from './useFormContext';

export function useExistingField(name: string) {
  const formStore = useFormContext();
  const [field, setField] = useState(() => formStore.getField(name));

  useEffect(() => {
    return reaction(() => formStore.getField(name), setField, {
      fireImmediately: true,
    });
  }, [name]);

  return field;
}
