import { SVGProps } from 'react';

const DeleteIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.667 2.667V0H5.333v2.667H0V4h2.667v12h10.666V4H16V2.667h-5.333Zm-4-1.334v1.334h2.666V1.333H6.667ZM12 4v10.667H4V4h8Z"
      fill="#FF5B5B"
    />
  </svg>
);

export default DeleteIcon;
