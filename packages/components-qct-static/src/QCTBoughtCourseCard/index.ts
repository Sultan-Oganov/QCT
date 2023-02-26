import { setComponent } from '@qctoken/register';
import { QCTBoughtCourseCard } from './QCTBoughtCourseCard';
import { QCTBoughtCourseCardName } from './types';
import config from './config.json';

setComponent(QCTBoughtCourseCardName, QCTBoughtCourseCard, config);
