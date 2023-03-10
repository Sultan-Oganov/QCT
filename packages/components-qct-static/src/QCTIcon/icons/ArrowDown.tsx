import type { PropsWithChildren, SVGProps } from 'react';
import { SVGIcon } from '../components/SVGIcon';

export function ArrowDown(props: PropsWithChildren<SVGProps<SVGSVGElement>>) {
  return (
    <SVGIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.625 8.337a.938.938 0 0 1 1.536 1.076l-.708-.496.708.496-.001.002-.003.004-.011.016a11.333 11.333 0 0 1-.191.264 32.137 32.137 0 0 1-2.444 2.944c-.758.804-1.637 1.636-2.544 2.273-.882.619-1.918 1.147-2.967 1.147-1.048 0-2.084-.528-2.966-1.147-.907-.637-1.786-1.469-2.543-2.273a32.13 32.13 0 0 1-2.636-3.208l-.01-.016-.004-.004-.001-.002.768-.538-.768.538a.938.938 0 0 1 1.535-1.076l.002.003.008.011a11.151 11.151 0 0 0 .172.237 30.267 30.267 0 0 0 2.299 2.769c.714.759 1.494 1.49 2.256 2.024.787.553 1.429.807 1.888.807.46 0 1.102-.254 1.89-.807.76-.534 1.541-1.265 2.255-2.024A30.239 30.239 0 0 0 18.581 8.4l.034-.048.009-.011.001-.003Z"
        fill="currentColor"
      />
    </SVGIcon>
  );
}
