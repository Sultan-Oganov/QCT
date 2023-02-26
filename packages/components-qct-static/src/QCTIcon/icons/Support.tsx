import type { PropsWithChildren, SVGProps } from 'react';
import { SVGIcon } from '../components/SVGIcon';

export function Support(props: PropsWithChildren<SVGProps<SVGSVGElement>>) {
  return (
    <SVGIcon {...props}>
      <path
        d="M13 21a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1Zm.017-5.123c-.089.593-.544 1.123-1.143 1.123h-1.867a.007.007 0 0 1-.007-.007c0-1.65 0-3.075.672-4.073a6.304 6.304 0 0 1 1.913-1.62c.334-.214.649-.417.914-.628a3.712 3.712 0 0 0 1.332-3.824 3.033 3.033 0 0 0-5.664.177c-.18.52-.611.975-1.16.975H7c-.552 0-1.009-.451-.918-.996A6.002 6.002 0 0 1 12 2a6.04 6.04 0 0 1 5.434 3.366 6.017 6.017 0 0 1-.934 6.3c-.453.502-.96.95-1.514 1.337a7.248 7.248 0 0 0-1.316 1.167 4.23 4.23 0 0 0-.653 1.707Z"
        fill="currentColor"
      />
    </SVGIcon>
  );
}
