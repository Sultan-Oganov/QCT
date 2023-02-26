import { setComponent } from '@qctoken/register';
import { Window } from './Window';
import { WindowName } from './types';
import config from './config.json';

setComponent(WindowName, Window, config);
