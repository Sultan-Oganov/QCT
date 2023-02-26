import { setComponent } from '@qctoken/register';
import { NativeLink } from './NativeLink';
import { NativeLinkName } from './types';
import config from './config.json';

setComponent(NativeLinkName, NativeLink, config);
