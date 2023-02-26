import jwtDecode from 'jwt-decode';
import { runOperator } from '@qctoken/executor';
import type { ClassProps } from '@qctoken/register';
import {
  BaseStoreModel,
  makeObservable,
  observable,
  computed,
} from '@qctoken/store';
import type { TokenValidateNameType } from './types';

export class TokenValidateModel extends BaseStoreModel<TokenValidateNameType> {
  payload?: Record<string, unknown>;

  private jwtToken?: string;

  constructor(props: ClassProps<TokenValidateNameType>) {
    super(props);

    this.getToken();

    makeObservable(this, {
      payload: observable.shallow,
      isTokenValid: computed,
    });
  }

  getToken = (): boolean => {
    const { getJWTToken } = this.bc;
    const jwtToken = runOperator({ pageStore: this.pageStore }, getJWTToken);
    if (jwtToken === this.jwtToken) {
      return Boolean(this.payload);
    }

    const decoded = jwtToken && jwtDecode(jwtToken);
    const payload: Record<string, unknown> | undefined =
      decoded && decoded.exp * 1000 > +new Date() ? decoded : undefined;

    this.payload = payload;
    this.jwtToken = jwtToken;

    return Boolean(payload);
  };

  get isTokenValid() {
    // @ts-ignore
    if (Date.now() < this.payload?.exp * 1000 && this.jwtToken) {
      return true;
    }
    return false;
  }

  handlers = {
    onProcess: () => Promise.resolve(false),
  };
}
