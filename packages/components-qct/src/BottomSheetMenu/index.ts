import { setComponent } from '@qctoken/register';
import { BottomSheetMenu } from './BottomSheetMenu';
import { BottomSheetMenuName } from './types';
import config from './config.json';

setComponent(BottomSheetMenuName, BottomSheetMenu, config);
