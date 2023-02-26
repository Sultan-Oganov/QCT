import type { ClassProps } from '@qctoken/register';
import { lazy } from 'react';
import type { QCTLandingNameType } from './types';

const App = lazy(() => import('qct-landing/src/App'));

export function QCTLanding({ bc }: ClassProps<QCTLandingNameType>) {
  const { startLink, buyQCTLink } = bc;
  return <App startLink={startLink} buyQCTLink={buyQCTLink} />;
}
