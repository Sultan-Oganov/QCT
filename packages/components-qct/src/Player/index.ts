import { setComponent } from '@qctoken/register';
import { Player } from './Player';
import { PlayerName } from './types';
import config from './config.json';

setComponent(PlayerName, Player, config);
