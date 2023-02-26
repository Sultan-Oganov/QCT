import { ClassProps } from '@qctoken/register';
import type { FormLoaderNameType } from './types';
import { ErrorBoundaryFormLoader } from './ErrorBoundaryFormLoader';
import { Loader } from './components/Loader';

export function FormLoader(props: ClassProps<FormLoaderNameType>) {
  return (
    <ErrorBoundaryFormLoader>
      <Loader {...props} />
    </ErrorBoundaryFormLoader>
  );
}
