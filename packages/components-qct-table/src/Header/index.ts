import { setComponent } from '@qctoken/register';
import { Header } from './Header';
import { HeaderName } from './types';
import config from './config.json';

setComponent(HeaderName, Header, config);
