import { setComponent } from '@qctoken/register';
import { GroupObjectField } from './GroupObjectField';
import { GroupObjectFieldName } from './types';
import config from './config.json';

setComponent(GroupObjectFieldName, GroupObjectField, config);
