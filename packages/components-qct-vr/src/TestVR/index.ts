import { setComponent } from '@qctoken/register';
import { TestVR } from './TestVR';
import { TestVRName } from './types';
import config from './config.json';

setComponent(TestVRName, TestVR, config);
