import { useContext } from 'react';
import { EthereumContext, type EthereumContextType } from '../context';

export function useEthereum(): EthereumContextType {
  const ethereum = useContext(EthereumContext);

  if (!ethereum) {
    throw Error('Need to wrap with `MetamaskContainer`');
  }

  return ethereum;
}
