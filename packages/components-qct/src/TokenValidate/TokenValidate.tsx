import { type ClassProps, mapComponentOne } from '@qctoken/register';
import { observer, useModel } from '@qctoken/store';
import { TokenValidateModel } from './TokenValidateModel';
import type { TokenValidateNameType } from './types';

export const TokenValidate = observer(function TokenValidate(
  props: ClassProps<TokenValidateNameType>,
) {
  const [store] = useModel(TokenValidateModel, props);

  if (!store.isTokenValid) {
    return null;
  }
  if (store.isTokenValid && props.bc.redirect) {
    props.pageStore.stores
      .get(props.bc.redirect.pageObjectId)
      ?.invokeHandler([props.bc, {}]);
  }

  return <>{props.bc.redirect && mapComponentOne(props.bc.redirect, props)}</>;
});
