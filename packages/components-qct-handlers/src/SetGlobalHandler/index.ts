import { setComponent } from '@qctoken/register';
import { SetGlobalHandler } from './SetGlobalHandler';
import { SetGlobalHandlerName } from './types';
import config from './config.json';

setComponent(SetGlobalHandlerName, SetGlobalHandler, config);
