import { setComponent } from '@qctoken/register';
import { ImageField } from './ImageField';
import { ImageFieldName } from './types';
import config from './config.json';

setComponent(ImageFieldName, ImageField, config);
