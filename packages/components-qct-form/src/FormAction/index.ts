import { setComponent } from '@qctoken/register';
import { FormAction } from './FormAction';
import { FormActionName } from './types';
import config from './config.json';

setComponent(FormActionName, FormAction, config);
