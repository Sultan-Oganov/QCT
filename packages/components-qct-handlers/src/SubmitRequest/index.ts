import { setComponent } from '@qctoken/register';
import { SubmitRequest } from './SubmitRequest';
import { SubmitRequestName } from './types';
import config from './config.json';

setComponent(SubmitRequestName, SubmitRequest, config);
