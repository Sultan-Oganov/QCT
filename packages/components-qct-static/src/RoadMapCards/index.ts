import { setComponent } from '@qctoken/register';
import { RoadMapCardsName } from './types';
import { RoadMapCards } from './RoadMapCards';
import config from './config.json';

setComponent(RoadMapCardsName, RoadMapCards, config);
