import { setComponent } from '@qctoken/register';
import { TextArea } from './TextArea';
import { TextAreaName } from './types';
import config from './config.json';

setComponent(TextAreaName, TextArea, config);
