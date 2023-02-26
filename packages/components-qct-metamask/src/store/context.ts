import { createContext } from 'react';
import { ethers } from 'ethers';

type EthereumRequestType = {
  method: 'eth_requestAccounts';
};

export enum ChainName {
  ETHER_MAINNET = 'ether_mainnet',
  BSC_MAINNET = 'bsc_mainnet',
  ETHER_TEST_GOERLI = 'ether_test_goerli',
  ETHER_TEST_SEPOLIA = 'ether_test_sepolia',
  BSC_TESTNET = 'bsc_testnet',
}

export type EthereumContextType = {
  isConnected: boolean;
  web3Provider: ethers.providers.Web3Provider;
  getChainName: () => ChainName | undefined;
  getAddress: () => string | undefined;
  request(options: EthereumRequestType): Promise<any>;
};

export const EthereumContext = createContext<EthereumContextType | undefined>(
  undefined,
);
