import { setComponent } from '@qctoken/register';
import { Carousel } from './Carousel';
import { CarouselName } from './types';
import config from './config.json';

setComponent(CarouselName, Carousel, config);
