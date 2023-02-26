import { ClassProps } from '@qctoken/register';
import {
  action,
  BaseStoreModel,
  computed,
  makeObservable,
  observable,
  type RequestModel,
} from '@qctoken/store';
import type { ChainName } from '../store/context';
import type { GetWalletNameType, Wallet } from './types';

export class GetWalletModel extends BaseStoreModel<GetWalletNameType> {
  declare requestStore: RequestModel<Wallet>;

  selectedAddress?: string;

  chainName?: ChainName;

  get connected() {
    if (!this.selectedAddress) {
      return false;
    }

    return this.requestStore.records.some(
      (wallet) =>
        wallet.cryptoAddress === this.selectedAddress &&
        wallet.cryptoProvider === this.chainName,
    );
  }

  constructor(props: ClassProps<GetWalletNameType>) {
    super(props);

    makeObservable(this, {
      connected: computed,
      selectedAddress: observable,
      chainName: observable,
      setSelectedAddress: action,
      setChainName: action,
    });
  }

  setSelectedAddress(address?: string) {
    this.selectedAddress = address;
  }

  setChainName(chainName?: ChainName) {
    this.chainName = chainName;
  }
}
