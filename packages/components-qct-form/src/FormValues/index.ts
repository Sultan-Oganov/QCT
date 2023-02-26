import { setComponent } from '@qctoken/register';
import { FormValues } from './FormValues';
import { FormValuesName } from './types';
import config from './config.json';

setComponent(FormValuesName, FormValues, config);
