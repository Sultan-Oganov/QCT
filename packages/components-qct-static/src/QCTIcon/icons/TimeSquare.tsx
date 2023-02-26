import type { PropsWithChildren, SVGProps } from 'react';
import { SVGIcon } from '../components/SVGIcon';

export function TimeSquare(props: PropsWithChildren<SVGProps<SVGSVGElement>>) {
  return (
    <SVGIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.334 2C19.723 2 22 4.378 22 7.916v8.168C22 19.622 19.723 22 16.333 22H7.665C4.276 22 2 19.622 2 16.084V7.916C2 4.378 4.276 2 7.665 2h8.669Zm0 1.5H7.665C5.135 3.5 3.5 5.233 3.5 7.916v8.168c0 2.683 1.635 4.416 4.165 4.416h8.668c2.531 0 4.167-1.733 4.167-4.416V7.916c0-2.683-1.635-4.416-4.166-4.416Zm-4.335 3.384a.75.75 0 0 1 .75.75v3.936l3.026 1.803a.752.752 0 0 1-.769 1.29l-3.39-2.023a.754.754 0 0 1-.367-.644V7.634a.75.75 0 0 1 .75-.75Z"
        fill="currentColor"
      />
    </SVGIcon>
  );
}
