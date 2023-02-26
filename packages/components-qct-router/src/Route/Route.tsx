import { ClassProps, mapComponentOne } from '@qctoken/register';
import type { RouteNameType } from './types';
import { Route as ReactRoute } from 'react-router-dom';

export function Route(props: ClassProps<RouteNameType>) {
  const { bc } = props;

  if (!bc.path || !bc.element) {
    return null;
  }

  return (
    <ReactRoute
      key={bc.pageObjectId}
      path={bc.path}
      element={mapComponentOne(bc.element, props)}
    />
  );
}
