import { setComponent } from '@qctoken/register';
import { Pagination } from './Pagination';
import { PaginationName } from './types';
import config from './config.json';

setComponent(PaginationName, Pagination, config);
