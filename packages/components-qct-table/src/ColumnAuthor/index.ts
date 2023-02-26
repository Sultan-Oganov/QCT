import { setComponent } from '@qctoken/register';
import { ColumnAuthor } from './ColumnAuthor';
import { ColumnAuthorName } from './types';
import config from './config.json';

setComponent(ColumnAuthorName, ColumnAuthor, config);
