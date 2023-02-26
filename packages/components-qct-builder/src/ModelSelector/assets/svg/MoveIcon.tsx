import { SVGProps } from 'react';

const MoveIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={17} fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 5.833H4V4.5h8v1.333ZM12 8.36H4V7.026h8V8.36ZM12 10.886H4V9.553h8v1.333Z"
      fill="#98A7B4"
    />
  </svg>
);

export default MoveIcon;
