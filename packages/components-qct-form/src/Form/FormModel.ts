import {
  BaseStoreModel,
  setGlobalsToStore,
  type HandlerOptions,
} from '@qctoken/store';
import type { BuilderConfig, ClassProps } from '@qctoken/register';
import { runOperator } from '@qctoken/executor';
import type { Form } from '@qctoken/form';
import { FormNameType } from './types';

type FormModelOptions = {
  form: Form;
};

export class FormModel extends BaseStoreModel<FormNameType> {
  form: Form;

  constructor(props: ClassProps<FormNameType>, options: FormModelOptions) {
    super(props);

    this.form = options.form;
  }

  public clear = (): Promise<boolean> => {
    return Promise.resolve(false);
  };

  onSubmitSuccess = async (response: any) => {
    const { bc, pageStore } = this;

    if (bc.setGlobal?.rules?.length) {
      setGlobalsToStore(pageStore, response, bc.setGlobal.rules);
      pageStore.invokeHandler('globalsUp', {});
    }

    if (bc.submitHandlerSuccess && pageStore.stores) {
      return pageStore.stores
        .get(bc.submitHandlerSuccess.pageObjectId)
        ?.invokeHandler([bc, { values: response }]);
    }

    return Promise.resolve(true);
  };

  getSubmitMethod = (values: ClassProps<FormNameType>['values']) => {
    const { bc, pageStore } = this;

    return runOperator({ pageStore, values }, bc.submitMethod);
  };

  getSubmitUrl = (values: ClassProps<FormNameType>['values']) => {
    const { bc, pageStore } = this;

    return typeof bc.submitQuery === 'object'
      ? runOperator({ pageStore, values }, bc.submitQuery)
      : bc.submitQuery;
  };

  handlers = {
    onProcess: () => Promise.resolve(false),
    onSetValues: (_: BuilderConfig, options: HandlerOptions) => {
      if (options.values) {
        this.form.updateValues(options.values);
      }
      return Promise.resolve(true);
    },
    onRefresh: async () => {
      const result = this.requestStore.refresh();

      return result !== undefined;
    },
  };
}
