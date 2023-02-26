import { Fragment } from 'react';
import { ClassProps, mapComponents } from '@qctoken/register';
import { useModel } from '@qctoken/store';
import { ProcessModel } from './ProcessModel';
import type { ProcessNameType } from './types';

export function Process(props: ClassProps<ProcessNameType>) {
  useModel(ProcessModel, props);

  return <Fragment>{mapComponents(props.bc.childs, props)}</Fragment>;
}
