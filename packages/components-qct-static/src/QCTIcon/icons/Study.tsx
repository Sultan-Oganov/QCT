import type { PropsWithChildren, SVGProps } from 'react';
import { SVGIcon } from '../components/SVGIcon';

export function Study(props: PropsWithChildren<SVGProps<SVGSVGElement>>) {
  return (
    <SVGIcon {...props}>
      <path
        d="M16.5 24h-9c-1.242-.046-1.241-1.83 0-1.875h9c1.242.046 1.24 1.83 0 1.875Zm1.874-3.75H5.624a5.63 5.63 0 0 1-5.623-5.623V6.939a5.63 5.63 0 0 1 5.624-5.624h2.297c1.242.046 1.242 1.829 0 1.875H5.625a3.754 3.754 0 0 0-3.75 3.75v7.687a3.753 3.753 0 0 0 3.75 3.748h12.75a3.754 3.754 0 0 0 3.749-3.75v-.89c.046-1.242 1.829-1.241 1.875 0v.89a5.63 5.63 0 0 1-5.625 5.625Zm-1.18-6.89c-.392 0-.785-.067-1.158-.201l-2.343-.839a2.351 2.351 0 0 1-1.528-2.545l.413-2.825-.913-.446c-1.727-.813-1.73-3.364-.006-4.181l4.004-1.97a3.393 3.393 0 0 1 3.01-.001l4.015 1.97a2.34 2.34 0 0 1 1.31 2.07.937.937 0 0 1-1.875.033.464.464 0 0 0-.26-.42l-4.015-1.97a1.53 1.53 0 0 0-1.358 0l-4.004 1.97a.452.452 0 0 0 0 .814l4.009 1.957c.225.11.464.166.694.163a.938.938 0 0 1 .026 1.875 3.45 3.45 0 0 1-1.542-.353l-1.326-.647-.327 2.232a.47.47 0 0 0 .306.51l2.342.838c.325.117.683.122 1.01.015l2.757-1.035a.937.937 0 1 1 .659 1.755l-2.804 1.052a3.438 3.438 0 0 1-1.095.179Zm3.663-4.03a.937.937 0 0 1-.937-.938V7.076a.472.472 0 0 0-.262-.421L16.79 5.25a.937.937 0 1 1 .825-1.684l2.867 1.405a2.358 2.358 0 0 1 1.313 2.105v1.316c0 .518-.42.938-.938.938Z"
        fill="currentColor"
      />
    </SVGIcon>
  );
}
