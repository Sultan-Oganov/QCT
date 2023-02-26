import { SVGProps } from 'react';

const PaddingFullIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={17} fill="none" {...props}>
    <g clipPath="url(#a)" fillRule="evenodd" clipRule="evenodd" fill="#2C2D2E">
      <path d="M10.667 3.833A.667.667 0 0 1 10 4.5H6a.667.667 0 0 1 0-1.333h4c.368 0 .667.298.667.666ZM10.667 13.167a.667.667 0 0 1-.667.666H6A.667.667 0 1 1 6 12.5h4c.368 0 .667.299.667.667ZM3.333 5.833c.369 0 .667.299.667.667v4a.667.667 0 1 1-1.333 0v-4c0-.368.298-.667.666-.667ZM12.667 5.833c.368 0 .666.299.666.667v4a.667.667 0 1 1-1.333 0v-4c0-.368.299-.667.667-.667Z" />
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

export default PaddingFullIcon;
