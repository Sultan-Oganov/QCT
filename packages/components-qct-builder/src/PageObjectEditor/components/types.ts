import { ComponentType } from 'react';
import type { GroupAttr } from '../types';

export type InputProps<V extends any = any> = {
  attr: GroupAttr;
  value: V;
  pageObjectId: number;
  control: string;
  onAddChangedInputs: (
    name: string,
    groupAttrId: number,
    pageObjectId: number,
    value: V,
    deleteId?: number,
  ) => void;
};

type ComponentInputProps = InputProps & {};

export type InputComponentsType = {
  [key: string]: ComponentType<ComponentInputProps>;
};
