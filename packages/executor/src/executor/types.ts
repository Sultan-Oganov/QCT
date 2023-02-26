import { type ScreenSize } from '@qctoken/theme';

export const enum OperatorName {
  AND = 'and',
  OR = 'or',
  GLOBAL = 'global',
  EQ = 'eq',
  NO_EQ = 'neq',
  LITERAL = 'literal',
  SCREEN_SIZE = 'screen-size',
  IF = 'if',
  IS_EMPTY = 'isEmpty',
  CONCAT_STR = 'concatStr',
  GET_VALUE = 'getValue',
  OBJECT = 'object',
  GET_STORAGE_VALUE = 'getStorageValue',
  GET_QUERY_URL_VALUE = 'getQueryUrlValue',
  TRANSLATE = 'translate',
  DATE_FORMAT = 'dateFormat',
  ARRAY = 'array',
  IN = 'in',
  NUMBER_TO_CI = 'numberToCI',
}

export type AndOperator = {
  nodes: Operator[];
  op: OperatorName.AND;
};

export type OrOperator = {
  nodes: Operator[];
  op: OperatorName.OR;
};

export type GlobalOperator = {
  name: string;
  op: OperatorName.GLOBAL;
};

export type EqOperator = {
  left: Operator;
  right: Operator;
  op: OperatorName.EQ;
};

export type NoEqOperator = {
  left: Operator;
  right: Operator;
  op: OperatorName.NO_EQ;
};

export type LiteralOperator = {
  value: any;
  op: OperatorName.LITERAL;
};

export type ScreenSizeOperator = {
  value: ScreenSize;
  compare: 'eq' | 'less' | 'bigger';
  op: OperatorName.SCREEN_SIZE;
};

export type IfOperator = {
  condition: Operator;
  positive: Operator;
  negative: Operator;
  op: OperatorName.IF;
};

export type IsEmptyOperator = {
  value: Operator;
  op: OperatorName.IS_EMPTY;
};

export type ConcatStrOperator = {
  nodes: Operator[];
  join?: string;
  op: OperatorName.CONCAT_STR;
};

export type GetValueOperator = {
  name: string | Operator;
  values?: Operator;
  op: OperatorName.GET_VALUE;
};

export type ObjectOperator = {
  properties: Record<string, Operator>;
  op: OperatorName.OBJECT;
};

export type GetStorageValueOperator = {
  storage?: 'localStorage';
  name: string;
  op: OperatorName.GET_STORAGE_VALUE;
};

export type GetQueryUrlValueOperator = {
  name: string;
  op: OperatorName.GET_QUERY_URL_VALUE;
};

export type TranslateOperator = {
  op: OperatorName.TRANSLATE;
  value: string | Operator;
};

export type DateFormatOperator = {
  op: OperatorName.DATE_FORMAT;
  value: string | Operator;
  format: string;
};

export type ArrayOperator = {
  nodes: Operator[];
  op: OperatorName.ARRAY;
};

export type InOperator = {
  op: OperatorName.IN;
  left: Operator;
  right: Operator;
};

export type NumberToCIOperator = {
  op: OperatorName.NUMBER_TO_CI;
  value: Operator;
};

export type Operator =
  | AndOperator
  | OrOperator
  | GlobalOperator
  | EqOperator
  | NoEqOperator
  | LiteralOperator
  | ScreenSizeOperator
  | IfOperator
  | IsEmptyOperator
  | ConcatStrOperator
  | GetValueOperator
  | ObjectOperator
  | GetStorageValueOperator
  | GetQueryUrlValueOperator
  | TranslateOperator
  | DateFormatOperator
  | ArrayOperator
  | NumberToCIOperator;
