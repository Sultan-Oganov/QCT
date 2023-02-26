import { lazy } from 'react';
import { setComponent } from '@qctoken/register';
import { StripeResultName } from './types';
import config from './config.json';

const StripeResult = lazy(() => import('./StripeResult'));

setComponent(StripeResultName, StripeResult, config);
