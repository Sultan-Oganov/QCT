import type { PropsWithChildren, SVGProps } from 'react';
import { SVGIcon } from '../components/SVGIcon';

export function Theme(props: PropsWithChildren<SVGProps<SVGSVGElement>>) {
  return (
    <SVGIcon {...props}>
      <path
        fill="currentColor"
        d="M11.625 1.5h-7.5a2.25 2.25 0 0 0-2.25 2.25v18.375h12v-1.5H3.75V3.75a.375.375 0 0 1 .375-.375h7.5A.375.375 0 0 1 12 3.75v9h1.875v-9a2.25 2.25 0 0 0-2.25-2.25Z"
      />
      <path
        fill="currentColor"
        d="M20.25 10.875H1.875V22.5H20.25a2.25 2.25 0 0 0 2.25-2.25v-7.125a2.25 2.25 0 0 0-2.25-2.25Zm.375 9.375a.375.375 0 0 1-.375.375H3.75V12.75h16.5a.375.375 0 0 1 .375.375v7.125Z"
      />
      <path
        fill="currentColor"
        d="M9.03 17.006a1.354 1.354 0 1 1-2.708 0 1.354 1.354 0 0 1 2.708 0Z"
      />
    </SVGIcon>
  );
}
