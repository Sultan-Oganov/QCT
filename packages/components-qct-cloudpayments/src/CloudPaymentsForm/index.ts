import { setComponent } from '@qctoken/register';
import { CloudPaymentsForm } from './CloudPaymentsForm';
import { CloudPaymentsFormName } from './types';
import config from './config.json';

setComponent(CloudPaymentsFormName, CloudPaymentsForm, config);
