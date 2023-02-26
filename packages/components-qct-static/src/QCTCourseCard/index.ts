import { setComponent } from '@qctoken/register';
import { QCTCourseCard } from './QCTCourseCard';
import { QCTCourseCardName } from './types';
import config from './config.json';

setComponent(QCTCourseCardName, QCTCourseCard, config);
