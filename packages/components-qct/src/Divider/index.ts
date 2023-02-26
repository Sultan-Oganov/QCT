import { setComponent } from '@qctoken/register';
import { Divider } from './Divider';
import { DividerName } from './types';
import config from './config.json';

setComponent(DividerName, Divider, config);
