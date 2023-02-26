import { setComponent } from '@qctoken/register';
import { Disable } from './Disable';
import { DisableName } from './types';
import config from './config.json';

setComponent(DisableName, Disable, config);
