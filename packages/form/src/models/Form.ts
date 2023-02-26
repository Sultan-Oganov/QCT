import type { ClassProps } from '@qctoken/register';
import {
  BaseStoreModel,
  makeObservable,
  runInAction,
  observable,
  computed,
} from '@qctoken/store';
import { Field, type FieldOptions } from './Field';
import type { DetailError, ErrorFormMessage } from './types';

type SubmitOptions = {
  url?: string;
  method?: 'POST' | 'PUT';
  body: Record<string, any>;
  contentType?: 'formData' | 'json';
  noRefresh: boolean;
};

export type FormOptions = {
  submitQuery?: string;
};

type FieldInfo = {
  field: Field<any>;
  count: number;
};

export class Form extends BaseStoreModel<string> {
  private initialValues: any = {};

  public fields: Record<string, FieldInfo> = {};

  public isSubmitting: boolean = false;

  public formErrors: ErrorFormMessage[] = [];

  get isValid(): boolean {
    for (const { field } of Object.values(this.fields)) {
      if (field.isValid === false) {
        return false;
      }
    }

    if (this.formErrors.length > 0) {
      return false;
    }

    return true;
  }

  get hasFieldErrors(): boolean {
    return Object.values(this.fields).some(({ field }) => !field.isValid);
  }

  get isDirty(): boolean {
    return Object.values(this.fields).some((field) => field.field.isDirty);
  }

  get values(): Record<string, any> {
    return Object.values(this.fields).reduce((acc, { field }) => {
      if (field.type === 'file' && !field.isDirty) return acc;
      return {
        ...acc,
        [field.name]: field.value,
      };
    }, {});
  }

  constructor(props: ClassProps<string>, public options: FormOptions = {}) {
    super(props);

    makeObservable(this, {
      isValid: computed,
      formErrors: observable.shallow,
      values: computed,
      fields: observable.shallow,
      isSubmitting: observable,
      isDirty: computed,
    });
  }

  addField = <V>(fieldOptions: FieldOptions<V>): Field<V> => {
    const name = fieldOptions.name || 'no-name';

    if (this.fields[name]) {
      this.fields[name].count += 1;
    } else {
      this.fields[name] = {
        field: new Field<V>(fieldOptions),
        count: 1,
      };
    }

    return this.fields[name].field;
  };

  getField = <V extends any>(
    name: string = 'no-name',
  ): Field<V> | undefined => {
    return this.fields[name]?.field;
  };

  removeField = (field: Field) => {
    if (!this.fields[field.name]) {
      return;
    }

    if (this.fields[field.name].count > 1) {
      this.fields[field.name].count -= 1;
    } else {
      delete this.fields[field.name];
    }
  };

  validate = () => {
    Object.values(this.fields).forEach(({ field }) => {
      field.validate();
    });
  };

  onSubmit = async (
    options: Partial<SubmitOptions> = {},
  ): Promise<undefined | Record<string, unknown>> => {
    runInAction(() => {
      this.formErrors = [];
    });
    this.validate();

    if (!this.isValid) {
      return undefined;
    }

    return this.submit({
      url: options.url || this.options.submitQuery,
      method: options.method,
      body: options.body || this.values,
      contentType: options.contentType,
      noRefresh: options.noRefresh || false,
    });
  };

  updateValues = (values: Record<string, any>) => {
    Object.values(this.fields).forEach(({ field }) => {
      field.setValue(values[field.name], true);
    });
    return true;
  };

  setInitialValues = (values: Record<string, any>) => {
    this.initialValues = values;

    Object.values(this.fields).forEach(({ field }) => {
      field.setInitialValue(values[field.name]);
    });
    return true;
  };

  commitInitialValues = () => {
    Object.values(this.fields).forEach(({ field }) => {
      field.setInitialValue(field.value);
    });

    return true;
  };

  clear = async (): Promise<boolean> => {
    Object.values(this.fields).forEach(({ field }) => field.clear());

    return true;
  };

  reset = () => {
    Object.values(this.fields).forEach(({ field }) => field.reset());
  };

  resetValidation = () => {
    Object.values(this.fields).forEach(({ field }) => field.resetValidation());
  };

  private parseErrorResponse(errorResponse?: any): ErrorFormMessage[] {
    if (!errorResponse) {
      return [];
    }

    if (Array.isArray(errorResponse)) {
      return errorResponse.map((error) => ({
        name: 'global',
        message: JSON.stringify(error),
      }));
    }

    if (
      typeof errorResponse === 'object' &&
      errorResponse !== null &&
      errorResponse.hasOwnProperty('detail') &&
      Array.isArray(errorResponse.detail)
    ) {
      return errorResponse.detail.map((info: DetailError) => {
        if (info.loc?.[0] === 'body') {
          return { name: info.loc[1], message: info.msg };
        }

        return { name: 'common', message: info.msg };
      });
    }

    return [{ name: 'common', message: JSON.stringify(errorResponse) }];
  }

  private submit = async ({
    url,
    body,
    method = 'POST',
    contentType = 'json',
    noRefresh,
  }: SubmitOptions): Promise<undefined | Record<string, unknown>> => {
    this.isSubmitting = true;
    let formBody: undefined | string | FormData = undefined;

    if (contentType === 'formData') {
      formBody = new FormData();
      for (let key in body) {
        formBody.append(key, body[key]);
      }
    } else {
      formBody = JSON.stringify(body);
    }

    const response = await this.requestStore.post(formBody, {
      url,
      method,
      contentType,
      noRefresh,
    });

    this.isSubmitting = false;

    if (this.requestStore.isError) {
      const errors = this.parseErrorResponse(this.requestStore.errorResponse);

      runInAction(() => {
        const formErrors = [];
        for (const error of errors) {
          const fieldInfo = this.fields[error.name];
          if (fieldInfo) {
            fieldInfo.field.setErrors([{ msg: error.message }]);
          } else {
            formErrors.push(error);
          }
        }

        this.formErrors = formErrors;
      });

      return undefined;
    }

    return response;
  };
}
