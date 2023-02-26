import type { PropsWithChildren, SVGProps } from 'react';
import { SVGIcon } from '../components/SVGIcon';

export function Wallet(props: PropsWithChildren<SVGProps<SVGSVGElement>>) {
  return (
    <SVGIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.318 1.5a6.943 6.943 0 0 1 6.935 6.937v8.3c0 3.824-3.11 6.936-6.935 6.936H7.32a6.945 6.945 0 0 1-6.936-6.936v-8.3A6.944 6.944 0 0 1 7.32 1.5h9.997Zm0 1.735H7.32A5.208 5.208 0 0 0 2.12 8.437v8.3a5.208 5.208 0 0 0 5.202 5.201h9.997c2.868 0 5.2-2.333 5.2-5.201v-.324h-3.814a3.985 3.985 0 0 1-3.98-3.977 3.987 3.987 0 0 1 3.98-3.981l3.814-.001v-.017a5.207 5.207 0 0 0-5.2-5.202Zm5.2 6.954h-3.814a2.25 2.25 0 0 0-2.245 2.246 2.248 2.248 0 0 0 2.245 2.244l3.814-.001v-4.49Zm-3.284 1.307a.868.868 0 0 1 0 1.735h-.361a.868.868 0 0 1 0-1.735h.36Zm-6.492-4.748a.868.868 0 0 1 0 1.735H6.498a.868.868 0 0 1 0-1.735h6.244Z"
        fill="currentColor"
      />
    </SVGIcon>
  );
}
