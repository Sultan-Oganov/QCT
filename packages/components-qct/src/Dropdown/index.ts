import { setComponent } from '@qctoken/register';
import { Dropdown } from './Dropdown';
import { DropdownName } from './types';
import config from './config.json';

setComponent(DropdownName, Dropdown, config);
