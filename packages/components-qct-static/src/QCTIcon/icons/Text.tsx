import type { PropsWithChildren, SVGProps } from 'react';
import { SVGIcon } from '../components/SVGIcon';

export function Text(props: PropsWithChildren<SVGProps<SVGSVGElement>>) {
  return (
    <SVGIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.877.878c.048 0 .096.005.142.012l.155.001a.85.85 0 0 1 .612.26l5.728 5.968a.848.848 0 0 1 .236.587V18.07a5.222 5.222 0 0 1-5.031 5.271l-9.068.001h-.124a5.186 5.186 0 0 1-5.06-5.046V5.957C2.532 3.15 4.85.89 7.635.89h7.1a.852.852 0 0 1 .142-.013Zm-.848 1.71H7.637a3.49 3.49 0 0 0-3.474 3.389V18.07a3.49 3.49 0 0 0 3.403 3.576h9.119c1.887-.078 3.382-1.646 3.369-3.569V8.775l-2.273.001a3.768 3.768 0 0 1-3.752-3.76V2.587Zm.637 12.548a.848.848 0 0 1 0 1.697H8.559a.848.848 0 0 1 0-1.697h6.107Zm-2.313-4.243a.848.848 0 0 1 0 1.697H8.558a.848.848 0 0 1 0-1.697h3.795Zm3.372-7.355v1.478c0 1.136.924 2.06 2.058 2.064l1.341-.001-3.4-3.54Z"
        fill="currentColor"
      />
    </SVGIcon>
  );
}
