import { useContext } from 'react';
import { FormContext } from '../context';

export function useFormContext() {
  const formStore = useContext(FormContext);

  if (!formStore) {
    throw Error('You should pass context for use fields');
  }

  return formStore;
}
