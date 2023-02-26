import { setComponent } from '@qctoken/register';
import { GetWallet } from './GetWallet';
import { GetWalletName } from './types';
import config from './config.json';

setComponent(GetWalletName, GetWallet, config);
