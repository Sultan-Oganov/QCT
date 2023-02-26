import { ClassProps } from '@qctoken/register';
import type { RoutePageNameType } from './types';
import { Route as ReactRoute } from 'react-router-dom';
import { Page } from './Page';

export function RoutePage(props: ClassProps<RoutePageNameType>) {
  const { bc } = props;

  if (!bc.path || bc.pageId === undefined || bc.pageId === '') {
    return null;
  }

  return (
    <ReactRoute
      key={bc.pageObjectId}
      path={bc.path}
      element={<Page key={bc.pageObjectId} {...props} />}
    />
  );
}
