import { setComponent } from '@qctoken/register';
import { MetamaskContainer } from './MetamaskContainer';
import { MetamaskContainerName } from './types';
import config from './config.json';

setComponent(MetamaskContainerName, MetamaskContainer, config);
