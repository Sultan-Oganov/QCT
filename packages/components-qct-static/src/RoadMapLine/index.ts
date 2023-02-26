import { setComponent } from '@qctoken/register';
import { RoadMapLine } from './RoadMapLine';
import { RoadMapLineName } from './types';
import config from './config.json';

setComponent(RoadMapLineName, RoadMapLine, config);
