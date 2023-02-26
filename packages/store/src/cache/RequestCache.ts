import { type RequestModel } from '../Request';
import { CacheContainer } from './CacheContainer';
import { CacheStore } from './CacheStore';

type Deactivate = () => void;

export class RequestCache {
  private containers: Record<string, CacheContainer> = {};

  private initContainer(cacheKey: string): CacheContainer {
    if (!this.containers[cacheKey]) {
      this.containers[cacheKey] = new CacheContainer();
    }

    return this.containers[cacheKey];
  }

  public addRequest(cacheKey: string, requestStore: RequestModel): Deactivate {
    const cacheContainer = this.initContainer(cacheKey);

    cacheContainer.addRequest(requestStore);

    return () => {
      cacheContainer.removeRequest(requestStore);
    };
  }

  public async invalidCache(cacheKey: string | string[]): Promise<boolean> {
    const keys = typeof cacheKey === 'string' ? [cacheKey] : cacheKey;

    const clears = keys.map((key): Promise<boolean> => {
      const cacheContainer = this.containers[key];

      if (!cacheContainer) {
        return Promise.resolve(false);
      }

      return cacheContainer.clear();
    });

    try {
      await Promise.all(clears);
      return true;
    } catch {
      return false;
    }
  }

  public getCacheStore(cacheKey: string, url: string): CacheStore {
    const cacheContainer = this.initContainer(cacheKey);
    const cacheStore = cacheContainer.getCache(url);

    return cacheStore;
  }
}
