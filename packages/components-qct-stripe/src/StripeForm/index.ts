import { lazy } from 'react';
import { setComponent } from '@qctoken/register';
import { StripeFormName } from './types';
import config from './config.json';
const StripeForm = lazy(() => import('./StripeForm'));

setComponent(StripeFormName, StripeForm, config);
