import { setComponent } from '@qctoken/register';
import { Drawer } from './Drawer';
import { DrawerName } from './types';
import config from './config.json';

setComponent(DrawerName, Drawer, config);
