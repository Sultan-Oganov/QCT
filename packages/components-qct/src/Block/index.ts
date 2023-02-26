import { setComponent } from '@qctoken/register';
import { Block } from './Block';
import { BlockName } from './types';
import config from './config.json';

setComponent(BlockName, Block, config);
