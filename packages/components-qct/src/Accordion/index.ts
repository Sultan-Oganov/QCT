import { setComponent } from '@qctoken/register';
import { Accordion } from './Accordion';
import { AccordionName } from './types';
import config from './config.json';

setComponent(AccordionName, Accordion, config);
