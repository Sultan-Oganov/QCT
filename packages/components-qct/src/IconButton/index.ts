import { setComponent } from '@qctoken/register';
import { IconButton } from './IconButton';
import { IconButtonName } from './types';
import config from './config.json';

setComponent(IconButtonName, IconButton, config);
