import { setComponent } from '@qctoken/register';
import { TokenValidate } from './TokenValidate';
import { TokenValidateName } from './types';
import config from './config.json';

setComponent(TokenValidateName, TokenValidate, config);
