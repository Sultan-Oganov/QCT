import { ClassProps, mapComponents } from '@qctoken/register';
import type { BrowserRouterNameType } from './types';
import { BrowserRouter as ReactBrowserRouter } from 'react-router-dom';

export function BrowserRouter(props: ClassProps<BrowserRouterNameType>) {
  return (
    <ReactBrowserRouter>
      {mapComponents(props.bc.childs, props)}
    </ReactBrowserRouter>
  );
}
