import { setComponent } from '@qctoken/register';
import { Button } from './Button';
import { ButtonName } from './types';
import config from './config.json';

setComponent(ButtonName, Button, config);
