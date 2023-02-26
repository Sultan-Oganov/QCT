import { setComponent } from '@qctoken/register';
import { ProgressCircle } from './ProgressCircle';
import { ProgressCircleName } from './types';
import config from './config.json';

setComponent(ProgressCircleName, ProgressCircle, config);
