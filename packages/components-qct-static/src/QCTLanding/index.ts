import { setComponent } from '@qctoken/register';
import { QCTLanding } from './QCTLanding';
import { QCTLandingName } from './types';
import config from './config.json';

setComponent(QCTLandingName, QCTLanding, config);
