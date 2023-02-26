import { ClassProps } from '@qctoken/register';
import type { RoutesNameType } from './types';
import { Routes as ReactRoutes } from 'react-router-dom';
import { type RouteBuilderConfig, RouteName } from '../Route/types';
import { Route } from '../Route/Route';
import { type RoutePageBuilderConfig, RoutePageName } from '../RoutePage/types';
import { RoutePage } from '../RoutePage/RoutePage';

export function Routes(props: ClassProps<RoutesNameType>) {
  return (
    <ReactRoutes>
      {props.bc.childs.map((child) => {
        if (child.type === RouteName) {
          return Route({ ...props, bc: child as RouteBuilderConfig });
        }

        if (child.type === RoutePageName) {
          return RoutePage({ ...props, bc: child as RoutePageBuilderConfig });
        }
      })}
    </ReactRoutes>
  );
}
