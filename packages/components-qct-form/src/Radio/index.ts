import { setComponent } from '@qctoken/register';
import { Radio } from './Radio';
import { RadioName } from './types';
import config from './config.json';

setComponent(RadioName, Radio, config);
