import type { BuilderConfig } from '@qctoken/register';

export const RequestCacheInvalidName = 'QCT.HANDLERS.REQUEST_CACHE_INVALID';
export type RequestCacheInvalidNameType = typeof RequestCacheInvalidName;

export interface RequestCacheInvalidBuilderConfig extends BuilderConfig {
  cacheKeys?: string[];
  type: RequestCacheInvalidNameType;
}

declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [RequestCacheInvalidName]: RequestCacheInvalidBuilderConfig;
  }
}
