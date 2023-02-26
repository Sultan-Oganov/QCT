import { useState } from 'react';
import { ClassProps } from '@qctoken/register';
import balanceOfABI from './abi';
import { ethers } from 'ethers';
import { MetamaskNameType } from './types';
import { useStyles } from './Metamask.styles';
import { useEthereum } from '../store/hooks/useEthereum';

export function Metamask({ bc, pageStore }: ClassProps<MetamaskNameType>) {
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  const styles = useStyles();
  const ethereum = useEthereum();

  async function connectWallet() {
    try {
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });
      setAccount(accounts[0]);
    } catch (e) {}
  }

  async function getTokenBalance() {
    if (!bc.tokenContract) {
      return;
    }

    try {
      const contract = new ethers.Contract(
        bc.tokenContract,
        balanceOfABI,
        ethereum.web3Provider,
      );
      const result = await contract.balanceOf(ethereum.getAddress());
      setBalance(result);
    } catch (e) {}
  }

  return (
    <div css={styles.root}>
      {!ethereum.getAddress() && !account ? (
        <button
          title={pageStore.translate('Connect wallet')}
          css={styles.btn}
          onClick={connectWallet}
        >
          {pageStore.translate('Connect wallet')}
        </button>
      ) : (
        <div>
          {!balance ? (
            <button css={styles.btn} onClick={getTokenBalance}>
              {pageStore.translate('Get balance')}
            </button>
          ) : (
            <span css={styles.balance}>
              | {ethers.BigNumber.from(balance).toNumber()} token
            </span>
          )}
        </div>
      )}
    </div>
  );
}
