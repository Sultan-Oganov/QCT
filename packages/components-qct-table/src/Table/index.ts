import { setComponent } from '@qctoken/register';
import { Table } from './Table';
import { TableName } from './types';
import config from './config.json';

setComponent(TableName, Table, config);
