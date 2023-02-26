import type { BuilderConfig } from '@qctoken/register/lib/types';
import { Operator } from '@qctoken/executor';

export const StorageName = 'QCT.HANDLERS.STORAGE';
export type StorageNameType = typeof StorageName;

export interface IStorage {
  add: (key: string, value: unknown) => void;
  get: (key: string) => string | null | unknown;
  delete: (key: string) => void;
  clear: () => void;
}

export interface StorageBuilderConfig extends BuilderConfig {
  type: StorageNameType;
  name?: string;
  key?: string | Operator;
  value?: string | Operator;
  command?: 'add' | 'delete';
  transformation?: 'json';
}
declare module '@qctoken/register/lib/types' {
  interface BuilderConfigs {
    [StorageName]: StorageBuilderConfig;
  }
}
