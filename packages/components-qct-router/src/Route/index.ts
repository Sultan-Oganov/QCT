import { setComponent } from '@qctoken/register';
import { Route } from './Route';
import { RouteName } from './types';
import config from './config.json';

setComponent(RouteName, Route, config);
