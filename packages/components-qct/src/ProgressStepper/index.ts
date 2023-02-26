import { setComponent } from '@qctoken/register';
import { ProgressStepper } from './ProgressStepper';
import { ProgressStepperName } from './types';
import config from './config.json';

setComponent(ProgressStepperName, ProgressStepper, config);
