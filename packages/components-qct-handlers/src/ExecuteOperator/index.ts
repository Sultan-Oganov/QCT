import { setComponent } from '@qctoken/register';
import { ExecuteOperator } from './ExecuteOperator';
import { ExecuteOperatorName } from './types';
import config from './config.json';

setComponent(ExecuteOperatorName, ExecuteOperator, config);
