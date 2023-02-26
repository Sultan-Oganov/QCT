import { SVGProps } from 'react';

const AddIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={17} fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.667 7.167h10.666V8.5H2.667V7.167Z"
      fill="#98A7B4"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.333 13.167V2.5h1.334v10.667H7.333Z"
      fill="#98A7B4"
    />
  </svg>
);

export default AddIcon;
