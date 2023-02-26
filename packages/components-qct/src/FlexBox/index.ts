import { setComponent } from '@qctoken/register';
import { FlexBox } from './FlexBox';
import { FlexBoxName } from './types';
import config from './config.json';

setComponent(FlexBoxName, FlexBox, config);
