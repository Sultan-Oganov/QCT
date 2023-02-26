import { setComponent } from '@qctoken/register';
import { QCTLogo } from './QCTLogo';
import { QCTLogoName } from './types';
import config from './config.json';

setComponent(QCTLogoName, QCTLogo, config);
