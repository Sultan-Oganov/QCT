import { useMemo } from 'react';
import type { ClassProps } from '@qctoken/register';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import type { StripeResultNameType } from './types';
import { StripeResultInfo } from './components/StripeResultInfo';

const appearance = {
  theme: 'stripe' as const,
};

export function StripeResult({ bc }: ClassProps<StripeResultNameType>) {
  const stripePromise = useMemo(
    () => bc.loadScriptSrc && loadStripe(bc.loadScriptSrc),
    [],
  );

  if (!stripePromise) {
    return null;
  }

  const options = {
    appearance,
  };

  return (
    <Elements options={options} stripe={stripePromise}>
      <StripeResultInfo />
    </Elements>
  );
}

export default StripeResult;
