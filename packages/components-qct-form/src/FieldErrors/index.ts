import { setComponent } from '@qctoken/register';
import { FieldErrors } from './FieldErrors';
import { FieldErrorsName } from './types';
import config from './config.json';

setComponent(FieldErrorsName, FieldErrors, config);
