import type { PropsWithChildren, SVGProps } from 'react';
import { SVGIcon } from '../components/SVGIcon';

export function Show(props: PropsWithChildren<SVGProps<SVGSVGElement>>) {
  return (
    <SVGIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.002 9.828a2.224 2.224 0 1 0 0 4.448 2.224 2.224 0 0 0 0-4.448Zm-4.1 2.224a4.1 4.1 0 1 1 8.199 0 4.1 4.1 0 0 1-8.199 0Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.854 6.455c1.825-1.542 4.348-2.643 7.148-2.643s5.322 1.1 7.147 2.642c1.8 1.521 3.043 3.586 3.043 5.598s-1.243 4.077-3.043 5.598c-1.825 1.542-4.347 2.642-7.147 2.642s-5.323-1.1-7.148-2.643c-1.8-1.522-3.042-3.586-3.042-5.597 0-2.01 1.243-4.075 3.042-5.597Zm1.211 1.432c-1.549 1.31-2.378 2.896-2.378 4.165 0 1.27.83 2.856 2.378 4.165 1.524 1.289 3.627 2.2 5.937 2.2 2.31 0 4.413-.91 5.937-2.199 1.548-1.309 2.378-2.895 2.378-4.166 0-1.27-.83-2.857-2.378-4.166-1.524-1.288-3.628-2.199-5.937-2.199-2.31 0-4.413.911-5.937 2.2Z"
        fill="currentColor"
      />
    </SVGIcon>
  );
}
