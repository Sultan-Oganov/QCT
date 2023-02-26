import type { PropsWithChildren, SVGProps } from 'react';
import { SVGIcon } from '../components/SVGIcon';

export function Add(props: PropsWithChildren<SVGProps<SVGSVGElement>>) {
  return (
    <SVGIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 4c-.552 0-1 .398-1 .889V11H4.889C4.398 11 4 11.448 4 12s.398 1 .889 1H11v6.111c0 .491.448.889 1 .889s1-.398 1-.889V13h6.111c.491 0 .889-.448.889-1s-.398-1-.889-1H13V4.889C13 4.398 12.552 4 12 4Z"
        fill="currentColor"
      />
    </SVGIcon>
  );
}
