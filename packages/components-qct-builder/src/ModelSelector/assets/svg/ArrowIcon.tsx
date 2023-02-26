import { SVGProps } from 'react';

const ArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m4 1.057 3.138 3.138-.943.943L4.667 3.61v5.057h8.666V10h-10V3.61L1.805 5.138l-.943-.943L4 1.057Z"
      fill="#98A7B4"
    />
  </svg>
);

export default ArrowIcon;
