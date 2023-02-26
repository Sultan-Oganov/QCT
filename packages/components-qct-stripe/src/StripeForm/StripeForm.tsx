import { useMemo } from 'react';
import { useRunExecutor } from '@qctoken/executor';
import type { ClassProps } from '@qctoken/register';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import type { StripeFormNameType } from './types';
import { CheckoutForm } from './components/CheckoutForm';

const appearance = {
  theme: 'stripe' as const,
};

export function StripeForm(props: ClassProps<StripeFormNameType>) {
  const { pageStore, bc, values } = props;
  const clientSecret: string | undefined = useRunExecutor(
    pageStore,
    bc.getClientSecret,
    values,
  );
  const stripePromise = useMemo(
    () => bc.publishableKey && loadStripe(bc.publishableKey),
    [],
  );

  if (!clientSecret || !stripePromise) {
    return null;
  }

  const options = {
    clientSecret,
    appearance,
  };

  return (
    <Elements options={options} stripe={stripePromise}>
      <CheckoutForm {...props} />
    </Elements>
  );
}

export default StripeForm;
