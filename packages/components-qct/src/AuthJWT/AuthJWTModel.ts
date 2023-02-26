import jwtDecode from 'jwt-decode';
import { runOperator } from '@qctoken/executor';
import type { BuilderConfig, ClassProps } from '@qctoken/register';
import {
  BaseStoreModel,
  type HandlerOptions,
  makeObservable,
  observable,
  action,
} from '@qctoken/store';
import type { AuthJWTNameType } from './types';

export class AuthJWTModel extends BaseStoreModel<AuthJWTNameType> {
  isReady: boolean = false;

  payload?: Record<string, unknown>;

  roles?: (number | string)[];

  private jwtToken?: string;

  constructor(props: ClassProps<AuthJWTNameType>) {
    super(props);

    this.refreshPayload();
    this.isReady = true;

    makeObservable(this, {
      payload: observable.shallow,
      isReady: observable,
      refreshPayload: action,
    });
  }

  refreshPayload = (): boolean => {
    const { setGlobal, getJWTToken } = this.bc;
    const jwtToken = runOperator({ pageStore: this.pageStore }, getJWTToken);

    if (jwtToken === this.jwtToken) {
      return Boolean(this.payload);
    }

    const decoded = jwtToken && jwtDecode(jwtToken);
    const payload: Record<string, unknown> | undefined =
      decoded && decoded.exp * 1000 > +new Date() ? decoded : undefined;

    this.payload = payload;
    this.jwtToken = jwtToken;

    setGlobal?.rules?.forEach((rule) => {
      const globalValue = rule.in ? payload?.[rule.in] : payload;

      this.pageStore.globalValues.set(rule.out, globalValue);
    });

    return Boolean(payload);
  };

  handlers = {
    onProcess: () => Promise.resolve(false),
    hasAccess: (_bc: BuilderConfig, options: HandlerOptions) => {
      this.refreshPayload();
      const { values } = options;
      // @ts-ignore
      const roles = this.payload?.realm_access?.roles;

      if (values && Array.isArray(values.accessList) && Array.isArray(roles)) {
        return Promise.resolve(
          values.accessList.some((access) => roles.includes(access)),
        );
      }

      return Promise.resolve(false);
    },
  };
}
