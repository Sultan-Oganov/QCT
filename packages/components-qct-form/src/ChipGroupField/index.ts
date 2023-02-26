import { setComponent } from '@qctoken/register';
import { ChipGroupField } from './ChipGroupField';
import { ChipGroupFieldName } from './types';
import config from './config.json';

setComponent(ChipGroupFieldName, ChipGroupField, config);
