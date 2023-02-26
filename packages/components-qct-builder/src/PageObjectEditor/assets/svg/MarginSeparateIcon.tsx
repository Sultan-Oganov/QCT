import { SVGProps } from 'react';

const MarginSeparateIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={17} fill="none" {...props}>
    <g clipPath="url(#a)" fillRule="evenodd" clipRule="evenodd" fill="#2C2D2E">
      <path d="M4 1.167C4 .799 4.298.5 4.667.5h6.666a.667.667 0 1 1 0 1.333H4.667A.667.667 0 0 1 4 1.167Z" />
      <path
        opacity={0.3}
        d="M5.333 5.833v5.334h5.334V5.833H5.333ZM4 11.167c0 .736.597 1.333 1.333 1.333h5.334c.736 0 1.333-.597 1.333-1.333V5.833c0-.736-.597-1.333-1.333-1.333H5.333C4.597 4.5 4 5.097 4 5.833v5.334Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(0 .5)" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default MarginSeparateIcon;
