import { setComponent } from '@qctoken/register';
import { QCTNotFoundCourseCard } from './QCTNotFoundCourseCard';
import { QCTNotFoundCourseCardName } from './types';
import config from './config.json';

setComponent(QCTNotFoundCourseCardName, QCTNotFoundCourseCard, config);
