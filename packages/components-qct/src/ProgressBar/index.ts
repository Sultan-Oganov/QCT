import { setComponent } from '@qctoken/register';
import { ProgressBar } from './ProgressBar';
import { ProgressBarName } from './types';
import config from './config.json';

setComponent(ProgressBarName, ProgressBar, config);
