import { setComponent } from '@qctoken/register';
import { FormLoader } from './FormLoader';
import { FormLoaderName } from './types';
import config from './config.json';

setComponent(FormLoaderName, FormLoader, config);
