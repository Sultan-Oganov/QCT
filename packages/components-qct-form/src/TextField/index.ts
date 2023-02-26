import { setComponent } from '@qctoken/register';
import { TextField } from './TextField';
import { TextFieldName } from './types';
import config from './config.json';

setComponent(TextFieldName, TextField, config);
