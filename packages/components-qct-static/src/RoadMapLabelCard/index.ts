import { setComponent } from '@qctoken/register';
import { RoadMapLabelCardName } from './types';
import { RoadMapLabelCard } from './RoadMapLabelCard';
import config from './config.json';

setComponent(RoadMapLabelCardName, RoadMapLabelCard, config);
