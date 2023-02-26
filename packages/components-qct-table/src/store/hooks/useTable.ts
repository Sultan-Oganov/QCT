import { useContext } from 'react';
import { TableContext } from '../context';

export function useTable(): any {
  const table = useContext(TableContext);

  if (!table) {
    throw Error('Need to wrap with `Table`');
  }

  return table;
}
