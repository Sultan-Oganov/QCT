import { setComponent } from '@qctoken/register';
import { ComputedHiddenFieldName } from './types';
import config from './config.json';
import { ComputedHiddenField } from './ComputedHiddenField';

setComponent(ComputedHiddenFieldName, ComputedHiddenField, config);
