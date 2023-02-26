import { makeObservable, observable, when } from 'mobx';

export class CacheStore {
  private data: unknown;

  status: 'idle' | 'loading' | 'done' = 'idle';

  constructor() {
    makeObservable(this, {
      status: observable,
    });
  }

  public async get() {
    if (this.status === 'loading') {
      await when(() => this.status !== 'loading');
    }

    if (this.status === 'idle') {
      // Ask to make request
    }

    return this.data;
  }

  public set(response: unknown) {
    this.status = 'done';
    this.data = response;
  }
}
