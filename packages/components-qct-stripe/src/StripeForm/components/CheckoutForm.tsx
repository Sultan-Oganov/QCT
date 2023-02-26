import { useState, type SyntheticEvent } from 'react';
// @ts-ignore
import styles from './CheckoutForm.module.css';
import {
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { type ClassProps, mapComponentOne } from '@qctoken/register';
import type { StripeFormNameType } from '../types';
import { useRunExecutor } from '@qctoken/executor';

export function CheckoutForm(props: ClassProps<StripeFormNameType>) {
  const { bc, pageStore, values } = props;
  const stripe = useStripe();
  const elements = useElements();
  const returnUrl = useRunExecutor(pageStore, bc.returnUrl, values);

  const [message, setMessage] = useState<string | null | undefined>(null);
  const [isLoading, setIsLoading] = useState(false);
  const isLoadingChilds = isLoading && bc.loadingChild;

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${window.location.origin}${returnUrl}`,
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === 'card_error' || error.type === 'validation_error') {
      setMessage(error.message);
    } else if (
      error.code === 'payment_intent_unexpected_state' &&
      error.payment_intent?.status === 'succeeded'
    ) {
      window.location.href = returnUrl;
    } else {
      setMessage('An unexpected error occurred.');
    }

    setIsLoading(false);
  };

  if (!stripe || !elements) {
    // Show loading indicator
    return null;
  }

  return (
    <>
      <form
        className={styles.paymentForm}
        css={isLoadingChilds ? { display: 'none' } : undefined}
        onSubmit={handleSubmit}
      >
        <PaymentElement className={styles.paymentElement} />
        {bc.buttonChild ? (
          mapComponentOne(bc.buttonChild, {
            ...props,
            disabled: props.disabled || isLoading,
          })
        ) : (
          <button disabled={isLoading} className={styles.button}>
            <span>
              {isLoading ? <div className={styles.spinner}></div> : 'Pay now'}
            </span>
          </button>
        )}
        {/* Show any error or success messages */}
        {message && <div className={styles.paymentMessage}>{message}</div>}
      </form>
      {isLoadingChilds && mapComponentOne(bc.loadingChild!, props)}
    </>
  );
}
