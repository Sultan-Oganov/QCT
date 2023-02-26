import { setComponent } from '@qctoken/register';
import { GoBack } from './GoBack';
import { GoBackName } from './types';
import config from './config.json';

setComponent(GoBackName, GoBack, config);
