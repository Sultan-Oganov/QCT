import { setComponent } from '@qctoken/register';
import { Invoke } from './Invoke';
import { InvokeName } from './types';
import config from './config.json';

setComponent(InvokeName, Invoke, config);
