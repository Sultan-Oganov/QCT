import { setComponent } from '@qctoken/register';
import { LocalStorageSave } from './LocalStorageSave';
import { LocalStorageSaveName } from './types';
import config from './config.json';

setComponent(LocalStorageSaveName, LocalStorageSave, config);
