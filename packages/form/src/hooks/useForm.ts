import { useModel } from '@qctoken/store';
import { type ClassProps } from '@qctoken/register';
import { Form, type FormOptions } from '../models/Form';

export function useForm(props: ClassProps<string>, options: FormOptions = {}) {
  const { parentKey = '' } = props;
  const localProps = { ...props, parentKey: `${parentKey}.form` };
  const [formStore] = useModel(
    Form,
    localProps,
    () => new Form(localProps, options),
  );

  return formStore;
}
