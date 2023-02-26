import { ClassProps } from '@qctoken/register';
import { useModel } from '@qctoken/store';
import type { RedirectNameType } from './types';
import { RedirectModel } from './RedirectModel';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export function Redirect(props: ClassProps<RedirectNameType>) {
  const navigate = useNavigate();

  const [store] = useModel(
    RedirectModel,
    props,
    () => new RedirectModel(props, navigate),
  );

  useEffect(() => {
    store.setNavigate(navigate);
  }, [navigate]);

  return null;
}
