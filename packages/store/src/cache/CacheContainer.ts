import type { RequestModel } from '../Request';
import { CacheStore } from './CacheStore';

export class CacheContainer {
  private requests: RequestModel[] = [];

  private stores: Record<string, CacheStore> = {};

  private async refresh(): Promise<boolean> {
    const refreshRequests = this.requests.map((request) => request.refresh());

    try {
      await Promise.all(refreshRequests);
      return true;
    } catch {
      return false;
    }
  }

  private initCache(url: string) {
    if (!this.stores[url]) {
      this.stores[url] = new CacheStore();
    }
  }

  public addRequest(request: RequestModel) {
    this.requests.push(request);
  }

  public removeRequest(request: RequestModel) {
    this.requests.splice(this.requests.indexOf(request), 1);
  }

  public setCache(url: string, response: unknown) {
    this.initCache(url);
    this.stores[url].set(response);
  }

  public getCache(url: string): CacheStore {
    this.initCache(url);
    return this.stores[url];
  }

  public clear(): Promise<boolean> {
    this.stores = {};
    return this.refresh();
  }
}
