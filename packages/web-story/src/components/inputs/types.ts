import type { BuilderConfig, ConfigAttribute } from '@qctoken/register';
import { ComponentType } from 'react';

export type InputProps = {
  bc: BuilderConfig;
  attr: ConfigAttribute;
};

type ComponentInputProps = InputProps & {
  onChange(
    name: string,
    value: string | number | boolean | object,
    forceRerender?: boolean,
  ): void;
};

export type InputComponentsType = {
  [key: string]: ComponentType<ComponentInputProps>;
};
