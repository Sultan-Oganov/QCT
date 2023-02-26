import { setComponent } from '@qctoken/register';
import { Checkbox } from './Checkbox';
import { CheckboxName } from './types';
import config from './config.json';

setComponent(CheckboxName, Checkbox, config);
