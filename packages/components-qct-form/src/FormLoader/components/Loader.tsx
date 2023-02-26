import { observer } from '@qctoken/store';
import { useFormContext } from '@qctoken/form';
import { ClassProps, makeBC, mapComponentOne } from '@qctoken/register';
import type { FormLoaderNameType } from '../types';
import { useStyles } from '../FormLoader.styles';

function LoaderBase(props: ClassProps<FormLoaderNameType>) {
  const formStore = useFormContext();
  const styles = useStyles();

  if (formStore.isSubmitting) {
    return (
      <div css={styles.root}>
        {mapComponentOne(
          makeBC('QCT.STATIC.LOADER', {
            pageObjectId: 'loader',
            objectId: 'loader',
            // @ts-ignore
            size: '100%',
            color: props.bc.color,
          }),
          props,
        )}
      </div>
    );
  }
  return null;
}

export const Loader = observer(LoaderBase);
