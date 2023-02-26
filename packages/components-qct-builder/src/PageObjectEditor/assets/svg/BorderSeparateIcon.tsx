import { SVGProps } from 'react';

const BorderSeparateIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={17} fill="none" {...props}>
    <g clipPath="url(#a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 1.833H1.333V4.5H0V1.833C0 1.097.597.5 1.333.5H4v1.333Z"
        fill="#2C2D2E"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(0 .5)" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default BorderSeparateIcon;
