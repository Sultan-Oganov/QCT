import { makeObservable, observable, action } from 'mobx';
import { ValuesInterface } from './Values.types';

export class ValuesModel<V> implements ValuesInterface<V> {
  id: string;

  values: Record<string, V> = {};

  constructor(type: string, id: string | number) {
    this.id = `${type}-${id}`;

    makeObservable(this, {
      values: observable.shallow,
      set: action,
      remove: action,
      update: action,
    });
  }

  set = (name: string, value: V) => {
    this.values[name] = value;
  };

  get = (name: string): V => {
    return this.values[name];
  };

  remove = (name: string) => {
    delete this.values[name];
  };

  update = (values: Record<string, V>) => {
    Object.entries(values).forEach(([key, value]) => {
      this.values[key] = value;
    });
  };
}
