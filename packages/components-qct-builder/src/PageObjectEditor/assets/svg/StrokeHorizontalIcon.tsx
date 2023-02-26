import { SVGProps } from 'react';

const StrokeHorizontalIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={17} fill="none" {...props}>
    <g clipPath="url(#a)" fillRule="evenodd" clipRule="evenodd" fill="#2C2D2E">
      <path d="M4 15.833c0-.368.298-.666.667-.666h6.666a.667.667 0 1 1 0 1.333H4.667A.667.667 0 0 1 4 15.833ZM4 1.167C4 .798 4.298.5 4.667.5h6.666a.667.667 0 1 1 0 1.333H4.667A.667.667 0 0 1 4 1.167Z" />
      <path
        opacity={0.3}
        d="M14.667 1.833H1.333v13.334h13.334V1.833ZM1.333.5C.597.5 0 1.097 0 1.833v13.334c0 .736.597 1.333 1.333 1.333h13.334c.736 0 1.333-.597 1.333-1.333V1.833C16 1.097 15.403.5 14.667.5H1.333Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(0 .5)" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default StrokeHorizontalIcon;
