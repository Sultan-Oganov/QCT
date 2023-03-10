import type { PropsWithChildren, SVGProps } from 'react';
import { SVGIcon } from '../components/SVGIcon';

export function Refresh(props: PropsWithChildren<SVGProps<SVGSVGElement>>) {
  return (
    <SVGIcon {...props}>
      <path
        d="M19.0607 4.9375C17.247 3.125 14.758 2 11.9937 2C6.46529 2 2 6.475 2 12C2 17.525 6.46529 22 11.9937 22C16.6592 22 20.5491 18.8125 21.6623 14.5H19.0607C18.035 17.4125 15.2583 19.5 11.9937 19.5C7.85366 19.5 4.48906 16.1375 4.48906 12C4.48906 7.8625 7.85366 4.5 11.9937 4.5C14.07 4.5 15.9212 5.3625 17.272 6.725L13.2445 10.75H22V2L19.0607 4.9375Z"
        fill="currentColor"
      />
    </SVGIcon>
  );
}
