import { setComponent } from '@qctoken/register';
import { Banner } from './Banner';
import { BannerName } from './types';
import config from './config.json';

setComponent(BannerName, Banner, config);
