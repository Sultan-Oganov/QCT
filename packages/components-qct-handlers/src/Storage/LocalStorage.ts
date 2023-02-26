import { IStorage, StorageBuilderConfig } from './types';

export class LocalStorageModel implements IStorage {
  constructor(private bc: StorageBuilderConfig) {}

  add = (key: string, value: unknown) => {
    switch (this.bc.transformation) {
      case 'json':
        window.localStorage.setItem(key, JSON.stringify(value));
      default:
        window.localStorage.setItem(key, value as string);
    }
  };

  get = (key: string): string | null | unknown => {
    const value = window.localStorage.getItem(key);

    switch (this.bc.transformation) {
      case 'json':
        return this.parseJSONValue(value);
      default:
        return value;
    }
  };

  delete = (key: string) => {
    window.localStorage.removeItem(key);
  };

  clear = () => {
    window.localStorage.clear();
  };

  private parseJSONValue(value: string | null): unknown {
    if (value == null) {
      return null;
    }

    try {
      return JSON.parse(value);
    } catch (e) {
      return null;
    }
  }
}
