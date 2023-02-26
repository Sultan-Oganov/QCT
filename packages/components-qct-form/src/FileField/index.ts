import { setComponent } from '@qctoken/register';
import { FileField } from './FileField';
import { FileFieldName } from './types';
import config from './config.json';

setComponent(FileFieldName, FileField, config);
