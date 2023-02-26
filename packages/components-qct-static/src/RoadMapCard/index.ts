import { setComponent } from '@qctoken/register';
import { RoadMapCardName } from './types';
import { RoadMapCard } from './RoadMapCard';
import config from './config.json';

setComponent(RoadMapCardName, RoadMapCard, config);
