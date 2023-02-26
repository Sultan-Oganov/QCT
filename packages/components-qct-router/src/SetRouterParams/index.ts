import { setComponent } from '@qctoken/register';
import { SetRouterParams } from './SetRouterParams';
import { SetRouterParamsName } from './types';
import config from './config.json';

setComponent(SetRouterParamsName, SetRouterParams, config);
