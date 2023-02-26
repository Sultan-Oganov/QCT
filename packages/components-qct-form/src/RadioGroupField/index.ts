import { setComponent } from '@qctoken/register';
import { RadioGroupField } from './RadioGroupField';
import { RadioGroupFieldName } from './types';
import config from './config.json';

setComponent(RadioGroupFieldName, RadioGroupField, config);
