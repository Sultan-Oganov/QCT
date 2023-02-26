import type { PropsWithChildren, SVGProps } from 'react';
import { SVGIcon } from '../components/SVGIcon';

export function ExchangeArrows(
  props: PropsWithChildren<SVGProps<SVGSVGElement>>,
) {
  return (
    <SVGIcon {...props}>
      <path
        d="M23.01 8.967 17.293 3.24a.816.816 0 0 0-1.395.578v2.455h-5.719a.818.818 0 0 0 0 1.636h6.536a.818.818 0 0 0 .817-.818V5.793l3.747 3.752-3.747 3.753V12a.818.818 0 0 0-.817-.818H7.728V8.727a.818.818 0 0 0-1.395-.578L.614 13.876a.819.819 0 0 0 0 1.157l5.72 5.727a.816.816 0 0 0 1.394-.578v-2.455h5.719a.818.818 0 0 0 0-1.636H6.91a.818.818 0 0 0-.817.818v1.298l-3.747-3.753 3.747-3.752V12c0 .452.365.818.817.818h8.986v2.455a.818.818 0 0 0 1.395.578l5.719-5.727a.82.82 0 0 0 0-1.157Z"
        fill="currentColor"
      />
    </SVGIcon>
  );
}
