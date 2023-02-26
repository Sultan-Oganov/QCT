import { ClassProps } from '@qctoken/register';
import type { ComputedHiddenFieldNameType } from './types';
import { useField } from '@qctoken/form';
import { useRunExecutor } from '@qctoken/executor';
import { useEffect } from 'react';

export function ComputedHiddenField(
  props: ClassProps<ComputedHiddenFieldNameType>,
) {
  const { bc, pageStore, values } = props;

  const field = useField({
    name: bc.name,
    value: null,
  });

  const value = useRunExecutor(pageStore, bc.getComputedValue, values);

  useEffect(() => {
    field.setValue(value);
  }, [value]);

  return null;
}
