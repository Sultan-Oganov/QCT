import { ClassProps, mapComponents } from '@qctoken/register';
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import {
  ChainName,
  EthereumContext,
  type EthereumContextType,
} from '../store/context';
import { useStyles } from './MetamaskContainer.styles';
import { MetamaskContainerNameType } from './types';

type WindowEthereum = Window &
  typeof globalThis & {
    ethereum?: any;
  };

const ETHEREUM_CHAIN_ID = {
  '0x1': ChainName.ETHER_MAINNET,
  '0x5': ChainName.ETHER_TEST_GOERLI,
  '0xaa36a7': ChainName.ETHER_TEST_SEPOLIA,
  '0x61': ChainName.BSC_TESTNET,
  '0x38': ChainName.BSC_MAINNET,
};

function makeProvider(): EthereumContextType | undefined {
  const { ethereum } = window as WindowEthereum;

  if (!ethereum) {
    return undefined;
  }

  return {
    request: ethereum.request,
    isConnected: ethereum.isConnected(),
    web3Provider: new ethers.providers.Web3Provider(ethereum),
    getAddress: () => ethereum.selectedAddress,
    getChainName: () =>
      ETHEREUM_CHAIN_ID[ethereum.chainId as keyof typeof ETHEREUM_CHAIN_ID],
  };
}

export function MetamaskContainer(
  props: ClassProps<MetamaskContainerNameType>,
) {
  const { bc, pageStore } = props;
  const styles = useStyles();
  const [provider, setProvider] = useState(makeProvider);

  useEffect(() => {
    const { ethereum } = window as WindowEthereum;
    const handleChangeProvider = () => {
      setProvider(makeProvider());
    };

    if (!ethereum) {
      return;
    }

    ethereum.on('accountsChanged', handleChangeProvider);
    ethereum.on('chainChanged', handleChangeProvider);
    ethereum.on('connect', handleChangeProvider);
    ethereum.on('disconnect', handleChangeProvider);

    return () => {
      ethereum.removeListener('accountsChanged', handleChangeProvider);
      ethereum.removeListener('chainChanged', handleChangeProvider);
      ethereum.removeListener('connect', handleChangeProvider);
      ethereum.removeListener('disconnect', handleChangeProvider);
    };
  }, []);

  if (!provider) {
    return (
      <div css={styles.root}>
        <p
          css={styles.notFound}
          title={pageStore.translate('Need to install Metamask')}
        >
          | {pageStore.translate('Need to install Metamask')}
        </p>
      </div>
    );
  }

  if (!provider.getChainName()) {
    return <p css={styles.notFound}>Сеть не поддерживается</p>;
  }

  return (
    <EthereumContext.Provider value={provider}>
      {mapComponents(bc.childs, props)}
    </EthereumContext.Provider>
  );
}
