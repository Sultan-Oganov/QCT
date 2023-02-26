import { ClassProps, mapComponentOne } from '@qctoken/register';
import { useModel, observer } from '@qctoken/store';
import { GetWalletNameType } from './types';
import { useStyles } from './GetWallet.styles';
import { GetWalletModel } from './GetWalletModel';
import { useEthereum } from '../store/hooks/useEthereum';
import { useEffect } from 'react';

export const GetWallet = observer(function GetWallet(
  props: ClassProps<GetWalletNameType>,
) {
  const { bc, pageStore } = props;
  const [store] = useModel(GetWalletModel, props);
  const styles = useStyles();
  const ethereum = useEthereum();
  const selectedAddress = ethereum.getAddress();
  const chainName = ethereum.getChainName();

  useEffect(() => {
    if (selectedAddress && bc.query) {
      store.requestStore.get({ selectedAddress });
    }
  }, [selectedAddress]);

  useEffect(() => {
    store.setSelectedAddress(selectedAddress);
    store.setChainName(chainName);
  }, [selectedAddress, chainName]);

  async function handleConnectWallet() {
    try {
      if (!ethereum.getAddress()) {
        await ethereum.request({
          method: 'eth_requestAccounts',
        });
      }
      const signer = ethereum.web3Provider.getSigner();
      const data = {
        cryptoAddress: ethereum.getAddress(),
        cryptoProvider: ethereum.getChainName(),
      };
      const message = `cryptoAddress=${data.cryptoAddress};cryptoProvider=${data.cryptoProvider}`;
      const signature = await signer.signMessage(message);

      await store.requestStore.post(
        JSON.stringify({
          ...data,
          signature,
        }),
        {
          url: bc.submitPostQuery,
        },
      );
    } catch (e) {}

    if (store.requestStore.isError && bc.onError) {
      pageStore.invokeHandler(bc.onError, {
        values: store.requestStore.errorResponse.detail,
      });
    }

    if (bc.onRefresh && pageStore.requestCache) {
      pageStore.requestCache.invalidCache(bc.onRefresh);
    }
  }

  return (
    <div css={styles.root}>
      {store.requestStore.isLoading && '...Loading'}
      {!store.requestStore.isLoading && store.connected && (
        <div css={styles.connected}>
          <p css={styles.connectedText}>
            Для перепривязки кошелька вам необходимо отвязать существующий в
            Metamask.
          </p>
          {bc.iconButton && mapComponentOne(bc.iconButton, props)}
        </div>
      )}
      {!store.requestStore.isLoading && !store.connected && (
        <button
          title={pageStore.translate('Connect')}
          css={[styles.btn, store.requestStore.isLoading && styles.btnDisabled]}
          onClick={handleConnectWallet}
          disabled={store.requestStore.isLoading}
        >
          {bc.icon && mapComponentOne(bc.icon, props)}
          {pageStore.translate('Connect')}
        </button>
      )}
    </div>
  );
});
