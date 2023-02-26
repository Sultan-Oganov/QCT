import { setComponent } from '@qctoken/register';
import { BreadCrumbs } from './BreadCrumbs';
import { BreadCrumbsName } from './types';
import config from './config.json';

setComponent(BreadCrumbsName, BreadCrumbs, config);
