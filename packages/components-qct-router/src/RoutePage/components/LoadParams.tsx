import { useEffect } from 'react';
import type { ClassProps } from '@qctoken/register';
import { useParams } from 'react-router-dom';
import type { RoutePageNameType } from '../types';

export function LoadParams({
  pageStore,
}: Pick<ClassProps<RoutePageNameType>, 'pageStore'>) {
  const params = useParams();

  useEffect(() => {
    Object.entries(params).forEach(([key, value]) => {
      pageStore.globalValues.set(key, value);
    });

    return () => {
      Object.keys(params).forEach((key) => {
        pageStore.globalValues.remove(key);
      });
    };
  }, [params]);

  return null;
}
