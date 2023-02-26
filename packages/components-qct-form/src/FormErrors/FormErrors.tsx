import { observer } from '@qctoken/store';
import { useFormContext } from '@qctoken/form';
import { ClassProps } from '@qctoken/register';
import { type Colors, useThemeColorsPlain } from '@qctoken/theme';
import type { FormErrorsNameType } from './types';

export const FormErrors = observer(function FormErrors({
  bc,
  pageStore,
}: ClassProps<FormErrorsNameType>) {
  const form = useFormContext();
  const colors: Colors = useThemeColorsPlain();

  if (form.isValid || form.formErrors.length === 0) {
    return null;
  }

  return (
    <div css={{ overflow: 'auto', color: bc.color && colors[bc.color] }}>
      {form.formErrors.map((error, idx) => (
        <p key={idx}>
          {error.name === 'common' ? null : (
            <span>{pageStore.translate(error.name)}: </span>
          )}
          {pageStore.translate(error.message)}
        </p>
      ))}
    </div>
  );
});
