import { setComponent } from '@qctoken/register';
import { SelectField } from './SelectField';
import { SelectFieldName } from './types';
import config from './config.json';

setComponent(SelectFieldName, SelectField, config);
