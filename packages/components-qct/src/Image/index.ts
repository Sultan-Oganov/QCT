import { setComponent } from '@qctoken/register';
import { Image } from './Image';
import { ImageName } from './type';
import config from './config.json';

setComponent(ImageName, Image, config);
