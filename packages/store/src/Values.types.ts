export interface ValuesInterface<V> {
  id: string;
  get(name: string): V;
  set(name: string, value: V): void;
  remove(name: string): void;
  update(values: Record<string, V>): void;
}
