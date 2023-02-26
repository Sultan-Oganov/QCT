import { setComponent } from '@qctoken/register';
import { SvgBackground } from './SvgBackground';
import { SvgBackgroundName } from './type';
import config from './config.json';

setComponent(SvgBackgroundName, SvgBackground, config);
