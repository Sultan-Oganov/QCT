import { SVGProps } from 'react';

const BorderFullIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={17} fill="none" {...props}>
    <g clipPath="url(#a)" fillRule="evenodd" clipRule="evenodd" fill="#2C2D2E">
      <path d="M4 1.833H1.333V4.5H0V1.833C0 1.097.597.5 1.333.5H4v1.333ZM12 1.833h2.667V4.5H16V1.833C16 1.097 15.403.5 14.667.5H12v1.333ZM1.333 12.5v2.667H4V16.5H1.333A1.333 1.333 0 0 1 0 15.167V12.5h1.333ZM14.667 12.5v2.667H12V16.5h2.667c.736 0 1.333-.597 1.333-1.333V12.5h-1.333Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(0 .5)" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default BorderFullIcon;
