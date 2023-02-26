import { type SyntheticEvent, useEffect } from 'react';
import { ClassProps, mapComponentOne, mapComponents } from '@qctoken/register';
import { FormContext, useForm } from '@qctoken/form';
import type { FormNameType } from './types';
import { FormModel } from './FormModel';
import {
  reaction,
  observer,
  getValuesFromStore,
  removeGlobalsFromStore,
  setGlobalsToStore,
  useGlobalQueryParams,
  useModel,
} from '@qctoken/store';
import { useAdaptiveAttribute } from '@qctoken/theme';

export const Form = observer(function Form(props: ClassProps<FormNameType>) {
  const { bc, pageStore, values } = props;
  const { getGlobal, setGlobal } = bc;
  const formStore = useForm(props);
  const [store] = useModel(
    FormModel,
    props,
    () => new FormModel(props, { form: formStore }),
  );
  const cssBc = useAdaptiveAttribute(bc, pageStore, ['minWidth']);

  useGlobalQueryParams(store, props.pageStore, bc.queryParams);

  useEffect(() => {
    if (!setGlobal?.rules) {
      return undefined;
    }
    const { rules } = setGlobal;
    const disposer = reaction(
      () => formStore.values,
      (formValues) => {
        setGlobalsToStore(pageStore, formValues, rules);
      },
      {
        delay: setGlobal.debounce,
      },
    );

    return () => {
      disposer();
      removeGlobalsFromStore(pageStore, rules);
    };
  }, [setGlobal]);

  useEffect(() => {
    if (!getGlobal?.rules) {
      return undefined;
    }
    const { rules } = getGlobal;

    return reaction(
      () => getValuesFromStore(pageStore, rules),
      (globalValues) => {
        if (
          typeof globalValues === 'object' &&
          globalValues !== null &&
          globalValues !== formStore.values
        ) {
          formStore.updateValues(globalValues);
        }
      },
      {
        fireImmediately: true,
        delay: getGlobal.debounce,
      },
    );
  }, [getGlobal]);

  useEffect(() => {
    const disposer = reaction(
      () => store.requestStore.record,
      (data) => {
        if (data) {
          formStore.updateValues(data);
          formStore.setInitialValues(data);
        }
      },
    );

    return () => {
      store.clear();
      disposer();
    };
  }, []);

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    if (!bc.submitQuery) {
      if (formStore.isValid) {
        formStore.commitInitialValues();
        return store.onSubmitSuccess(formStore.values);
      }

      return undefined;
    }

    const response = await formStore.onSubmit({
      url: store.getSubmitUrl(values),
      method: store.getSubmitMethod(values),
      contentType: bc.isFormData ? 'formData' : 'json',
      noRefresh: !bc.isRefreshAfterSubmit,
    });

    if (formStore.isValid) {
      store.onSubmitSuccess(response);
      formStore.commitInitialValues();
    } else {
      // TODO: invoke Error handler
    }
  };

  const handleReset = (event: SyntheticEvent) => {
    event.preventDefault();
    formStore.reset();
  };

  return (
    <FormContext.Provider value={formStore}>
      <form
        onSubmit={handleSubmit}
        onReset={handleReset}
        css={[
          {
            height: bc.height,
            width: bc.width,
            minWidth: cssBc.minWidth,
          },
          bc.overflowY && { overflowY: bc.overflowY },
        ]}
      >
        {mapComponents(bc.childs, {
          ...props,
          disabled: formStore.requestStore.isLoading,
        })}
      </form>
      {bc.submitHandlerSuccess &&
        mapComponentOne(bc.submitHandlerSuccess, props)}
    </FormContext.Provider>
  );
});
