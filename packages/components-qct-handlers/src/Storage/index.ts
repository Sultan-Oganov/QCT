import { setComponent } from '@qctoken/register';
import { Storage } from './Storage';
import { StorageName } from './types';
import config from './config.json';

setComponent(StorageName, Storage, config);
