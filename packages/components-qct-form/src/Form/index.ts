import { setComponent } from '@qctoken/register';
import { Form } from './Form';
import { FormName } from './types';
import config from './config.json';

setComponent(FormName, Form, config);
