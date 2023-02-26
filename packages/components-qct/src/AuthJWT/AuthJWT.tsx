import { type ClassProps, mapComponents } from '@qctoken/register';
import { observer, useModel } from '@qctoken/store';
import { AuthJWTModel } from './AuthJWTModel';
import type { AuthJWTNameType } from './types';

export const AuthJWT = observer(function AuthJWT(
  props: ClassProps<AuthJWTNameType>,
) {
  const [store] = useModel(AuthJWTModel, props);

  if (!store.isReady) {
    return <>...Loading</>;
  }

  return <>{mapComponents(props.bc.childs, props)}</>;
});
