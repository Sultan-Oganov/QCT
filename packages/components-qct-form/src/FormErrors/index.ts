import { setComponent } from '@qctoken/register';
import { FormErrors } from './FormErrors';
import { FormErrorsName } from './types';
import config from './config.json';

setComponent(FormErrorsName, FormErrors, config);
