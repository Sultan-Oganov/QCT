import { setComponent } from '@qctoken/register';
import { Badge } from './Badge';
import { BadgeName } from './types';
import config from './config.json';

setComponent(BadgeName, Badge, config);
