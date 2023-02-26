import { setComponent } from '@qctoken/register';
import { Avatar } from './Avatar';
import { AvatarName } from './types';
import config from './config.json';

setComponent(AvatarName, Avatar, config);
