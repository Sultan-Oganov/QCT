import { setComponent, type ConfigComponent } from '@qctoken/register';
import { RoadMap } from './RoadMap';
import { RoadMapName } from './types';
import config from './config.json';

setComponent(RoadMapName, RoadMap, config as ConfigComponent);
