import { setComponent } from '@qctoken/register';
import { QCTIcon } from './QCTIcon';
import { QCTIconName } from './types';
import config from './config.json';

setComponent(QCTIconName, QCTIcon, config);
