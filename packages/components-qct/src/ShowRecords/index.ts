import { setComponent } from '@qctoken/register';
import { ShowRecords } from './ShowRecords';
import { ShowRecordsName } from './types';
import config from './config.json';

setComponent(ShowRecordsName, ShowRecords, config);
