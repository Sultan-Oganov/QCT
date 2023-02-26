import type { PropsWithChildren, SVGProps } from 'react';
import { SVGIcon } from '../components/SVGIcon';

export function Home(props: PropsWithChildren<SVGProps<SVGSVGElement>>) {
  return (
    <SVGIcon {...props}>
      <path
        d="m12 6.19 5 4.5v7.81h-2v-3a3 3 0 1 0-6 0v3H7v-7.81l5-4.5Zm.669-2.088a1 1 0 0 0-1.338 0l-7.394 6.655c-.681.613-.248 1.743.669 1.743H5v7a1 1 0 0 0 1 1h4.454a.545.545 0 0 0 .546-.546V15.5a1 1 0 1 1 2 0v4.454c0 .302.244.546.546.546H18a1 1 0 0 0 1-1v-7h.394c.917 0 1.35-1.13.669-1.743l-7.394-6.655Z"
        fill="currentColor"
      />
    </SVGIcon>
  );
}
