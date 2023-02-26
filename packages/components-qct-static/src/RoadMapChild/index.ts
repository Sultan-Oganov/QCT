import { setComponent } from '@qctoken/register';
import { RoadMapChildName } from './types';
import { RoadMapChild } from './RoadMapChild';
import config from './config.json';

setComponent(RoadMapChildName, RoadMapChild, config);
