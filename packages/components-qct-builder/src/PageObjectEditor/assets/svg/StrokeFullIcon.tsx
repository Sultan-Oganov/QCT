import { SVGProps } from 'react';

const StrokeFullIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={17} fill="none" {...props}>
    <g clipPath="url(#a)" fillRule="evenodd" clipRule="evenodd" fill="#2C2D2E">
      <path
        opacity={0.3}
        d="M14.667 1.833H1.333v13.334h13.334V1.833ZM1.333.5C.597.5 0 1.097 0 1.833v13.334c0 .736.597 1.333 1.333 1.333h13.334c.736 0 1.333-.597 1.333-1.333V1.833C16 1.097 15.403.5 14.667.5H1.333Z"
      />
      <path d="M12 1.167a.667.667 0 0 1-.667.666H4.667a.667.667 0 1 1 0-1.333h6.666c.368 0 .667.298.667.667ZM12 15.833a.667.667 0 0 1-.667.667H4.667a.667.667 0 0 1 0-1.333h6.666c.368 0 .667.298.667.666ZM.667 4.5c.368 0 .666.298.666.667v6.666a.667.667 0 1 1-1.333 0V5.167C0 4.798.298 4.5.667 4.5ZM15.333 4.5c.369 0 .667.298.667.667v6.666a.667.667 0 0 1-1.333 0V5.167c0-.369.298-.667.666-.667Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(0 .5)" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default StrokeFullIcon;
