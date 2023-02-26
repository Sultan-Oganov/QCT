import { setComponent } from '@qctoken/register';
import { Metamask } from './Metamask';
import { MetamaskName } from './types';
import config from './config.json';

setComponent(MetamaskName, Metamask, config);
