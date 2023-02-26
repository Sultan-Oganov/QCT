import { setComponent } from '@qctoken/register';
import { AuthJWT } from './AuthJWT';
import { AuthJWTName } from './types';
import config from './config.json';

setComponent(AuthJWTName, AuthJWT, config);
