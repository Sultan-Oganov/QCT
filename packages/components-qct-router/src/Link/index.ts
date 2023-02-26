import { setComponent } from '@qctoken/register';
import { Link } from './Link';
import { LinkName } from './types';
import config from './config.json';

setComponent(LinkName, Link, config);
