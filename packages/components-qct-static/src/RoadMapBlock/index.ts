import { setComponent } from '@qctoken/register';
import { RoadMapBlockName } from './types';
import { RoadMapBlock } from './RoadMapBlock';
import config from './config.json';

setComponent(RoadMapBlockName, RoadMapBlock, config);
