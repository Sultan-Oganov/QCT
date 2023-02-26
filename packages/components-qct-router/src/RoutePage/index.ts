import { setComponent } from '@qctoken/register';
import { RoutePage } from './RoutePage';
import { RoutePageName } from './types';
import config from './config.json';

setComponent(RoutePageName, RoutePage, config);
