import { setComponent } from '@qctoken/register';
import { Hidden } from './Hidden';
import { HiddenName } from './types';
import config from './config.json';

setComponent(HiddenName, Hidden, config);
