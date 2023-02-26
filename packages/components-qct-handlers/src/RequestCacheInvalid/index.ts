import { setComponent } from '@qctoken/register';
import { RequestCacheInvalid } from './RequestCacheInvalid';
import { RequestCacheInvalidName } from './types';
import config from './config.json';

setComponent(RequestCacheInvalidName, RequestCacheInvalid, config);
