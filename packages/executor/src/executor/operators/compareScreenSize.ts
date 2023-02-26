import { VAR_SCREEN_SIZE, type ScreenSize } from '@qctoken/theme';
import type { ScreenSizeOperator } from '../types';
import type { Options } from './operator.types';

const ScreenSizeNum: Record<ScreenSize, number> = {
  xs: 0,
  sm: 1,
  md: 2,
  lg: 3,
  xl: 4,
};

export const compareScreenSize = (options: Options, op: ScreenSizeOperator) => {
  const currentScreenSize = options.pageStore.globalValues.get(
    VAR_SCREEN_SIZE,
  ) as ScreenSize;
  const currentScreenNum = ScreenSizeNum[currentScreenSize];
  const opScreenNum = ScreenSizeNum[op.value];

  switch (op.compare) {
    case 'bigger':
      return currentScreenNum > opScreenNum;
    case 'less':
      return currentScreenNum < opScreenNum;
    default:
      return currentScreenNum == opScreenNum;
  }
};
