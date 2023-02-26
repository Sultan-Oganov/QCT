import type { PropsWithChildren, SVGProps } from 'react';
import { SVGIcon } from '../components/SVGIcon';

export function Unlock(props: PropsWithChildren<SVGProps<SVGSVGElement>>) {
  return (
    <SVGIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.051 1.125a5.85 5.85 0 0 1 5.524 3.934.827.827 0 1 1-1.564.54 4.196 4.196 0 0 0-3.963-2.82h-.016a4.198 4.198 0 0 0-4.196 4.173v1.48l8.416.001a5.016 5.016 0 0 1 5.01 5.01v4.729a5.015 5.015 0 0 1-5.01 5.01H7.824a5.015 5.015 0 0 1-5.009-5.01v-4.729A5.018 5.018 0 0 1 6.181 8.71l.001-1.739c.014-3.24 2.635-5.846 5.847-5.846h.022Zm4.201 8.962H7.824a3.359 3.359 0 0 0-3.354 3.356v4.729a3.359 3.359 0 0 0 3.354 3.356h8.428a3.36 3.36 0 0 0 3.355-3.356v-4.729a3.36 3.36 0 0 0-3.355-3.356Zm-4.213 3.668c.456 0 .827.37.827.827v2.45a.827.827 0 0 1-1.655 0v-2.45c0-.456.371-.827.828-.827Z"
        fill="currentColor"
      />
    </SVGIcon>
  );
}
