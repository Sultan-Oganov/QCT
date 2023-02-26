import { SVGProps } from 'react';

const LineIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.667 4v6.667H3.333V4h1.334Z"
      fill="#98A7B4"
    />
  </svg>
);

export default LineIcon;
