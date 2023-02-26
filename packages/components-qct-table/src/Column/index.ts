import { setComponent } from '@qctoken/register';
import { Column } from './Column';
import { ColumnName } from './types';
import config from './config.json';

setComponent(ColumnName, Column, config);
