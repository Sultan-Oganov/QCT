import { SVGProps } from 'react';

const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={12} height={13} fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.88 6.5.44 3.06a1.498 1.498 0 0 1 0-2.121 1.501 1.501 0 0 1 2.12 0L6 4.379 9.44.938a1.501 1.501 0 0 1 2.12 0 1.501 1.501 0 0 1 0 2.12L8.122 6.5l3.44 3.44a1.501 1.501 0 0 1-2.121 2.12L6 8.62l-3.44 3.44a1.501 1.501 0 0 1-2.12 0 1.498 1.498 0 0 1 0-2.121l3.44-3.44Z"
      fill="#2C2D2E"
    />
  </svg>
);

export default CloseIcon;
