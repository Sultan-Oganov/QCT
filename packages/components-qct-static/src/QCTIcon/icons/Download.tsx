import type { PropsWithChildren, SVGProps } from 'react';
import { SVGIcon } from '../components/SVGIcon';

export function Download(props: PropsWithChildren<SVGProps<SVGSVGElement>>) {
  return (
    <SVGIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.367 7.732a.75.75 0 0 1 0 1.5h-.941A2.927 2.927 0 0 0 3.5 12.157v4.884a2.938 2.938 0 0 0 2.935 2.936h11.14a2.93 2.93 0 0 0 2.925-2.925v-4.884a2.938 2.938 0 0 0-2.934-2.935h-.932a.75.75 0 0 1 0-1.5h.932A4.44 4.44 0 0 1 22 12.168v4.884a4.43 4.43 0 0 1-4.425 4.425H6.435A4.44 4.44 0 0 1 2 17.04v-4.885a4.43 4.43 0 0 1 4.426-4.424h.941ZM12.001 3a.75.75 0 0 1 .75.75l-.001 10.226 1.636-1.642a.749.749 0 1 1 1.062 1.059l-2.91 2.92a.756.756 0 0 1-.091.081l.085-.074a.736.736 0 0 1-.398.21l-.019.002a.732.732 0 0 1-.114.009l-.04-.003-.062-.004a.3.3 0 0 1-.013-.002l.115.009a.75.75 0 0 1-.53-.22l-.001-.001-2.916-2.927a.751.751 0 0 1 1.062-1.059l1.634 1.642V3.75A.75.75 0 0 1 12 3Z"
        fill="currentColor"
      />
    </SVGIcon>
  );
}
