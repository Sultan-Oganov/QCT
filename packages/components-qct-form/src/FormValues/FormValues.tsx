import { useMemo } from 'react';
import { observer } from '@qctoken/store';
import { useFormContext } from '@qctoken/form';
import { ClassProps, mapComponents } from '@qctoken/register';
import type { FormValuesNameType } from './types';

function FormValuesBase(props: ClassProps<FormValuesNameType>) {
  const {
    bc: { names },
  } = props;
  const form = useFormContext();
  const deps = Array.isArray(names)
    ? names.map((name) => form.values[name])
    : [form.values];

  const values = useMemo(() => {
    if (!Array.isArray(names)) {
      return form.values;
    }

    return Object.fromEntries(names.map((name, idx) => [name, deps[idx]]));
  }, deps);

  return <>{mapComponents(props.bc.childs, { ...props, values })}</>;
}

export const FormValues = observer(FormValuesBase);
