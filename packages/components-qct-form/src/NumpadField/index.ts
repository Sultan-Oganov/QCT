import { setComponent } from '@qctoken/register';
import { NumpadField } from './NumpadField';
import { NumpadFieldName } from './types';
import config from './config.json';

setComponent(NumpadFieldName, NumpadField, config);
