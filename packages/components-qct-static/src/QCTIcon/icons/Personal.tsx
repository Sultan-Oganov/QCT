import type { PropsWithChildren, SVGProps } from 'react';
import { SVGIcon } from '../components/SVGIcon';

export function Personal(props: PropsWithChildren<SVGProps<SVGSVGElement>>) {
  return (
    <SVGIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 14.577h.14l.31.001c2.374.016 7.8.246 7.8 3.786 0 3.517-5.237 3.746-7.763 3.761h-.936c-2.374-.015-7.801-.246-7.801-3.781 0-3.521 5.427-3.75 7.801-3.766h.45Zm0 1.776c-2.921 0-6.405.346-6.405 1.991 0 1.608 3.276 1.984 6.138 2.005l.268.001c2.922 0 6.404-.344 6.404-1.986 0-1.662-3.482-2.011-6.404-2.011ZM12 2.25c3.1 0 5.62 2.427 5.62 5.408 0 2.982-2.52 5.409-5.62 5.409h-.033a5.669 5.669 0 0 1-3.958-1.593 5.248 5.248 0 0 1-1.626-3.82c0-2.977 2.52-5.404 5.618-5.404Zm0 1.776c-2.08 0-3.772 1.63-3.772 3.632a3.522 3.522 0 0 0 1.09 2.564 3.808 3.808 0 0 0 2.652 1.07l.03.887v-.888c2.081 0 3.775-1.628 3.775-3.633 0-2.002-1.694-3.632-3.774-3.632Z"
        fill="currentColor"
      />
    </SVGIcon>
  );
}
