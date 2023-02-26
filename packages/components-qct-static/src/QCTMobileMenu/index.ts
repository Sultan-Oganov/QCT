import { setComponent } from '@qctoken/register';
import { QCTMobileMenu } from './QCTMobileMenu';
import { QCTMobileMenuName } from './types';
import config from './config.json';

setComponent(QCTMobileMenuName, QCTMobileMenu, config);
