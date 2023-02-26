import { setComponent } from '@qctoken/register';
import { QCTMobileMenuLink } from './QCTMobileMenuLink';
import { QCTMobileMenuLinkName } from './types';
import config from './config.json';

setComponent(QCTMobileMenuLinkName, QCTMobileMenuLink, config);
