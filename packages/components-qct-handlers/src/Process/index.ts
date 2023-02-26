import { setComponent } from '@qctoken/register';
import { Process } from './Process';
import { ProcessName } from './types';
import config from './config.json';

setComponent(ProcessName, Process, config);
