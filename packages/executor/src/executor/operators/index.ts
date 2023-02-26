import { type Operator, OperatorName } from '../types';
import type { Options, RunOperatorType } from './operator.types';
import { compareScreenSize } from './compareScreenSize';
import { andOperator } from './andOperator';
import { orOperator } from './orOperator';
import { globalOperator } from './globalOperator';
import { eqOperator } from './eqOperator';
import { neqOperator } from './neqOperator';
import { literalOperator } from './literalOperator';
import { ifOperator } from './ifOperator';
import { isEmptyOperator } from './isEmptyOperator';
import { concatStrOperator } from './concatStrOperator';
import { getValueOperator } from './getValueOperator';
import { objectOperator } from './objectOperator';
import { getStorageValueOperator } from './getStorageValueOperator';
import { getQueryUrlValueOperator } from './getQueryUrlValueOperator';
import { translateOperator } from './translateOperator';
import { dateFormatOperator } from './dateFormatOperator';
import { arrayOperator } from './arrayOperator';
import { inOperator } from './inOperator';
import { numberToCIOperator } from './numberToCIOperator';

export type OperatorsType<N extends OperatorName = OperatorName> = {
  [key in N]: (
    options: Options,
    operator: Extract<Operator, { op: key }>,
    runOperator: RunOperatorType,
  ) => any;
};

export const operators: OperatorsType = {
  [OperatorName.SCREEN_SIZE]: compareScreenSize,
  [OperatorName.AND]: andOperator,
  [OperatorName.OR]: orOperator,
  [OperatorName.GLOBAL]: globalOperator,
  [OperatorName.EQ]: eqOperator,
  [OperatorName.NO_EQ]: neqOperator,
  [OperatorName.LITERAL]: literalOperator,
  [OperatorName.IF]: ifOperator,
  [OperatorName.IS_EMPTY]: isEmptyOperator,
  [OperatorName.CONCAT_STR]: concatStrOperator,
  [OperatorName.GET_VALUE]: getValueOperator,
  [OperatorName.OBJECT]: objectOperator,
  [OperatorName.GET_STORAGE_VALUE]: getStorageValueOperator,
  [OperatorName.GET_QUERY_URL_VALUE]: getQueryUrlValueOperator,
  [OperatorName.TRANSLATE]: translateOperator,
  [OperatorName.DATE_FORMAT]: dateFormatOperator,
  [OperatorName.ARRAY]: arrayOperator,
  [OperatorName.IN]: inOperator,
  [OperatorName.NUMBER_TO_CI]: numberToCIOperator,
};
