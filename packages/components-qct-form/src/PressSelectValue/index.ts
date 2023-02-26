import { setComponent } from '@qctoken/register';
import { PressSelectValue } from './PressSelectValue';
import { PressSelectValueName } from './types';
import config from './config.json';

setComponent(PressSelectValueName, PressSelectValue, config);
