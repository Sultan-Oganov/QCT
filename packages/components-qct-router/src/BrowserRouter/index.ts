import { setComponent } from '@qctoken/register';
import { BrowserRouter } from './BrowserRouter';
import { BrowserRouterName } from './types';
import config from './config.json';

setComponent(BrowserRouterName, BrowserRouter, config);
