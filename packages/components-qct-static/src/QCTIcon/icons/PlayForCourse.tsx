import type { SVGProps } from 'react';
import { SVGIcon } from '../components/SVGIcon';

export function PlayForCourse(props: SVGProps<SVGSVGElement>) {
  return (
    <SVGIcon {...props}>
      <path
        d="M9.94 10.16a1 1 0 0 1 1.549-.835l2.29 1.506a1 1 0 0 1 0 1.671l-2.29 1.506a1 1 0 0 1-1.55-.836v-3.011Zm1.157-3.46C9.767 5.825 8 6.78 8 8.37v6.59c0 1.592 1.767 2.546 3.097 1.673l5.022-3.295a2 2 0 0 0 0-3.345L11.097 6.7Z"
        fill="currentColor"
      />
      <path
        d="M9.94 10.16a1 1 0 0 1 1.549-.835l2.29 1.506a1 1 0 0 1 0 1.671l-2.29 1.506a1 1 0 0 1-1.55-.836v-3.011Z"
        fill="currentColor"
      />
    </SVGIcon>
  );
}
