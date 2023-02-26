import { setComponent } from '@qctoken/register';
import { RunOnMount } from './RunOnMount';
import { RunOnMountName } from './types';
import config from './config.json';

setComponent(RunOnMountName, RunOnMount, config);
