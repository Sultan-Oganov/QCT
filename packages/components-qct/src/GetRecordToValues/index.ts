import { setComponent } from '@qctoken/register';
import { GetRecordToValues } from './GetRecordToValues';
import { GetRecordToValuesName } from './types';
import config from './config.json';

setComponent(GetRecordToValuesName, GetRecordToValues, config);
