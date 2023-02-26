import { type ClassProps } from '@qctoken/register';
import { useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';
import type { SetRouterParamsNameType } from './types';

export function SetRouterParams(props: ClassProps<SetRouterParamsNameType>) {
  const { pageStore } = props;
  const params = useParams();

  useLayoutEffect(() => {
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
