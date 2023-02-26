import { SVGProps } from 'react';

const MarginFullIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={17} fill="none" {...props}>
    <g clipPath="url(#a)" fillRule="evenodd" clipRule="evenodd" fill="#2C2D2E">
      <path d="M12 1.167a.667.667 0 0 1-.667.666H4.667a.667.667 0 1 1 0-1.333h6.666c.368 0 .667.298.667.667Z" />
      <path
        opacity={0.3}
        d="M10.667 5.833H5.333v5.334h5.334V5.833ZM5.333 4.5C4.597 4.5 4 5.097 4 5.833v5.334c0 .736.597 1.333 1.333 1.333h5.334c.736 0 1.333-.597 1.333-1.333V5.833c0-.736-.597-1.333-1.333-1.333H5.333Z"
      />
      <path d="M12 15.833a.667.667 0 0 1-.667.667H4.667a.667.667 0 0 1 0-1.333h6.666c.368 0 .667.298.667.666ZM.667 4.5c.368 0 .666.298.666.667v6.666a.667.667 0 1 1-1.333 0V5.167C0 4.798.298 4.5.667 4.5ZM15.333 4.5c.369 0 .667.298.667.667v6.666a.667.667 0 0 1-1.333 0V5.167c0-.369.298-.667.666-.667Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(0 .5)" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default MarginFullIcon;
