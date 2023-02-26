import { setComponent } from '@qctoken/register';
import { Redirect } from './Redirect';
import { RedirectName } from './types';
import config from './config.json';

setComponent(RedirectName, Redirect, config);
