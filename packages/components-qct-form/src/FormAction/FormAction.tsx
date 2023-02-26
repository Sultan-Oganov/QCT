import { ClassProps, mapComponents } from '@qctoken/register';
import { FormActionNameType } from './types';
import { useFormContext } from '@qctoken/form';
import { Observer } from '@qctoken/store';

export function FormAction(props: ClassProps<FormActionNameType>) {
  const { bc } = props;
  const form = useFormContext();

  if (!bc.childs) {
    return null;
  }

  return (
    <Observer
      render={() => (
        <>
          {mapComponents(bc.childs, {
            ...props,
            disabled: !form.isDirty || form.hasFieldErrors,
          })}
        </>
      )}
    />
  );
}
