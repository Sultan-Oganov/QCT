import { SyntheticEvent, useEffect, useState } from 'react';
import { runOperator } from '@qctoken/executor';
import {
  type BuilderConfig,
  type ClassProps,
  mapComponentOne,
} from '@qctoken/register';
import type { CloudPaymentsFormNameType } from './types';
import { useStyles } from './CloudPaymentsForm.styles';

const SCRIPT_ID = 'cloudPayments-script';
const SCRIPT_LOAD_ERROR = 'CloudPayments: Script loading error';

function loadScript(scriptUrl: string) {
  if (document.getElementById(SCRIPT_ID)) {
    return Promise.resolve();
  }

  const script = document.createElement('script');
  script.src = scriptUrl;
  script.id = SCRIPT_ID;
  document.body.appendChild(script);

  return new Promise((res, rej) => {
    script.onload = res;
    script.onerror = rej;
  });
}

export function CloudPaymentsForm(
  props: ClassProps<CloudPaymentsFormNameType>,
) {
  const { pageStore, values, bc, disabled } = props;
  const [message, setMessage] = useState('');
  const [isScriptLoaded, setIsScriptLoaded] = useState(0);
  const isDisabled =
    disabled || message === SCRIPT_LOAD_ERROR || isScriptLoaded === 0;
  const styles = useStyles();
  const handleInvokeHandler = (
    handlerBc?: BuilderConfig,
    handlerValues?: any,
  ) => {
    if (!handlerBc) {
      return;
    }

    pageStore.stores
      .get(handlerBc.pageObjectId)
      ?.invokeHandler([bc, { values: handlerValues }]);
  };
  const handlePayInit = () => {
    // @ts-ignore
    const { cp } = window;

    if (!cp) {
      return null;
    }

    const payOptions = runOperator({ pageStore, values }, bc.getPayInfo);
    const widget = new cp.CloudPayments();

    widget.pay(
      'charge',
      {
        publicId: bc.publicId,
        ...payOptions,
      },
      {
        onSuccess: function (options: any) {
          handleInvokeHandler(bc.submitHandlerSuccess, { options, values });
        },
        onFail: function (reason: any, options: any) {
          setMessage(`CloudPayments: ${reason || 'error'}`);
          handleInvokeHandler(bc.submitHandlerFail, {
            reason,
            ...options,
            values,
          });
        },
      },
    );
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    handlePayInit();
  };

  useEffect(() => {
    loadScript(bc.scriptUrl).then(
      () => {
        setIsScriptLoaded(1);
      },
      () => {
        setMessage(SCRIPT_LOAD_ERROR);
      },
    );
  }, []);

  return (
    <div css={styles.root}>
      {bc.buttonChild && isScriptLoaded > 0 && (
        <form onSubmit={handleSubmit}>
          {mapComponentOne(bc.buttonChild, {
            ...props,
            disabled: isDisabled,
          })}
        </form>
      )}
      {message && <div css={styles.error}>{pageStore.translate(message)}</div>}
      {bc.submitHandlerSuccess &&
        mapComponentOne(bc.submitHandlerSuccess, props)}
      {bc.submitHandlerFail && mapComponentOne(bc.submitHandlerFail, props)}
    </div>
  );
}
