import { observer } from '@qctoken/store';
import { useFormContext } from '@qctoken/form';
import { ClassProps } from '@qctoken/register';
import type { FieldErrorsNameType } from './types';
import { useStyles } from './FieldErrors.styles';

export const FieldErrors = observer(function FieldErrors({
  bc,
  pageStore,
}: ClassProps<FieldErrorsNameType>) {
  const formStore = useFormContext();
  const field = formStore.getField(bc.name);
  const styles = useStyles(bc);

  if (!field || field.isValid) {
    return null;
  }

  return (
    <div css={styles.root}>
      {field.errors.map((error, idx) => {
        const msg = bc.errorsMap
          ? bc.errorsMap[error.msg] ?? error.msg
          : error.msg;

        return (
          <div css={styles.error} key={idx} title={msg}>
            * {pageStore.translate(msg)}
          </div>
        );
      })}
    </div>
  );
});
