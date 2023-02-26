import type { PropsWithChildren, SVGProps } from 'react';
import { SVGIcon } from '../components/SVGIcon';

export function Leave(props: PropsWithChildren<SVGProps<SVGSVGElement>>) {
  return (
    <SVGIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.442 4.6c-.71.527-1.091 1.398-1.25 3.116a.937.937 0 1 1-1.867-.172c.172-1.862.626-3.431 2-4.45 1.308-.968 3.253-1.281 5.934-1.281 3.55 0 5.834.55 7.012 2.469.556.905.796 2.016.911 3.258.115 1.236.115 2.718.115 4.421v.078c0 1.703 0 3.185-.115 4.421-.115 1.242-.355 2.352-.911 3.258-1.178 1.918-3.463 2.47-7.012 2.47-2.68 0-4.626-.314-5.933-1.282-1.375-1.019-1.83-2.588-2-4.45a.937.937 0 0 1 1.866-.172c.159 1.718.54 2.589 1.25 3.115.778.577 2.167.913 4.817.913 3.551 0 4.817-.603 5.414-1.575.332-.54.536-1.308.642-2.45.106-1.14.107-2.537.107-4.287s0-3.147-.107-4.286c-.106-1.143-.31-1.912-.642-2.45-.597-.973-1.863-1.577-5.414-1.577-2.65 0-4.04.337-4.817.914ZM11.2 8.544a.938.938 0 0 1 1.326-.002l2.928 2.915a.938.938 0 0 1 0 1.33L12.526 15.7a.938.938 0 0 1-1.323-1.329l1.32-1.314H2.75a.937.937 0 1 1 0-1.875h9.772l-1.32-1.314a.938.938 0 0 1-.002-1.326Z"
        fill="currentColor"
      />
    </SVGIcon>
  );
}
