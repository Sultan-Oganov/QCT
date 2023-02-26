import { setComponent } from '@qctoken/register';
import { Tooltip } from './Tooltip';
import { TooltipName } from './types';
import config from './config.json';

setComponent(TooltipName, Tooltip, config);
