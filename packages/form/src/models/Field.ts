import { makeObservable, observable, action } from '@qctoken/store';

export type FieldError = {
  msg: string;
};

export type FieldOptions<V> = {
  name?: string;
  value: V;
  type?: string;
};

export class Field<V = any> {
  public name: string;

  private initialValue: V;

  public value: V;

  public type: string;

  public errors: FieldError[] = [];

  public isDirty: boolean = false;

  public isReseted: boolean = false;

  get isValid(): boolean {
    return this.errors.length === 0;
  }

  constructor(options: FieldOptions<V>) {
    this.name = options.name || 'no-name';
    this.initialValue = options.value;
    this.value = options.value;
    this.type = options.type || 'text';

    makeObservable(this, {
      value: observable,
      type: observable,
      isDirty: observable,
      isReseted: observable,
      errors: observable.shallow,
      setValue: action,
      setErrors: action,
      resetValidation: action,
      changeIsDirty: action,
      changeResetState: action,
    });
  }

  validate = () => {};

  setInitialValue = (value: V) => {
    this.initialValue = value;
    this.isDirty = false;
  };

  clear = () => {
    this.value = this.initialValue;
    this.isDirty = false;
  };

  reset = () => {
    this.value = this.initialValue;
    this.isDirty = false;
    this.changeResetState(true);
  };

  resetValidation = () => {
    if (this.errors.length > 0) {
      this.errors = [];
    }
  };

  setErrors = (errors: FieldError[]) => {
    this.errors = errors;
  };

  setValue = (value: V, isUpdate?: boolean) => {
    this.changeResetState(false);
    this.value = value;
    if (isUpdate) {
      this.isDirty = false;
    } else {
      this.isDirty = true;
    }
    this.resetValidation();
  };

  changeIsDirty = (value: boolean) => {
    this.isDirty = value;
  };

  changeResetState = (value: boolean) => {
    this.isReseted = value;
  };
}
