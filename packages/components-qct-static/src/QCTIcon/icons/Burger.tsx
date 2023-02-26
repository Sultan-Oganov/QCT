import type { PropsWithChildren, SVGProps } from 'react';
import { SVGIcon } from '../components/SVGIcon';

export function Burger(props: PropsWithChildren<SVGProps<SVGSVGElement>>) {
  return (
    <SVGIcon {...props}>
      <path
        d="M19.11 16c.491 0 .889.448.889 1s-.398 1-.889 1H4.888c-.491 0-.889-.448-.889-1s.398-1 .889-1H19.11ZM4.888 13c-.491 0-.889-.448-.889-1 0-.553.398-1 .889-1H19.11c.491 0 .889.447.889 1 0 .552-.398 1-.889 1H4.888ZM4.888 8c-.491 0-.889-.448-.889-1s.398-1 .889-1H19.11c.491 0 .889.448.889 1s-.398 1-.889 1H4.888Z"
        fill="currentColor"
      />
    </SVGIcon>
  );
}
