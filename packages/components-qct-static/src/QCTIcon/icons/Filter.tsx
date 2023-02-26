import type { PropsWithChildren, SVGProps } from 'react';
import { SVGIcon } from '../components/SVGIcon';

export function Filter(props: PropsWithChildren<SVGProps<SVGSVGElement>>) {
  return (
    <SVGIcon {...props}>
      <path
        d="M10.821 16.902H5.697"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M14.037 16.903c0 1.701.54 2.268 2.155 2.268 1.616 0 2.155-.567 2.155-2.268 0-1.702-.54-2.268-2.155-2.268-1.616 0-2.155.566-2.155 2.268Z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.223 8.162h5.123"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M10.008 8.16c0-1.7-.54-2.267-2.155-2.267-1.617 0-2.156.567-2.156 2.268 0 1.701.54 2.268 2.156 2.268 1.615 0 2.155-.567 2.155-2.268Z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVGIcon>
  );
}
