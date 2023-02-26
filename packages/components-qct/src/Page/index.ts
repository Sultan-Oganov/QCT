import { setComponent } from '@qctoken/register';
import { Page } from './Page';
import { PageName } from './types';
import config from './config.json';

setComponent(PageName, Page, config);
