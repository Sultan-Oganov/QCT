import { setComponent } from '@qctoken/register';
import { QCTLoader } from './QCTLoader';
import { QCTLoaderName } from './types';
import config from './config.json';

setComponent(QCTLoaderName, QCTLoader, config);
