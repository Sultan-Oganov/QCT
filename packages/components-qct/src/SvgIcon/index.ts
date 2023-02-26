import { setComponent } from '@qctoken/register';
import { SvgIcon } from './SvgIcon';
import { SvgIconName } from './type';
import config from './config.json';

setComponent(SvgIconName, SvgIcon, config);
